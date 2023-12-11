import CommentsList from "./CommentsList";
const CommentsContainer = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl">Comments</h2>
      <div>
        <CommentsList />
      </div>
    </div>
  );
};
export default CommentsContainer;
