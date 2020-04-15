import { useState } from 'react';

// holds in state an array with a configurable number of counter
// also provides functions to increase/decrease the counters in the array
export function useArrayCounter(
  length: number,
  initValue = 1,
): [number[], (index: number, delta?: number) => void, (index: number, delta?: number) => void] {
  const [counts, setCounts] = useState(new Array(length).fill(initValue));

  const increase = (index: number, delta = 1): void => {
    setCounts(counts.map((count, countIndex) => (index === countIndex ? count + delta : count)));
  };
  const decrease = (index: number, delta = 1): void => {
    setCounts(counts.map((count, countIndex) => (index === countIndex ? count - delta : count)));
  };
  return [counts, increase, decrease];
}
