const GOOGLE_API_KEY = "AIzaSyA9Xio5xQ1Zg9Eo-_NurOtL7b-10-PgZyE";

export const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";
export const SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
