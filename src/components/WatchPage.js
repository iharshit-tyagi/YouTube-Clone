import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_INFO_URL } from "../utils/constants";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, []);

  const [params] = useSearchParams();
  const getVideoInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_INFO_URL + params.get("v"));
    const json = await data.json();
    console.log(json.items[0]);
    setVideoInfo(json.items[0]);
  };
  if (Object.keys(videoInfo).length === 0) return <h1>Hi</h1>;

  const { snippet, contentDetails, statistics } = videoInfo;
  return (
    <div className="flex gap-5">
      <div className="">
        <VideoPlayer info={params.get("v")} />
        <h2 className="text-xl font-bold ">{snippet.title}</h2>
        <div>
          <h2>{snippet.channelTitle}</h2>
          <h2>{statistics.likeCount} Likes</h2>
        </div>
      </div>
    </div>
  );
};
export default WatchPage;
