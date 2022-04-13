import CommentBoxSide from './CommentBoxSide'
import Reply from "./Reply";

function Footer() {
  return (
    <div className='flex w-full justify-between'>
      <CommentBoxSide />
      <Reply />
    </div>
  )
}

export default Footer