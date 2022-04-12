function ProfileFooter() {
  return (
    <div className="absolute bottom-0 w-full border-t border-gray-300 p-4 md:p-3 flex items-center justify-around">
      <div className="flex flex-col gap-1 items-center">
        <h4 className="text-lg font-bold text-gray-900 uppercase">80k</h4>
        <p className="text-gray-700 font-normal capitalize text-sm">
          followers
        </p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h4 className="text-lg font-bold text-gray-900 uppercase">803k</h4>
        <p className="text-gray-700 font-normal capitalize text-sm">likes</p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h4 className="text-lg font-bold text-gray-900 uppercase">1.4k</h4>
        <p className="text-gray-700 font-normal capitalize text-sm">photos</p>
      </div>
    </div>
  );
}

export default ProfileFooter;
