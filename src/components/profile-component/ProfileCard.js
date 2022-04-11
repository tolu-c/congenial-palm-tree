import victor from "../../images/image-victor.jpg";

function ProfileCard() {
  return (
    <div className="rounded-lg overflow-hidden w-3/4 h-3/5 shadow-lg drop-shadow-sm shadow-blue-400 relative">
      <div className="w-full h-2/5 bg-gradient-to-br from-blue-300 via-teal-500 to-blue-700"></div>
      <div className="bg-white w-full h-3/5 relative">
        <img
          src={victor}
          alt="victor"
          className="h-28 w-28 rounded-full border-4 border-white absolute -top-12 left-0 right-0 overflow-hidden mx-auto"
        />
        <div className="top-20 absolute w-full text-center">
          <h3 className="font-bold text-xl text-gray-800 capitalize">
            victor crest <span className="font-normal">26</span>
          </h3>
          <p className="text-gray-700 font-normal capitalize mt-1">london</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full border-t border-gray-300 p-2 py-4s flex items-center">
        <div>
          <h4>80k</h4>
          <p>followers</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
