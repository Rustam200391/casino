import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyH3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const AboutDicesGame = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={cn('mt-10', !show && 'max-h-[50px] overflow-hidden')}>
        <div className="flex flex-wrap items-baseline justify-between pb-2 border-b">
          <TypographyH2>Об игре Mines</TypographyH2>

          {!show ? (
            <Button variant="link" className="p-0" onClick={() => setShow(true)}>
              <ChevronDown className="mr-2" />
              Показать
            </Button>
          ) : (
            <Button variant="link" className="p-0" onClick={() => setShow(false)}>
              <ChevronUp className="mr-2" />
              Скрыть
            </Button>
          )}
        </div>

        <p className="mt-3 text-stone-300">
          Помните классическую игру на первых компьютерах с Windows? Наряду с Косынкой, там был и Сапёр. Игра-головоломка с простыми
          правилами увлекала миллионы пользователей раскрывать ячейки и устанавливать флажки на мины. Все мечтали открыть всё поле и не
          подорваться и многим это удавалось, пусть и не с одной попытки.
        </p>
        <TypographyH3 className="mt-6">Правила игры</TypographyH3>
        <p className="mt-3 text-stone-300">
          Выбираем сумму ставки и количество мин на свое усмотрение. После того, как мы нажали кнопку «Играть», выбираем любое поле.
        </p>
        <p className="mt-3 text-stone-300">
          В случае удачного исхода нам попадется клетка с рубином и мы сможем забрать выигрыш, в случае неудачи - мина, т.е. проигрыш. Чем
          больше откроем полей с рубинами - тем больше будет коэффициент от суммы ставки.
        </p>
        <TypographyH3 className="mt-6">Авто-игра в игре Mines</TypographyH3>
        <p className="mt-3 text-stone-300">
          В режиме авто-игры достаточно просто задать начальные условия игры и наблюдать за процессом или же просто дождаться результата
          всей серии. Ещё авто-игра отлично подойдет для разработки собственных стратегий игры.
        </p>

        <TypographyH3 className="mt-6">Как пополнить баланс</TypographyH3>
        <ol>
          <li className="mt-3 text-stone-300">
            После авторизации, в шапке сайта будет доступна кнопка
            <Button className="px-0 text-green-600" variant="link">
              «Пополнить»
            </Button>
          </li>
          <li className="mt-3 text-stone-300">
            Выберите удобный способ пополнения из представленных. Обратите внимание, комиссия у каждого способа пополнения отличается, ниже
            поля ввода будет информация о зачислении с учетом курса валюты к рубинам и комиссии
          </li>
          <li className="mt-3 text-stone-300">Далее мы предоставим вам реквизиты или адрес кошелька для пополнения баланса</li>
        </ol>
        <Button className="px-0 text-green-600" variant="link">
          Пополнить баланс
        </Button>
        <TypographyH3 className="mt-6">Как вывести выигранные рубины</TypographyH3>
        <ol>
          <li className="mt-3 text-stone-300">После авторизации, в шапке сайта будет доступен ваш кошелек со всеми доступными валютами</li>
          <li className="mt-3 text-stone-300">
            Откройте кошелек и выберите
            <Button className="px-0 text-green-600" variant="link">
              «Вывод средств»
            </Button>
          </li>
          <li className="mt-3 text-stone-300">
            Выберите удобный способ вывода средств из представленных. Обратите внимание, комиссия у каждого способа вывода отличается, ниже
            поля ввода будет информация о зачислении с учетом курса валюты к рубинам и комиссии
          </li>
          <li className="mt-3 text-stone-300">Укажите свои реквизиты по которым мы переведем вам выигрыш</li>
        </ol>
        <Button className="px-0 text-green-600" variant="link">
          Вывод средств
        </Button>
        <TypographyH3 className="mt-6">Как перевести донат другому игроку</TypographyH3>
        <ol>
          <li className="mt-3 text-stone-300">После авторизации и получения 2 ранга у вас откроется доступ к донату другим игрокам</li>
          <li className="mt-3 text-stone-300">Для доната игроку нажмите на его аватар в чате или на странице игры</li>
          <li className="mt-3 text-stone-300">В появившемся окне нажмите кнопку «Задонатить» и укажите сумму перевода</li>
        </ol>
        <Button className="px-0 text-green-600" variant="link">
          Вывод средств
        </Button>
      </div>
    </>
  );
};

export default AboutDicesGame;
