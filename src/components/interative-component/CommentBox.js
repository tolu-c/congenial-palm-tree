// import CommentBoxSide from './CommentBoxSide'
// import CommentBoxMain from "./CommentBoxMain";
import Header from './Header';
import Body from "./Body";
import Footer from './Footer';

function CommentBox() {
  return (
    <div className='w-5/6 md:max-w-xl mx-auto p-2 flex flex-col md:flex-row gap-2 bg-white rounded-lg'>
      {/* <CommentBoxSide />
      <CommentBoxMain /> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default CommentBox;
