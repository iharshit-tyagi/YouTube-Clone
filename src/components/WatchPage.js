import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  const [params] = useSearchParams();
  console.log(params.get("v"));

  const { videoID } = params;
  console.log(videoID);
  return (
    <div>
      <iframe
        className="ml-10 rounded-lg"
        width="790"
        height="400"
        src={"https://www.youtube.com/embed/" + params.get("v")}
        // title="Everything about CSS GRID in ONE Video || Episode - 28"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchPage;
