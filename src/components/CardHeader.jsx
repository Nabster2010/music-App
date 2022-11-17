import { BsChevronDown } from "react-icons/bs";
import { MdOutlineQueueMusic } from "react-icons/md";
import { useAudio } from "../context/audioContext";
const CardHeader = ({ setListShown }) => {
  const { allTracks, currentTrackIndx } = useAudio();
  const currentTrack = allTracks[currentTrackIndx];
  return (
    <div className=" text-white w-full flex justify-between items-center">
      <BsChevronDown size={"1.5em"} />
      <div>
        Now Playing {currentTrack.id}/{allTracks.length}
      </div>
      <button onClick={() => setListShown((prev) => !prev)}>
        <MdOutlineQueueMusic size={"1.5em"} />
      </button>
    </div>
  );
};

export default CardHeader;
