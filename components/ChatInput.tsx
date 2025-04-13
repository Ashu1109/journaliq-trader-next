"use client"
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="bg-chat-input border-t p-4">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="flex items-end gap-2 relative">
          <div className="relative flex-grow">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              rows={1}
              className="w-full border rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[56px] max-h-[200px] overflow-auto"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              disabled={disabled}
            />
          </div>
          <Button 
            type="submit" 
            size="icon" 
            className="bg-black hover:bg-gray-800 rounded-lg h-[40px]"
            disabled={disabled || message.trim() === ''}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xs text-center text-gray-500 mt-2">
          AI may produce inaccurate information.
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
