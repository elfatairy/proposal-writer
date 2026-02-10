import React from "react";

export function ProposalHeader() {
  return (
    <div className="text-center space-y-2 mb-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Proposal<span className="text-blue-600">AI</span>
      </h1>
      <p className="text-slate-500">
        Generate winning Upwork proposals in seconds using context-aware AI.
      </p>
    </div>
  );
}