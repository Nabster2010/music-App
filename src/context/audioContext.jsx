import * as React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEventListener } from "../../hooks/useEventListener";
import Data from "../../data";
import { visualizer } from "../../utils/visualizer";

const initialState = {
  allTracks: Data,
  currentTrackIndx: 0,
  isPlaying: false,
};

const audioContext = React.createContext();

export function AudioProvider({ children }) {
  const [value, setValue] = useState(initialState);
  const audioRef = useRef();
  const canvasRef = useRef();
  const playTrack = (idx) => {
    visualizer(audioRef.current, canvasRef.current, value.isPlaying);
    setValue((prev) => ({ ...prev, currentTrackIndx: idx, isPlaying: true }));
    audioRef.current.play();
  };
  const pauseTrack = () => {
    setValue({ ...value, isPlaying: false });
    audioRef.current.pause();
  };
  const nextTrack = () => {
    let nextIndx = value.currentTrackIndx;
    if (value.currentTrackIndx + 1 === value.allTracks.length) {
      nextIndx = 0;
    } else {
      nextIndx++;
    }
    setValue({ ...value, currentTrackIndx: nextIndx, isPlaying: true });
  };
  const prevTrack = () => {
    let prevIndx = value.currentTrackIndx;
    if (value.currentTrackIndx === 0) {
      prevIndx = value.allTracks.length - 1;
    } else {
      prevIndx--;
    }
    setValue({ ...value, currentTrackIndx: prevIndx, isPlaying: true });
  };

  const repeat = () => {
    useEventListener("ended", () => playTrack(currentTrackIndx), audioRef);
  };

  return (
    <audioContext.Provider
      value={{
        ...value,
        playTrack,
        nextTrack,
        prevTrack,
        pauseTrack,
        audioRef,
        canvasRef,
      }}
    >
      {children}
    </audioContext.Provider>
  );
}

export function useAudio() {
  const context = React.useContext(audioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within  AudioProvider");
  }
  return context;
}
