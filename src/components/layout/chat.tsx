import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChatHistory, useChatSendMessage } from '@/hooks/api/chat';
import useCentrifuge from '@/lib/ws';
import { useQuery } from '@tanstack/react-query';
import { sortBy } from 'lodash';
import React, { useEffect, useState } from 'react';

const Chat = () => {
  const centrifuge = useCentrifuge();
  const historyQuery = useChatHistory();
  const chatMutation = useChatSendMessage();

  const [text, setText] = useState('');

  useEffect(() => {
    const sub = centrifuge.subscribe('chat', function (message) {
      if (message.data != null) {
        const data = message.data.params;
        historyQuery.refetch();
        console.log(data);
      }
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div className="col-span-2 p-4 border h-fit border-neutral-800 rounded-3xl lg:flex lg:flex-col">
      <div className="flex flex-col text-center rounded-3xl">
        <p>В банке</p>
        <p className="text-2xl font-bold text-green-500">100 800 000 ₽</p>
        <p className="text-xs">Розыгрыш через: 20 ч : 02 мин</p>
        <div className="mt-2 space-y-2 font-mono text-xs text-left">
          {sortBy(historyQuery.data?.result.messages, 'time')?.map(
            (message) => (
              <div
                className="px-4 py-2 rounded-full bg-slate-800"
                key={message.id}
              >
                {message.text}
              </div>
            ),
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            chatMutation.mutate(text);
            setText('');
          }}
        >
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите сообщение"
            className="w-full mt-4 text-xs"
          />
          <Button
            variant="accent"
            glow="accent"
            className="w-full mt-4"
            size="sm"
            type="submit"
          >
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
