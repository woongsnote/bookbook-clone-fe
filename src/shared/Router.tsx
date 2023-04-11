import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Mypage from "../pages/Mypage";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
