"use client";

import React from "react";
import { Upload, Sparkles, Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface JobInputCardProps {
  files: File[];
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
  handleSubmit: () => void;
  input: string;
  setInput: (value: string) => void;
}

export function JobInputCard({
  files,
  onFileChange,
  onRemoveFile,
  handleSubmit,
  input,
  setInput,
}: JobInputCardProps) {
  return (
    <Card className="shadow-xl border-slate-200 w-full">
      <CardContent className=" space-y-4 pt-6">
        <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Proposal Generator</h2>
            <p className="text-slate-500">Paste the job description below to get started.</p>
        </div>
        
        {/* Job Description Input */}
        <div className="space-y-2">
          <Textarea
            id="job-desc"
            placeholder="Paste the full job description here..."
            className="min-h-[250px] max-h-[450px] resize-none focus-visible:ring-blue-600 text-base"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer relative group">
            <input
              type="file"
              multiple
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={onFileChange}
            />
            <Upload className="h-8 w-8 text-slate-400 mb-2 group-hover:text-blue-500 transition-colors" />
            <p className="text-sm font-medium text-slate-700">
              Click to upload files
            </p>
            <p className="text-xs text-slate-500">
              PDF, DOCX, or Images
            </p>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-slate-100 rounded-md text-sm border border-slate-200"
                >
                  <Paperclip className="h-3 w-3 text-blue-500 shrink-0" />
                  <span className="truncate max-w-[150px]">{file.name}</span>
                  <button
                    onClick={() => onRemoveFile(index)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 shadow-md transition-all hover:shadow-lg"
          onClick={handleSubmit}
          disabled={!input}
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Generate Proposal
        </Button>
      </CardContent>
    </Card>
  );
}