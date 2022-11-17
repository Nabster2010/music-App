import { useEffect, useState } from "react";
import { useAudio } from "../context/audioContext";
import {
  BiSkipPrevious,
  BiPause,
  BiPlay,
  BiSkipNext,
  BiVolumeFull,
  BiVolumeMute,
} from "react-icons/bi";
import {
  MdOutlineRepeat,
  MdOutlineRepeatOne,
  MdOutlineShuffle,
} from "react-icons/md";
import { useEventListener } from "../../hooks/useEventListener";

const Controls = () => {
  const {
    nextTrack,
    prevTrack,
    isPlaying,
    playTrack,
    pauseTrack,
    currentTrackIndx,
    audioRef,
    allTracks,
  } = useAudio();
  const [volumeShowen, setVolumeShowen] = useState(false);
  const [volume, setVolume] = useState(Number(50));
  const [playMode, setPlayMode] = useState("repeat_one");

  const handleVolumeChange = (e) => {
    let vol = Number(e.target.value);
    setVolume(vol);
    audioRef.current.volume = vol / 100;
    if (e.target.value === 0) {
      audioRef.current.muted = true;
    }
  };
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, []);

  const handler = () => setVolume(audioRef.current.volume * 100);
  useEventListener("volumechange", handler, audioRef);

  const shufflePlay = () => {
    let indx = Math.floor(Math.random(allTracks.length - 1) * 10);
    if (indx === currentTrackIndx) {
      return shufflePlay();
    }
    playTrack(Number(indx));
  };

  const handlePlayMode = () => {
    if (playMode === "repeat_one") {
      playTrack(currentTrackIndx);
    } else if (playMode === "repeat") {
      nextTrack();
    } else if (playMode === "shuffle") {
      shufflePlay();
    }
  };

  useEventListener("ended", handlePlayMode, audioRef.current);

  const toggleShuffle = () => {
    if (playMode === "shuffle") {
      setPlayMode("repeat");
    } else if (playMode === "repeat") {
      setPlayMode("repeat_one");
    } else {
      setPlayMode("shuffle");
    }
  };

  return (
    <div className="w-full text-xl mt-2 mb-6 flex justify-between items-center">
      <button onClick={toggleShuffle}>
        {playMode === "repeat" && <MdOutlineRepeat size={"1em"} />}
        {playMode === "shuffle" && <MdOutlineShuffle size={"1em"} />}
        {playMode === "repeat_one" && <MdOutlineRepeatOne size={"1em"} />}
      </button>
      <div onClick={prevTrack}>
        <BiSkipPrevious size={"1.5em"} />
      </div>
      {isPlaying ? (
        <button className="" onClick={pauseTrack}>
          <BiPause size={"1.5em"} />
        </button>
      ) : (
        <button className="" onClick={() => playTrack(currentTrackIndx)}>
          <BiPlay size={"1.5em"} />
        </button>
      )}
      <button onClick={nextTrack} className="cursor-pointer">
        <BiSkipNext size={"1.5em"} />
      </button>
      <button
        className="cursor-pointer"
        onClick={() => setVolumeShowen((prev) => !prev)}
      >
        {volume === 0 ? (
          <BiVolumeMute size={"1em"} />
        ) : (
          <BiVolumeFull size={"1em"} />
        )}
      </button>
      <div
        className={`flex gap-2 items-center  ${
          volumeShowen ? "translate-y-0" : "translate-y-24"
        } absolute w-full px-6 py-3 flex transition duration-500 bottom-0 justify-center items-center bg-gray-800  inset-x-0 rounded-xl border border-gray-600`}
      >
        {volume === 0 ? (
          <BiVolumeMute size={"1em"} />
        ) : (
          <BiVolumeFull size={"1em"} />
        )}
        <input
          type="range"
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          max={100}
          className="w-full h-1 flex-1"
          style={{
            background: `linear-gradient(to right, #3264fe ${volume}%, #e5e5e5 ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
