import Button from "./Button";
const ButtonList = () => {
  const btnList = [
    "All",
    "Mixes",
    "Music",
    "Cooking",
    "Gadgets",
    "Javascript",
    "Indian Pop Music",
    "Live",
    "New To You",
  ];
  return (
    <div className="flex">
      {btnList.map((ele, index) => {
        return <Button key={index} name={ele} />;
      })}
    </div>
  );
};
export default ButtonList;
