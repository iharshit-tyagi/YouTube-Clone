const VideoPlayer = ({ info }) => {
  return (
    <div>
      <iframe
        className="rounded-xl w-full aspect-video"
        src={"https://www.youtube.com/embed/" + info}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoPlayer;
