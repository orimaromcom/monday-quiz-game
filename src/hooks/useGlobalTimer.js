let duration;

export default function useGlobalTimer() {
  let timer;

  const start = () => {
    duration = 0;
    timer = setInterval(() => {
      duration++;
    }, 1e3);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const getDuration = () => {
    return duration;
  };

  return {
    getDuration,
    start,
    stop,
  };
}
