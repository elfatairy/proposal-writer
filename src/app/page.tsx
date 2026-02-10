"use client";

import React, { useState } from "react";
import { JobInputCard } from "@/components/job-input-card";
import { ProposalOutputCard } from "@/components/proposal-output-card";
import { LogoutButton } from "@/components/logout-button";
import { useChat } from "@ai-sdk/react";
import { ChatMessage } from "./api/generate/route";
import { DefaultChatTransport } from "ai";

export default function ProposalGenerator() {
  const [step, setStep] = useState<"input" | "output">("input");
  const [files, setFiles] = useState<File[]>([]);
  const [initialJobDesc, setInitialJobDesc] = useState("");
  const [refinementInput, setRefinementInput] = useState("");

  const {
    messages,
    sendMessage,
    status,
    error,
    stop,
    setMessages
  } = useChat<ChatMessage>({
    transport: new DefaultChatTransport({
      api: "/api/generate",
    }),
  });

  const handleInitialSubmit = async () => {
    if (!initialJobDesc) return;
    setStep("output");

    const fileContext = files.length > 0 
      ? `\n\nAttached Files: ${files.map(f => f.name).join(", ")}` 
      : "";

    await sendMessage({
      text: `Please generate a proposal for the following job description:\n\n${initialJobDesc}${fileContext}`,
    });
  };

  const handleRefineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!refinementInput.trim()) return;

    await sendMessage({
      text: refinementInput,
    });
    setRefinementInput("");
  };

  const handleRegenerate = async () => {
    const lastUserMessageIndex = messages.findLastIndex(m => m.role === 'user');
    
    if (lastUserMessageIndex !== -1) {
      const lastUserMessage = messages[lastUserMessageIndex] as ChatMessage;
      
      const content = lastUserMessage.parts
            .filter((p) => p.type === 'text')
            .map((p) => p.text)
            .join('')

      const newHistory = messages.slice(0, lastUserMessageIndex);
      setMessages(newHistory);

      await sendMessage({
        text: content,
      });
    }
  };

  const handleBack = () => {
    stop();
    setMessages([]);
    setStep("input");
    setRefinementInput("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen bg-slate-50 p-4 font-sans text-slate-900 overflow-hidden relative">
      <LogoutButton />
      <div className="h-full max-w-7xl mx-auto">
        {step === "input" ? (
          <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <JobInputCard
                input={initialJobDesc}
                setInput={setInitialJobDesc}
                files={files}
                onFileChange={handleFileChange}
                onRemoveFile={handleRemoveFile}
                handleSubmit={handleInitialSubmit}
              />
            </div>
          </div>
        ) : (
          <div className="h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ProposalOutputCard
              messages={messages as ChatMessage[]}
              status={status}
              error={error}
              onRegenerate={handleRegenerate}
              onBack={handleBack}
              chatInput={refinementInput}
              setChatInput={setRefinementInput}
              handleChatSubmit={handleRefineSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}