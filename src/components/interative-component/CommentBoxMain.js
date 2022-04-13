import MainHeader from './MainHeader'
import MainBody from "./MainBody";

export default function CommentBoxMain() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <MainHeader />
      <MainBody />
    </div>
  );
}