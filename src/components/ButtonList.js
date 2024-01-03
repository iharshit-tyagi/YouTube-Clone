import Button from "./Button";
import { useState, useEffect } from "react";
import { VIDEO_CATEGORIES_API, GOOGLE_API_KEY } from "../utils/constants";
const ButtonList = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      console.log(VIDEO_CATEGORIES_API + GOOGLE_API_KEY);
      const data = await fetch(VIDEO_CATEGORIES_API + GOOGLE_API_KEY);
      const json = await data.json();
      setCategoryList(json.items);
    };
    console.log(categoryList);
    getData();
  }, []);
  if (categoryList.length === 0) return null;
  return (
    <div className="flex">
      {categoryList.map((category, index) => {
        return (
          index <= 7 && (
            <Button
              key={category.id}
              categoryId={category.id}
              name={category?.snippet?.title}
            />
          )
        );
      })}
    </div>
  );
};
export default ButtonList;
