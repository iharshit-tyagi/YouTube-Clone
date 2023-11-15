import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    // <div className="flex flex-wrap">
    <div className="grid grid-cols-4 gap-5">
      {videos.map((vid) => {
        return (
          <Link key={vid?.id} to={"/watch?v=" + vid?.id}>
            <VideoCard vid={vid} />
          </Link>
        );
      })}
    </div>
  );
};
export default VideoContainer;
