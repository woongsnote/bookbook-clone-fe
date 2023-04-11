import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
// import SideBar from "./SideBar";

const profile = require("../../image/profile.jpg");

const Header = () => {
  const [spreadNav, setSpreadNav] = useState(false); // 네비바를 여는 스테이트.
  const [isView, setIsView] = useState(false); // 내부 값을 보이게 하는 스테이트.
  const [bgView, setBgView] = useState("transparent");

  const [id, setId] = useState("췤키라웃");
  const [img, setImg] = useState(profile);

  const onClick = () => {
    setSpreadNav((props) => !props);
    setTimeout(() => setIsView((props) => !props), 350);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full h-24 p-5 bg-slate-200 fixed">
      <div className="w-[77px]">
        <div
          onClick={onClick}
          className="cursor-pointer absolute left-[15px] top-5">
          {!spreadNav ? (
            <BiMenu fontSize="30px" color="#3a3a3a" />
          ) : (
            <IoClose fontSize="30px" color="#3a3a3a" />
          )}
        </div>
        {/* <SideBar spreadNav={spreadNav} isView={isView} /> */}
        <div
          onClick={onClick}
          className="cursor-pointer absolute left-[15px] top-5">
          {!spreadNav ? (
            <BiMenu fontSize="30px" color="#3a3a3a" />
          ) : (
            <IoClose fontSize="30px" color="#fff" />
          )}
        </div>
      </div>

      <Logo />

      <div className="w-32 flex items-center"> 
        <div
          className="w-12 h-12 rounded-full overflow-hidden & > img { w-12 h-12 mr-3 object-cover}">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="profile-img"
          />
        </div>
        <div>{id}</div>
      </div>
    </div>
  );
};

export default Header;
