import { atom, useAtom } from 'jotai/index';

const minesGameBetAtom = atom<number | null>(null);
export const useMinesGameBetAtom = () => useAtom(minesGameBetAtom);

const minesGameMinesAtom = atom<number>(2);
export const useMinesGameMinesAtom = () => useAtom(minesGameMinesAtom);

const minesGameCellAtom = atom<number>(0);
export const useMinesGameCellAtom = () => useAtom(minesGameCellAtom);
