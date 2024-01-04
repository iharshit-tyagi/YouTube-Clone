import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { addVideoList } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  const videoList = useSelector((store) => store.video.videoList);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    dispatch(addVideoList(json.items));
  };
  return (
    // <div className="flex flex-wrap">
    <div className="grid grid-cols-4 gap-5">
      {videoList.map((vid) => {
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
