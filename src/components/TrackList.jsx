import { BiX } from "react-icons/bi";
import { MdOutlineQueueMusic } from "react-icons/md";
import TrackListRow from "./TrackListRow";
import { useAudio } from "../context/audioContext";

const TrackList = ({ listShown, setListShown }) => {
  const { allTracks } = useAudio();
  return (
    <div
      className={` ${
        listShown ? "translate-y-0" : "translate-y-full"
      }  max-h-64 transition duration-500 bg-white rounded-xl overflow-y-scroll   absolute bottom-0 inset-x-0`}
    >
      {/* header */}
      <div className="sticky bg-white top-0 left-0 px-6 py-4 flex justify-between items-center text-black">
        <div className="flex gap-2 justify-start items-center">
          <MdOutlineQueueMusic size={"1.5em"} />
          <span>Music List</span>
        </div>
        <button onClick={() => setListShown(false)}>
          <BiX size={"1.5em"} />
        </button>
      </div>
      {/* tracks list */}
      <div className="">
        {allTracks.map((track, idx) => (
          <TrackListRow track={track} key={idx} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
