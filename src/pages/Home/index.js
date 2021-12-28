import React from "react";
import "./style.scss";
import NavBar from "../../components/NavBar";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="container section section-height">
          <h1 className="section__title">Home</h1>
          <div className="cards">
            <div className="card-single">
              <Link to="/app">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Documentos</span>
                      <small>Número de documentos</small>
                    </div>
                    <h2>42</h2>
                  </div>
                  <div className="card-chart">
                    <IoIcons.IoMdDocument className="iconBox sucess" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="card-single">
              <Link to="/app">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Documentos</span>
                      <small>Número de documentos aprovados</small>
                    </div>
                    <h2>2</h2>
                  </div>
                  <div className="card-chart">
                    <IoIcons.IoMdDocument className="iconBox danger" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="card-single">
              <Link to="/team">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Equipe</span>
                      <small>Número de integrantes na equipe</small>
                    </div>
                    <h2>12</h2>
                  </div>
                  <div className="card-chart">
                    <RiIcons.RiTeamFill className="iconBox sucess" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="documents-grid">
            <div className="documents-card">
              <div className="documents-head">
                <h2>Últimos documentos</h2>
                <FiIcons.FiMoreHorizontal id="more" />
              </div>
              <div className="documents-chart">
                <div className="chart-circle">
                  <h3>74%</h3>
                </div>
                <div className="documents-note">
                  <small>Note:Current Sprint</small>
                </div>
              </div>
              <div className="documents-btn">
                <button>Generate report</button>
              </div>
            </div>
            <div className="documents">
              <h3>
                Documentos
                <small>
                  Ver todos <BsIcons.BsArrowRight />
                </small>
              </h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>PVC REFORMAS CONSTRUCOES LTDA</div>
                    </td>
                    <td>
                      <div>X30419</div>
                    </td>
                    <td>
                      <div>
                        <button>R$ 550</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>PVC REFORMAS CONSTRUCOES LTDA</div>
                    </td>
                    <td>
                      <div>X30419</div>
                    </td>
                    <td>
                      <div>
                        <button>R$ 550</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>PVC REFORMAS CONSTRUCOES LTDA</div>
                    </td>
                    <td>
                      <div>X30419</div>
                    </td>
                    <td>
                      <div>
                        <button>R$ 550</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>PVC REFORMAS CONSTRUCOES LTDA</div>
                    </td>
                    <td>
                      <div>X30419</div>
                    </td>
                    <td>
                      <div>
                        <button>R$ 550</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
