import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import hamburgerIcon from "../utils/images/Hamburger_icon.svg.png";
import userIcon from "../utils/images/user_icon.png";
import youTubeLogo from "../utils/images/youtube_logo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    //Below method is called when the component is being destroyed/umounted - Just before re-render
    return () => {
      clearTimeout(timer); ///for clearaing the timer if the next change happened within 200ms
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandle}
          className="h-8 cursor-pointer"
          alt="menu"
          src={hamburgerIcon}
        />
        {/* <Link to={"/"}> */}
        <img className="h-8 mx-4" alt="YouTube" src={youTubeLogo} />
        {/* </Link> */}
      </div>
      <div className=" col-span-10 ">
        <input
          className="w-3/6  border-gray-400 rounded-md border border-solid px-2 py-1 rounded-l-full"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className=" border-gray-400 border border-solid py-1 rounded-r-full px-2 ">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="userIcon" src={userIcon}></img>
      </div>
    </div>
  );
};
export default Header;
