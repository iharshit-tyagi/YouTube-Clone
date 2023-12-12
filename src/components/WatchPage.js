import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import {
  YOUTUBE_VIDEO_INFO_URL,
  VIDEO_COMMENTS_INFO_API,
} from "../utils/constants";
import VideoPlayer from "./VideoPlayer";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
    getCommentsInfo();
  }, []);

  const [params] = useSearchParams();
  const getVideoInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_INFO_URL + params.get("v"));
    const json = await data.json();
    setVideoInfo(json.items[0]);
  };
  const getCommentsInfo = async () => {
    console.log(VIDEO_COMMENTS_INFO_API + params.get("v"));
    const data = await fetch(VIDEO_COMMENTS_INFO_API + params.get("v"));
    const json = await data.json();
    console.log(json);
  };
  if (Object.keys(videoInfo).length === 0) return <h1>Hi</h1>;
  console.log(videoInfo);
  const { snippet, contentDetails, statistics } = videoInfo;
  console.log(videoInfo);

  return (
    <div className="mt-4  mx-14 flex gap-7 w-full ">
      <div className=" w-3/5 border flex-shrink-0">
        <VideoPlayer info={params.get("v")} />
        <h2 className="text-xl font-bold mt-4">{snippet.title}</h2>
        <div>
          <h2>{snippet.channelTitle}</h2>
          <h2>{statistics.likeCount} Likes</h2>
        </div>
        <CommentsContainer />
      </div>
      <div className="border border-black flex-grow p-4 h-[500]  rounded-lg mr-4 ">
        <LiveChatContainer />
        <div className="">
          <input className="" type="text border" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default WatchPage;
