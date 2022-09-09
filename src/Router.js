import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Post from './components/post/Post.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;