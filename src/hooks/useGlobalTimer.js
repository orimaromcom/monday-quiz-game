let startTime,
  duration = 0;

export default function useGlobalTimer() {
  let timer;

  const start = () => {
    startTime = Date.now();
  };

  const stop = () => {
    duration = (Date.now() - startTime) / 1e3;
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
