import React from "react";
import NavBar from "../../components/NavBar";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import "./styles.scss";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <div className="main__body">
          <div className="sidebar__document">
            <button className="sidebar__compose">
              <AiIcons.AiOutlinePlus className="material-icons" />
              Compose
            </button>
            <div className="sidebarOption sidebarOption__active">
              <AiIcons.AiOutlineInbox />
              <h3>Inbox</h3>
            </div>
            <div className="sidebarOption ">
              <AiIcons.AiOutlineStar />
              <h3>Starred</h3>
            </div>
            <div className="sidebarOption ">
              <MdIcons.MdOutlineWatchLater />
              <h3>Snoozed</h3>
            </div>
            <div className="sidebarOption ">
              <MdIcons.MdLabelImportantOutline />
              <h3>Important</h3>
            </div>
            <div className="sidebarOption ">
              <AiIcons.AiOutlineSend />
              <h3>Sent</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
