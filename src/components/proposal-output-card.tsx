"use client";

import React, { useRef } from "react";
import { Copy, ArrowLeft, RotateCcw, Send, Check, Sparkles, Edit2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChatMessage } from "@/app/api/generate/route";

interface ProposalOutputCardProps {
  messages: ChatMessage[];
  status: "streaming" | "submitted" | "ready" | "error";
  error: undefined | unknown;
  onRegenerate: () => void;
  onBack: () => void;
  chatInput: string;
  setChatInput: (val: string) => void;
  handleChatSubmit: (e: React.FormEvent) => void;
}

export function ProposalOutputCard({
  messages,
  status,
  error,
  onRegenerate,
  onBack,
  chatInput,
  setChatInput,
  handleChatSubmit,
}: ProposalOutputCardProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isLoading = status === "streaming" || status === "submitted";

  // Filter to get the very last message from the assistant
  const lastAssistantMessage = messages.filter((m) => m.role === "assistant").at(-1);
  const content = lastAssistantMessage?.parts.filter((p) => p.type === "text").map((p) => p.text).join("") || "";

  // Check if refining: Loading is true AND the last message in the array is from the USER
  const isRefining = isLoading && messages[messages.length - 1]?.role === "user";

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <Card className="h-full flex flex-col p-0 gap-0 shadow-2xl border-slate-200 overflow-hidden bg-white">
      {/* Header Toolbar */}
      <div className="flex items-center justify-between p-2 border-b border-slate-100 bg-white z-10 shrink-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-slate-600 hover:text-slate-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Input
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onRegenerate}
            disabled={isLoading}
            title="Retry the last generation"
          >
            <RotateCcw className={cn("mr-2 h-4 w-4", isLoading && "animate-spin")} />
            Regenerate
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className={cn(isCopied ? "text-green-600 border-green-600 bg-green-50" : "")}
            disabled={!content}
          >
            {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {isCopied ? "Copied" : "Copy Text"}
          </Button>
        </div>
      </div>

      {/* Main Content Area - Document View */}
      <CardContent
        className="flex-1 overflow-y-auto p-2 bg-slate-50 relative"
        ref={scrollRef}
      >
        {isRefining && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-20">
            <Sparkles className="h-10 w-10 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-600 font-medium animate-pulse">Refining proposal...</p>
          </div>
        )}

        {error ? (
          <div className="h-full flex flex-col items-center justify-center text-red-500 space-y-4">
            <AlertCircle className="h-8 w-8" />
            <p>Something went wrong generating the proposal.</p>
          </div>
        ) : content ? (
          <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-sm min-h-full border border-slate-200 text-slate-800 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        ) : (
          // Initial Loading State
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
            <Sparkles className="h-8 w-8 animate-spin text-blue-500" />
            <p>Generating your first draft...</p>
          </div>
        )}
      </CardContent>

      {/* Refinement Input Footer */}
      <div className="p-2 bg-white border-t border-slate-200 shrink-0">
        <form onSubmit={handleChatSubmit} className="flex gap-2 max-w-4xl mx-auto w-full">
          <div className="relative flex-1">
            <Edit2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Refine this result (e.g., 'Make it shorter', 'Add a formal tone')..."
              className="pl-9 focus-visible:ring-blue-600"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading || !chatInput.trim()}
            className="bg-blue-600 hover:bg-blue-700 w-12 px-0"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </Card>
  );
}