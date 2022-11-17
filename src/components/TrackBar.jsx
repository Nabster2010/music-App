import { useState } from "react";
import useAudioDuration from "../../hooks/useAudioDuration";
import { formatDuration } from "../../utils/formatDuration";
import { useAudio } from "../context/audioContext";

const TrackBar = () => {
  const { currentTrackIndx, allTracks, isPlaying, audioRef } = useAudio();
  const currentTrack = allTracks[currentTrackIndx];
  const [currentTime, setCurrentTime] = useState(0);
  const duration = useAudioDuration(currentTrack.src);

  const handleSeeking = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
    return;
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <input
          className="w-full h-1"
          type="range"
          id=""
          value={currentTime}
          onChange={handleSeeking}
          min={0}
          max={duration}
          style={{
            background: `linear-gradient(to right, #3264fe ${
              (currentTime / duration) * 100
            }%, #e5e5e5 ${currentTime / duration}%)`,
          }}
        />
      </div>
      {/* time */}
      <div className="flex justify-between items-center   text-xs text-secondary">
        <span>{formatDuration(currentTime)}</span>
        <span>{formatDuration(duration)}</span>
      </div>
      <audio
        ref={audioRef}
        autoPlay={isPlaying}
        src={currentTrack.src}
        onTimeUpdate={(e) => setCurrentTime(audioRef.current.currentTime)}
      />
    </div>
  );
};

export default TrackBar;
