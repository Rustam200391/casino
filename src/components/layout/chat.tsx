import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChatChannel,
  Message,
  useChatHistoryQuery,
  useChatSendMessageMutation,
} from '@/hooks/api/chat';
import useCentrifuge from '@/lib/ws';
import { sortBy } from 'lodash';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronDownIcon, Dot, GiftIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { format, fromUnixTime } from 'date-fns';
import { useLoadDataQuery } from '@/hooks/api/load-data';
import { atom, useAtom } from 'jotai';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Badge } from '@/components/ui/badge';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';

const chatChannelAtom = atom<ChatChannel>('ru');
export const useChatChannel = () => useAtom(chatChannelAtom);

const Chat = () => {
  const centrifuge = useCentrifuge();
  const historyQuery = useChatHistoryQuery();
  const chatMutation = useChatSendMessageMutation();
  const { data: loadDataResponse } = useLoadDataQuery();
  const [channel, setChannel] = useChatChannel();

  const [text, setText] = useState('');
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sub = centrifuge.subscribe('chat', (message) => {
      if (message.data != null) {
        const data = message.data.params;
        historyQuery.refetch();
        console.log('chat', data);
      }
    });

    return () => {
      sub.unsubscribe();
    };
  }, [centrifuge, historyQuery]);

  const messages = useMemo(() => {
    const _messages = historyQuery.data?.result.messages || [];

    return sortBy(_messages, 'time');
  }, [historyQuery.data?.result.messages]);

  return (
    <div className="col-span-2 p-4 border h-fit w-[400px] border-neutral-800 rounded-3xl lg:flex lg:flex-col">
      <div className="flex flex-col text-center rounded-3xl">
        <div className="flex flex-col rounded-3xl bg-neutral-900/50 p-4">
          <p className="italic font-bold">В банке</p>
          <p className="text-3xl font-bold italic">100 800 000 ₽</p>
          <p className="text-xs">Розыгрыш через: 20 ч : 02 мин</p>
        </div>

        <div className="flex justify-between items-center p-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex border-white hover:bg-white hover:text-black py-1 px-3 border rounded-3xl">
                <div>{channel === 'ru' ? 'Русский' : 'English'}</div>
                <ChevronDownIcon className="ml-2 transition" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setChannel('ru')}>
                Русский
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setChannel('en')}>
                English
              </DropdownMenuItem>
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
            {loadDataResponse?.result.online || 0}
          </div>
        </div>
        <ScrollArea ref={messagesRef} className="h-[400px]" type="always">
          <div className="flex flex-col pr-4">
            {messages.length > 0 ? (
              messages.map((message) => (
                <ChatMessage key={message.id} {...message} />
              ))
            ) : (
              <div>Нет сообщений</div>
            )}
          </div>
        </ScrollArea>
        <hr className="border-neutral-800 mt-2 mb-2" />
        <form
          className="flex border border-neutral-800 p-2 rounded-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            chatMutation.mutate(text);
            setText('');
          }}
        >
          <Input
            placeholder="Сообщение"
            className="border-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit" disabled={!text}>
            <ArrowRight />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

const ChatMessage = ({ user_nickname, text, user_avatar, time }: Message) => (
  <Tooltip>
    <TooltipTrigger>
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
    </TooltipTrigger>
    <TooltipContent
      side="left"
      className="flex flex-col justify-between gap-2 border border-neutral-800 rounded-3xl bg-neutral-950"
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src={user_avatar} />
            <AvatarFallback>
              {user_nickname.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex">
              <Badge className="bg-yellow-950 text-yellow-500 rounded-md p-0.5">
                130
              </Badge>
              <div className="ml-0.5">Уровень</div>
            </div>
            <div className="font-bold text-md">{user_nickname}</div>
          </div>
        </div>

        <CloseIcon />
      </div>
      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
        <GiftIcon />
        Перевести донат
      </Button>
      <Button variant="outline">Перейти в профиль</Button>
    </TooltipContent>
  </Tooltip>
);
