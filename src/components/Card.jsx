import { useState } from "react";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import Controls from "./Controls";
import TrackBar from "./TrackBar";
import TrackInfo from "./TrackInfo";
import TrackList from "./TrackList";

const Card = () => {
  const [listShown, setListShown] = useState(false);
  return (
    <div className="relative overflow-hidden p-6 flex flex-col items-center  shadow-card w-full h-full backdrop-blur-sm  border-white/10 rounded-xl border ">
      <CardHeader setListShown={setListShown} />
      <CardImg />
      <TrackInfo />
      <TrackBar />
      <Controls />
      <TrackList listShown={listShown} setListShown={setListShown} />
    </div>
  );
};

export default Card;
