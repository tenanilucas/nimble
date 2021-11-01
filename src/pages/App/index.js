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
              <h3>À aprovar</h3>
            </div>
            <div className="sidebarOption ">
              <AiIcons.AiOutlineStar />
              <h3>Favoritos</h3>
            </div>
            <div className="sidebarOption ">
              <AiIcons.AiOutlineCheck />
              <h3>Aprovados</h3>
            </div>
            <div className="sidebarOption ">
              <AiIcons.AiOutlineClose />
              <h3>Não aprovados</h3>
            </div>
            <div className="sidebarOption ">
              <MdIcons.MdLabelImportantOutline />
              <h3>Importantes</h3>
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

            <div className="emailList__list">
              <div className="emailRow">
                <div className="emailRow__options">
                  <input type="checkbox" />
                  <AiIcons.AiOutlineStar />
                  <MdIcons.MdLabelImportantOutline />
                  <h3 className="emailRow__title ">Title</h3>
                  <div className="emailRow__message">
                    <h4>Alguma mensgaem</h4>
                  </div>
                  <div className="emailRow__time">10pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
