import Body from "../../components/comments/commentsBox/Body";
import Info from "../../components/comments/commentsBox/Info";
import Reply from "../../components/comments/commentsBox/Reply";
import Vote from "../../components/comments/commentsBox/Vote";
import BackButton from "../../components/ui/BackButton";

function Comments() {
  return (
    <main className="bg-gradient-to-br from-blue-200/75 via-purple-400 to-blue-600 flex items-center justify-center h-screen">
      <BackButton />
      <div className="w-5/6 md:max-w-xl mx-auto p-2 flex flex-col md:flex-row gap-2 bg-white rounded-lg">
        <Info />
        <Body />
        <div className="flex w-full justify-between">
          <Vote />
          <Reply />
        </div>
      </div>
    </main>
  );
}

export default Comments;
