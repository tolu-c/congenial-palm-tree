import Info from "./Info";
import Reply from "./Reply";

export default function MainHeader() {
  return (
    <div className="p-1 flex justify-between items-center w-full">
      <Info />
      <Reply />
    </div>
  );
}

