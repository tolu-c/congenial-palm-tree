import { ReplyIcon } from "@heroicons/react/solid";

export default function Reply() {
  return (
    <div className="flex items-center gap-1 text-blue-900 hover:text-blue-200/50 cursor-pointer">
      <ReplyIcon className="h-4 w-4" />
      <span className="text-sm font-bold">Reply</span>
    </div>
  );
}
