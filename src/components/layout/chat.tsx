import React from 'react';

const Chat = () => {
  return (
    <div className="h-fit col-span-2 border border-neutral-800 rounded-3xl p-4 lg:flex lg:flex-col">
      <div className="flex flex-col rounded-3xl text-center">
        <p>В банке</p>
        <p className="text-2xl font-bold">100 800 000 ₽</p>
        <p className="text-xs">Розыгрыш через: 20 ч : 02 мин</p>
        <div>ChatSettings</div>
        <div>ChatHistory</div>
        <hr className="border-neutral-800" />
        ChatInput
      </div>
    </div>
  );
};

export default Chat;
