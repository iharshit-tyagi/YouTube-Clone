const VideoCard = ({ vid }) => {
  const { snippet, statistics } = vid;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  const { url } = thumbnails.medium;

  return (
    <div className=" p-2 shadow-sm">
      <img className="rounded-lg" alt="thumbnail" src={url} />
      <ul>
        <li className="font-semibold">{title}</li>
        <li>
          {channelTitle}-{viewCount} Views
        </li>
      </ul>
    </div>
  );
};
export default VideoCard;
