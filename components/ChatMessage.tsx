"use client"
import React from 'react';
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={cn(
        "py-5 px-6 md:px-8 animate-fade-in",
        isUser ? "bg-chat-user" : "bg-chat-ai"
      )}
    >
      <div className="max-w-3xl mx-auto flex gap-4 md:gap-6">
        <div className="flex-shrink-0 mt-1">
          {isUser ? (
            <div className="h-7 w-7 rounded-full bg-purple-600 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          ) : (
            <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
        <div className="min-w-0">
          <div className="text-sm text-gray-500 mb-1">
            {isUser ? 'You' : 'AI Assistant'}
          </div>
          <div className="prose prose-sm md:prose-base text-gray-800 whitespace-pre-wrap">
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
