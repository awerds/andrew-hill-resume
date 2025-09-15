"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalProps {
  className?: string;
  children?: React.ReactNode;
}

export const Terminal = ({ className, children }: TerminalProps) => {
  return (
    <div className={cn(
      "bg-black border-2 border-green-500 rounded-lg font-mono text-green-400 shadow-lg shadow-green-500/20",
      className
    )}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-green-500">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-green-400 text-sm">andrew@resume:~$</div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const Typewriter = ({ text, delay = 50, className, onComplete }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

interface PixelCardProps {
  title: string;
  content: string;
  className?: string;
}

export const PixelCard = ({ title, content, className }: PixelCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "bg-gray-900 border-2 border-cyan-400 p-4 font-mono text-cyan-400 shadow-lg shadow-cyan-400/20",
        "relative overflow-hidden",
        className
      )}
      style={{
        clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))"
      }}
    >
      <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400"></div>
      
      <h3 className="text-yellow-400 font-bold mb-2 text-lg">{title}</h3>
      <p className="text-green-400 leading-relaxed">{content}</p>
    </motion.div>
  );
};

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  className?: string;
}

export const ProgressBar = ({ label, value, maxValue = 100, className }: ProgressBarProps) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className={cn("font-mono", className)}>
      <div className="flex justify-between text-cyan-400 mb-1">
        <span>{label}</span>
        <span>{value}/{maxValue}</span>
      </div>
      <div className="w-full bg-gray-800 border border-green-500 h-4 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          {Math.round(percentage)}%
        </div>
      </div>
    </div>
  );
};