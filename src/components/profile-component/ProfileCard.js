
import ProfileBg from "./ProfileBg";
import ProfileBody from "./ProfileBody";
import ProfileFooter from "./ProfileFooter";

function ProfileCard() {
  return (
    <div className="rounded-lg overflow-hidden w-5/6 max-w-md h-3/5 shadow-lg drop-shadow-sm shadow-blue-400 relative">
      <ProfileBg />
      <ProfileBody />
      <ProfileFooter />
    </div>
  );
}

export default ProfileCard;
