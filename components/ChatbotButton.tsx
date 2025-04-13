import React from 'react'
import { Button } from './ui/button'
import { CiChat1 } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';

const ChatbotButton = () => {
  return (
    <Link href="/chatbot">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="fixed md:bottom-4 bottom-24 w-14 h-14 right-4 z-50 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80 transition duration-300 ease-in-out">
              <CiChat1 className="h-20 w-20" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            Chat with Your Journal
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}

export default ChatbotButton
