import { PlusIcon, MinusSmIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function CommentBoxSide() {
  const [count, setCount] = useState(12);

  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }

  return (
    <div className="flex md:flex-col gap-2 text-blue-600/40 bg-blue-700/10 rounded-lg p-2 items-center justify-center">
      <PlusIcon className="h-4 w-4 hover:text-blue-800" onClick={addCount} />
      <span className="text-base text-blue-800 font-bold">{count}</span>
      <MinusSmIcon className="h-4 w-4 hover:text-blue-800" onClick={minusCount} />
    </div>
  );
}
