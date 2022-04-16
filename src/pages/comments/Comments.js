import Body from "../../components/comments/commentsBox/Body";
import Info from "../../components/comments/commentsBox/Info";
import Reply from "../../components/comments/commentsBox/Reply";
import Vote from "../../components/comments/commentsBox/Vote";
import BackButton from "../../components/ui/BackButton";
import Card from "../../components/ui/Card";
import AddComment from "../../components/comments/AddComment";
import { useState } from "react";
import CommentList from "../../components/comments/CommentList";

// TODO: adjust responsiveness for long text, check tailwindcss text-ellipsis property
// TODO: apply addComment functionality to reply button
// TODO: add localStorage to store variables => comments, reply, votes
// TODO: sync date to the each comment, i.e comment <==> Info

function Comments() {
  const [commentList, setCommentList] = useState([]);
  console.log(commentList);

  function getComment(comment) {
    setCommentList((prevCommentList) => {
      return [...prevCommentList, { comment: comment }];
    });
  }

  return (
    <main className="bg-gradient-to-br from-blue-200/75 via-purple-400 to-blue-600 flex items-center justify-center overflow-hidden h-screen">
      <BackButton />
      <div className="flex flex-col gap-4 h-5/6 w-5/6 overflow-auto overscroll-contain rounded-lg">
        <SingleComment />
        <SingleComment />
        {/* <CommentForm /> */}
        <CommentList comments={commentList} />
        <AddComment onAddComment={getComment} />
      </div>
    </main>
  );
}

export default Comments;

function SingleComment() {
  return (
    <Card>
      <div className="flex w-full justify-between order-last md:order-first">
        <Vote />
        <Reply />
      </div>
      <div className="flex flex-col gap-2 md:w-5/6 md:absolute md:left-12 md:h-full">
        <Info />
        <Body />
      </div>
    </Card>
  );
}
