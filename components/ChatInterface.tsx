"use client"
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatMessage, { Message } from './ChatMessage';
import ChatInput from './ChatInput';
import ChatSidebar from './ChatSidebar';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface Chat {
  id: string;
  title: string;
  date: Date;
  messages: Message[];
}

const initialMessages: Message[] = [
  {
    id: uuidv4(),
    content: "Hello! I'm an AI assistant. How can I help you today?",
    role: 'assistant',
    timestamp: new Date()
  }
];

const ChatInterface: React.FC = () => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 'default',
      title: 'New conversation',
      date: new Date(),
      messages: initialMessages,
    }
  ]);
  console.log(chats)
  const [activeChatId, setActiveChatId] = useState<string>('default');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get current chat
  const activeChat = chats.find(chat => chat.id === activeChatId) || chats[0];

  // Create a new chat
  const handleNewChat = () => {
    const newChatId = uuidv4();
    setChats([
      ...chats,
      {
        id: newChatId,
        title: 'New conversation',
        date: new Date(),
        messages: initialMessages,
      }
    ]);
    setActiveChatId(newChatId);
  };

  // Handle sending a message
  const handleSendMessage = async (content: string) => {
    if (!userId) {
      toast({
        title: "Error",
        description: "You must be logged in to send messages.",
        variant: "destructive",
      });
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    
    // Update the chat with the user message
    const updatedChats = chats.map(chat => {
      if (chat.id === activeChatId) {
        const updatedChat = {
          ...chat,
          messages: [...chat.messages, userMessage],
          // Update the title if this is the first user message
          title: chat.title === 'New conversation' && chat.messages.length === 1 
            ? content.slice(0, 30) + (content.length > 30 ? '...' : '') 
            : chat.title
        };
        return updatedChat;
      }
      return chat;
    });
    
    setChats(updatedChats);
    
    // Simulate AI response
    setLoading(true);
    
    try {
      const aiResponse: Message = {
        id: uuidv4(),
        content: await getAIResponse(activeChat, userId),
        role: 'assistant',
        timestamp: new Date(),
      };
      
      // Update the chat with the AI response
      setChats(updatedChats.map(chat => {
        if (chat.id === activeChatId) {
          return {
            ...chat,
            messages: [...chat.messages, aiResponse],
          };
        }
        return chat;
      }));
    } catch (error) {
        console.log(error)
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat.messages]);

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar 
        chats={chats}
        activeChatId={activeChatId}
        onChatSelect={setActiveChatId}
        onNewChat={handleNewChat}
      />
      
      <div className="flex-1 flex flex-col lg:ml-80">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {activeChat.messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {loading && (
            <div className="py-5 px-6 md:px-8">
              <div className="max-w-3xl mx-auto flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center">
                    <div className="h-3 w-3 bg-gray-100 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  AI is thinking...
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <ChatInput 
          onSendMessage={handleSendMessage} 
          disabled={loading}
        />
      </div>
    </div>
  );
};

// AI response function that calls the API
async function getAIResponse(chat: Chat, userId: string): Promise<string> {
  try {
    const response = await axios.post("https://chatbotservertrading.onrender.com/chat", {
      user_id: userId,
      chat_history: chat || {}
    });
    console.log(response.data)
    return response.data.response || "I'm sorry, I couldn't process your request.";
  } catch (error) {
    console.error('Error getting AI response:', error);
    return "I'm sorry, I encountered an error while processing your request.";
  }
}

export default ChatInterface;
