const VideoPlayer = ({ info }) => {
  return (
    <div>
      <iframe
        className="rounded-lg"
        width="790"
        height="400"
        src={"https://www.youtube.com/embed/" + info}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoPlayer;
