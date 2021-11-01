import React from "react";
import NavBar from "../../components/NavBar";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
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
          <div className="emailList">
            <div className="emailList__settings">
              <div className="emailList__settingsLeft">
                <input type="checkbox" />
                <IoIcons.IoMdArrowDropdown />
                <ImIcons.ImRedo2 />
                <MdIcons.MdOutlineMoreVert />
              </div>
              <div className="emailList__settingsRight">
                <AiIcons.AiOutlineCaretLeft />
                <AiIcons.AiOutlineCaretRight />
                <MdIcons.MdKeyboard />
                <AiIcons.AiTwotoneSetting />
              </div>
            </div>
            <div className="emailList__sections">
              <div className="section section_selected">
                <AiIcons.AiOutlineInbox />
                <h4>Primary</h4>
              </div>
              <div className="section">
                <MdIcons.MdOutlinePeopleAlt />
                <h4>People</h4>
              </div>
              <div className="section">
                <MdIcons.MdLocalOffer />
                <h4>Promotions</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
