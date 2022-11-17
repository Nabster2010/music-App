import { useAudio } from "../context/audioContext";

const CardImg = () => {
  const { currentTrackIndx, allTracks, canvasRef, isPlaying } = useAudio();
  const currentTrack = allTracks[currentTrackIndx];

  return (
    <div className=" w-full h-64 relative  flex justify-center items-center  ">
      <img
        className={`rounded-full w-52 h-52 ${
          isPlaying && "animate-rotate"
        }  object-cover object-center`}
        src={currentTrack.thumbnail}
        alt={currentTrack.title}
      />
      <canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        ref={canvasRef}
      />
    </div>
  );
};

export default CardImg;
