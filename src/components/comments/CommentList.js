import Card from "../ui/Card";
import Info from "./commentsBox/Info";
import Reply from "./commentsBox/Reply";
import Vote from "./commentsBox/Vote";

function CommentList(props) {
  return (
    <>
      {props.comments.map((comment, index) => (
        <Card key={index}>
          <div className="flex w-full justify-between order-last md:order-first h-[25%] md:h-auto">
            <Vote />
            <Reply />
          </div>
          <div className="flex flex-col gap-2 md:w-5/6 md:absolute md:left-12 md:h-full h-[65%]">
            <Info />
            <div className="w-full h-[70%]">
                <p className="text-ellipsis overflow-hidden text-base text-slate-500">{comment.comment}</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default CommentList;
