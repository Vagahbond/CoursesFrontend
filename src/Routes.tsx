import React from "react";

import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Courses from "./pages/Courses";

interface Props {
  children: React.ReactNode;
};

const Router = (props: Props) => {
  return <BrowserRouter >
    {props.children}
    <main className="absolute top-16 bg-zinc-600 w-full h-full">
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>
    </main>
  </BrowserRouter>;
};

export default Router;
