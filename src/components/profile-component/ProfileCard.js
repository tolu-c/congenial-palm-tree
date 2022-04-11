import victor from "../../images/image-victor.jpg";

function ProfileCard() {
  return (
    <div className="rounded-lg overflow-hidden w-5/6 max-w-md h-3/5 shadow-lg drop-shadow-sm shadow-blue-400 relative">
      <div className="w-full h-2/5 bg-gradient-to-br from-blue-300 via-teal-500 to-blue-700"></div>
      <div className="bg-white w-full h-3/5 relative">
        <img
          src={victor}
          alt="victor"
          className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white absolute -top-16 md:-top-20 left-0 right-0 overflow-hidden mx-auto"
        />
        <div className="top-16 md:top-20 absolute w-full text-center">
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 capitalize">
            victor crest <span className="font-normal">26</span>
          </h3>
          <p className="text-gray-700 font-normal capitalize mt-1">london</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full border-t border-gray-300 p-4 md:p-3 flex items-center justify-around">
        <div className="flex flex-col gap-2 md:gap-1 items-center">
          <h4 className="text-lg font-bold text-gray-900 uppercase">80k</h4>
          <p className="text-gray-700 font-normal capitalize text-sm">
            followers
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-1 items-center">
          <h4 className="text-lg font-bold text-gray-900 uppercase">803k</h4>
          <p className="text-gray-700 font-normal capitalize text-sm">
            likes
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-1 items-center">
          <h4 className="text-lg font-bold text-gray-900 uppercase">1.4k</h4>
          <p className="text-gray-700 font-normal capitalize text-sm">
            photos
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
