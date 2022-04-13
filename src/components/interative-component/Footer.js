import CommentBoxSide from './CommentBoxSide'
import Reply from "./Reply";

function Footer() {
  return (
    <div classname='flex w-full items-center justify-between'>
      <CommentBoxSide />
      <Reply />
    </div>
  )
}

export default Footer