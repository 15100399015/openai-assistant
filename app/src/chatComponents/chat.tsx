"use client";

import { useChat, type Message } from "ai/react";

import { cn } from "@/lib/utils";
import { ChatList } from "@/chatComponents/chat-list";
import { ChatPanel } from "@/chatComponents/chat-panel";
import { EmptyScreen } from "@/chatComponents/empty-screen";
import { ChatScrollAnchor } from "@/chatComponents/chat-scroll-anchor";
import { toast } from "react-hot-toast";
import { EventSocketPanel } from "@/chatComponents/event-socket-panel";

export interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id?: string;
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      api: "/api/char",
      initialMessages,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      id,
      body: {
        id,
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText);
        }
      },
    });
  return (
    <>
      <div className={cn("pb-[200px] pt-4 md:pt-10", className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen />
        )}
      </div>
      <EventSocketPanel />
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </>
  );
}