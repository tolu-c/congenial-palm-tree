import ProfileCard from "../../components/profile-component/ProfileCard";
import BackButton from "../../components/ui/BackButton";

function ProfileHome() {
  return <main className="bg-gradient-to-br from-blue-200/75 via-purple-400 to-blue-600 flex items-center justify-center h-screen">
      <BackButton />
      <ProfileCard />
  </main>;
}

export default ProfileHome;
