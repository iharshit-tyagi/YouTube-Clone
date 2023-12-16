import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import hamburgerIcon from "../utils/images/Hamburger_icon.svg.png";
import userIcon from "../utils/images/user_icon.png";
import youTubeLogo from "../utils/images/youtube_logo.jpg";
import { Link, json } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchCacheSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //bcz if not present it will return undefined - falsy value
        setSuggestions(searchCache[searchQuery]);
      } else {
        if (searchQuery) getSearchSuggestions(searchCache[searchQuery]);
      }
    }, 200);
    //Below method is called when the component is being destroyed/umounted - Just before re-render
    return () => {
      clearTimeout(timer); ///for clearaing the timer if the next change happened within 200ms
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandle}
          className="h-8 cursor-pointer"
          alt="menu"
          src={hamburgerIcon}
        />
        <a className = "cursor-pointer" href="/">
        <img className="h-8 mx-4 cursor-pointer" alt="YouTube" src={youTubeLogo} />
        </a>
      </div>
      <div className=" col-span-10 ">
        <input
          className="w-3/6  border-gray-400 rounded-md border border-solid px-2 py-1 rounded-l-full focus:shadow-sm focus: shadow-blue-50"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
        />

        <button className=" border-gray-400 border border-solid py-1 rounded-r-full px-2 ">
          Search
        </button>
        {showSuggestions && searchQuery && (
          <div>
            <ul className="absolute bg-white py-2 w-2/6 rounded-sm border border-gray-100">
              {suggestions.map((ele) => {
                return <li className="py-1 px-5 hover:bg-gray-100 ">{ele}</li>;
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="userIcon" src={userIcon}></img>
      </div>
    </div>
  );
};
export default Header;
