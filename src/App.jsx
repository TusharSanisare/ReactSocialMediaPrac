import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/Createpost";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="main-body">
      <Header></Header>
      <div className="main-container">
        <Sidebar></Sidebar>
        <div className="main-right-container">
          {/* <CreatePost></CreatePost> */}
          <PostList></PostList>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
