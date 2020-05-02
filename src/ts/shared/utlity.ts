export function debounceFunction<F extends (...args: any) => void>(
  func: F,
  delay: number,
): (...args: Parameters<F>) => void {
  let id: number = null;
  const callable = (...args: Parameters<F>): void => {
    clearTimeout(id);
    id = setTimeout(func.bind(this, args), delay);
  };
  return callable;
}

export function throttleFunction<F extends (...args: any) => void>(
  func: F,
  window: number,
): (...args: Parameters<F>) => void {
  let clear = true;
  const callable = (...args: Parameters<F>): void => {
    if (clear) {
      clear = false;
      func.apply(this, args);
      setTimeout(() => {
        clear = true;
      }, window);
    }
  };
  return callable;
}
