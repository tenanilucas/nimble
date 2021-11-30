import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import "./styles.scss";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Loading from "../../components/Loading";

// https://vdob2n-hom-protheus.totvscloud.com.br:24387/rest01/xRestSCR

function App() {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    api
      .get("/rest01/xRestSCR")
      .then((response) => setDocuments(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const mybumbers = 5;

  return (
    <>
      <NavBar />
      <main>
        {documents ? (
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
                  <div className="dropdown">
                    <button className="dropdown__button" onClick={showDropdown}>
                      <MdIcons.MdOutlineMoreVert />
                    </button>
                    <div
                      className={
                        dropdown ? "dropdown__menu" : "dropdown__menu hide"
                      }
                    >
                      <Link to="/#">Aprovar</Link>
                      <Link to="/#">Não Aprovar</Link>
                    </div>
                  </div>
                </div>
                <div className="emailList__settingsRight">
                  <AiIcons.AiOutlineCaretLeft />
                  <AiIcons.AiOutlineCaretRight />
                  <MdIcons.MdKeyboard />
                  <AiIcons.AiTwotoneSetting />
                </div>
              </div>
              <div className="emailList__sections"></div>
              <div className="emailList__list">
                {documents?.Documentos.map((document, index) => (
                  <div className="emailRow" key={index}>
                    <div className="emailRow__options">
                      <input type="checkbox" />
                      <AiIcons.AiOutlineStar />
                      <MdIcons.MdLabelImportantOutline />
                      <h3 className="emailRow__title ">
                        {document.NUM_SOLICIT}
                      </h3>
                      <div className="emailRow__message">
                        <h4>{document.NOME_FORNEC}</h4>
                      </div>
                      <div className="emailRow__time">10pm</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}

export default App;
