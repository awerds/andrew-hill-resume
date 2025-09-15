"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CommandTerminalProps {
  className?: string;
  onCommand?: (command: string) => void;
}

export const CommandTerminal = ({ className, onCommand }: CommandTerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      onCommand?.(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  return (
    <div className={cn("bg-black border-2 border-green-500 rounded-lg font-mono text-green-400", className)}>
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-green-500">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-green-400 text-sm">Interactive Resume Terminal</div>
      </div>
      
      <div className="p-4">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-yellow-400 mr-2">andrew@resume:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 outline-none font-mono"
            placeholder="Type 'help' for commands..."
            autoComplete="off"
          />
          <span className="animate-pulse text-green-400">|</span>
        </form>
      </div>
    </div>
  );
};

interface CommandOutputProps {
  command: string;
  output: React.ReactNode;
  className?: string;
}

export const CommandOutput = ({ command, output, className }: CommandOutputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("bg-black border-2 border-cyan-400 rounded-lg font-mono p-4", className)}
    >
      <div className="text-yellow-400 mb-2">
        <span className="text-yellow-400">andrew@resume:~$</span> {command}
      </div>
      <div className="text-green-400">
        {output}
      </div>
    </motion.div>
  );
};