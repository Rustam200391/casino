import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Message, useChatHistory, useChatSendMessage } from '@/hooks/api/chat';
import useCentrifuge from '@/lib/ws';
import { sortBy } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Dot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { format, fromUnixTime } from 'date-fns';

const Chat = () => {
  const centrifuge = useCentrifuge();
  const historyQuery = useChatHistory();
  const chatMutation = useChatSendMessage();

  const [text, setText] = useState('');
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sub = centrifuge.subscribe('chat', (message) => {
      if (message.data != null) {
        const data = message.data.params;
        historyQuery.refetch();
        console.log(data);
      }
    });

    messagesRef.current?.scrollIntoView();

    return () => {
      sub.unsubscribe();
    };
  }, [centrifuge, historyQuery]);

  return (
    <div className="col-span-2 p-4 border h-fit w-[400px] border-neutral-800 rounded-3xl lg:flex lg:flex-col">
      <div className="flex flex-col text-center rounded-3xl">
        <p>В банке</p>
        <p className="text-2xl font-bold text-green-500">100 800 000 ₽</p>
        <p className="text-xs">Розыгрыш через: 20 ч : 02 мин</p>
        <div className="flex justify-between items-center p-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="border-white hover:bg-white hover:text-black p-1 border rounded-3xl w-[90px]">
                Чат
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Русский</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            className="border-neutral-800 hover:bg-neutral-800 text-neutral-400"
          >
            Чат поддержки
          </Button>

          <div className="flex text-sm items-center">
            <Dot size={32} className="text-red-500" />
            104 200
          </div>
        </div>
        <ScrollArea className="h-[400px]" type="always">
          <div className="flex flex-col pr-4">
            {sortBy(historyQuery.data?.result.messages, 'time')?.map(
              (message) => <ChatMessage key={message.id} {...message} />,
            )}
            <div ref={messagesRef} />
          </div>
        </ScrollArea>
        <hr className="border-neutral-800 mt-2 mb-2" />
        <form
          className="flex border border-neutral-800 p-2 rounded-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            chatMutation.mutate(text);
            messagesRef.current?.scrollIntoView({ behavior: 'smooth' });
            setText('');
          }}
        >
          <Input
            placeholder="Сообщение"
            className="border-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">
            <ArrowRight />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

const ChatMessage = ({ user_nickname, text, user_avatar, time }: Message) => (
  <div className="flex h-[72px] p-3 hover:bg-neutral-800 gap-2 rounded-3xl">
    <Avatar>
      <AvatarImage src={user_avatar} />
      <AvatarFallback>
        {user_nickname.substring(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>

    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <div className="text-sm font-semibold">{user_nickname}</div>
        <div className="text-xs text-neutral-500">
          {format(fromUnixTime(time), 'HH:mm')}
        </div>
      </div>
      <div className="text-left text-sm">{text}</div>
    </div>
  </div>
);
