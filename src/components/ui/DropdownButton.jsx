import { auth } from "../../firebase";
import avatar from "../../assets/images/user.png";

const DropdownButton = ({ dropdown, setDropdown, md }) => {
  const profilePicture = auth?.currentUser?.photoURL
    ? auth?.currentUser?.photoURL
    : avatar;

  return (
    <>
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className={`${md} text-sm md:mr-0 ${
          auth?.currentUser?.photoURL
            ? ""
            : "border-[1px] rounded-full p-1 bg-gray-200 transition-colors"
        }`}
        type="button"
        onClick={() => setDropdown(!dropdown)}
      >
        <img
          className={`w-8 h-8 ${
            auth?.currentUser?.photoURL ? "rounded-full" : ""
          }`}
          src={profilePicture}
          alt="User"
        />
      </button>
    </>
  );
};

export default DropdownButton;
