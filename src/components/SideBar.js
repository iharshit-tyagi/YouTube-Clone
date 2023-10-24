import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-44 ml-2 shadow-lg">
      <ul className="text-lg  border-b border-gray-300 ">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="text-lg  border-b border-gray-300 mt-2">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <div>
        <h2 className="text-lg  mt-3">Subscriptions</h2>
        <ul>
          <li>Games</li>
          <li>Movies</li>
          <li>Music</li>
          <li>Horror</li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
