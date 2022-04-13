import Body from "../../components/comments/commentsBox/Body";
import Info from "../../components/comments/commentsBox/Info";
import Reply from "../../components/comments/commentsBox/Reply";
import Vote from "../../components/comments/commentsBox/Vote";
import BackButton from "../../components/ui/BackButton";

function Comments() {
  return (
    <main className="bg-gradient-to-br from-blue-200/75 via-purple-400 to-blue-600 flex flex-col gap-4 overflow-scroll items-center justify-center h-screen">
      <BackButton />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </main>
  );
}

export default Comments;

function SingleComment() {
  return (
    <div className="w-5/6 md:max-w-xl mx-auto p-2 md:pt-4 flex flex-col gap-2 bg-white rounded-lg md:relative h-auto md:h-40 shadow-md">
      <div className="flex w-full justify-between order-last md:order-first">
        <Vote />
        <Reply />
      </div>
      <div className="flex flex-col gap-2 md:w-5/6 md:absolute md:left-12 md:h-full">
        <Info />
        <Body />
      </div>
    </div>
  );
}
