import { useRef, useState } from "react";
// import styled from "styled-components";

import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
// import profile from "../image/profile.jpg";
import { useDispatch } from "react-redux";

const profile = require("../image/profile.jpg");

const MyPage = () => {
  const dispatch = useDispatch();
  const [Nickname, setNickName] = useState("췤키라웃");
  const [Sub, setSub] = useState("구독중");
  const [isHover, setIsHover] = useState(false);
  const [profileImg, setProfileImg] = useState(profile);
  const fileInput = useRef(null);

  // const handlClick = (e: any) => {
  //   fileInput.current.click();
  // };

  const changeHandler = (e: any) => {
    let formData = new FormData();
    setProfileImg(e.target.files[0]);
  };

  return <Layout>My Page</Layout>;
};
export default MyPage;
