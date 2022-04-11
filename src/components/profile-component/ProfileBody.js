import victor from "../../images/image-victor.jpg";

function ProfileBody() {
  return (
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
  );
}

export default ProfileBody;
