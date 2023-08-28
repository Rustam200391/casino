import { useLoadDataQuery } from '@/hooks/api/load-data';

const useNextLevelExp = () => {
  const loadDataQuery = useLoadDataQuery();

  const levelsExp = loadDataQuery.data?.levels_experience || {};
  const level = loadDataQuery.data?.data?.level || 0;

  const maxLevel = levelsExp
    ? Math.max.apply(null, Object.keys(levelsExp).map(Number))
    : 100;

  const nextLevel = maxLevel === level + 1 ? maxLevel : level + 1;

  return Number(levelsExp[String(nextLevel)]);
};

export default useNextLevelExp;
