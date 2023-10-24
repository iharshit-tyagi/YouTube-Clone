const VideoCard = ({ vid }) => {
  const { snippet, statistics } = vid;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  const { url } = thumbnails.medium;

  return (
    <div className=" p-2 shadow-sm">
      <img className="rounded-lg" alt="thumbnail" src={url} />
      <p className="font-semibold">{title}</p>
      <p>
        {channelTitle}-{viewCount} Views
      </p>
    </div>
  );
};
export default VideoCard;
