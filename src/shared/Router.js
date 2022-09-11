import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Subscribe from './../pages/Subscribe';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
        <Route path="/sub" element={<Subscribe />} />

        {/* <Route /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
