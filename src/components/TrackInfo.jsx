import { useAudio } from "../context/audioContext";

const TrackInfo = () => {
  const { currentTrackIndx, allTracks } = useAudio();
  const currentTrack = allTracks[currentTrackIndx];
  return (
    <div className="w-full text-center">
      <h1>{currentTrack.title}</h1>
      <p className="text-secondary text-sm">{currentTrack.artist}</p>
    </div>
  );
};

export default TrackInfo;
