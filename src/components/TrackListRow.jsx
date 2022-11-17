import useAudioDuration from "../../hooks/useAudioDuration";
import { formatDuration } from "../../utils/formatDuration";
import { useAudio } from "../context/audioContext";

const TrackListRow = ({ track, index }) => {
  const duration = useAudioDuration(track.src);
  const { playTrack, currentTrackIndx } = useAudio();

  const selected = currentTrackIndx === index;

  return (
    <div
      onClick={() => playTrack(index)}
      className={` ${
        selected && "bg-slate-300"
      } border-b last:border-none cursor-pointer px-6 py-2 hover:bg-slate-200 flex justify-between items-start text-black text-sm`}
    >
      <div>
        <h3>{track.title}</h3>
        <p className="text-gray-400 text-sm ">{track.artist}</p>
      </div>
      <span>{formatDuration(duration)}</span>
    </div>
  );
};

export default TrackListRow;
