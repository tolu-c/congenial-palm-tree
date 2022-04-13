import { ReplyIcon } from "@heroicons/react/solid";

export default function Reply() {
  return (
    <div className="flex items-center gap-1 text-blue-900 hover:text-blue-200/50 cursor-pointer justify-items-end md:items-start">
      <ReplyIcon className="h-3 w-3 stroke-[4px]" />
      <span className="text-xs font-bold">Reply</span>
    </div>
  );
}
