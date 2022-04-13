import CommentBoxSide from './CommentBoxSide'
import CommentBoxMain from "./CommentBoxMain";

function CommentBox() {
  return (
    <div className='w-5/6 max-w-xl mx-auto p-2 flex gap-4 bg-white rounded-lg'>
      <CommentBoxSide />
      <CommentBoxMain />
    </div>
  );
}

export default CommentBox;
