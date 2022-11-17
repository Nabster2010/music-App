import { useEffect, useState } from "react";

const useAudioDuration = (src) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.onloadeddata = () => {
      setDuration(audio.duration);
    };
  }, [src]);
  return duration;
};

export default useAudioDuration;
