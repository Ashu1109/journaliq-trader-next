"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, MessageSquare, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatListItem {
  id: string;
  title: string;
  date: Date;
}

interface ChatSidebarProps {
  chats: ChatListItem[];
  activeChatId: string | null;
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chats,
  activeChatId,
  onChatSelect,
  onNewChat,
}) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar - on mobile: right side, on laptop: left side */}
      <div className={cn(
        "bg-blue-50 w-80 fixed inset-y-0 top-20 z-40 transition-transform duration-300 transform lg:translate-x-0",
        "lg:left-0 lg:border-r", // On laptop: left side with right border
        "right-0 border-l", // On mobile: right side with left border
        isMobileSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full px-3 py-4">
          {/* New chat button */}
          <Button
            variant="outline"
            className="flex items-center justify-start mb-4 p-3 w-full"
            onClick={() => {
              onNewChat();
              setIsMobileSidebarOpen(false);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            New chat
          </Button>

          {/* Chat history */}
          <div className="flex-1 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-500 mb-2 px-1">Recent chats</h3>
            <div className="space-y-1">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  className={cn(
                    "flex items-center gap-2 w-full p-3 text-sm text-left rounded-md hover:bg-gray-100",
                    activeChatId === chat.id && "bg-gray-200 hover:bg-gray-200"
                  )}
                  onClick={() => {
                    onChatSelect(chat.id);
                    setIsMobileSidebarOpen(false);
                  }}
                >
                  <MessageSquare className="h-4 w-4 flex-shrink-0" />
                  <div className="truncate flex-1">{chat.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
