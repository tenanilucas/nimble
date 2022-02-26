import React, { useState, useEffect } from "react";
import "./style.scss";
import "../../styles/table.scss";
import NavBar from "../../components/NavBar";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Loading from "../../components/Loading";

function Home() {
  const [documents, setDocuments] = useState();
  const [lastDocuments, setLastDocuments] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/rest01/xRestSCR").then((response) => {
      setDocuments(response.data);
      api
        .get(
          "/rest01/documentapproval/api/v1/documents?Page=1&PageSize=4&Status=02"
        )
        .then((response) => {
          setLastDocuments(response.data);
        });
      setLoading(false);
    });
  }, []);

  const handdleFormat = (str) => {
    var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
    return subst;
  };

  if (loading) {
    return <Loading />;
  }

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
                    <h2>{documents ? documents["Documentos"].length : "0"}</h2>
                  </div>
                  <div className="card-chart">
                    <IoIcons.IoMdDocument className="iconBox sucess" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="documents-grid">
            <div className="documents">
              <h3>
                Últimos documentos
                <small>
                  <Link to="/app">
                    Ver todos <BsIcons.BsArrowRight />
                  </Link>
                </small>
              </h3>

              <table>
                <tbody>
                  {lastDocuments?.Documents.map((document, index) => (
                    <tr key={index}>
                      <td>{document.DocumentID}</td>
                      <td>{handdleFormat(document.BranchName)}</td>
                      <td>{handdleFormat(document.DocumentTypeDescription)}</td>
                      <td>
                        <div>
                          <button>
                            <Link to="/app">
                              {handdleFormat(document.StatusDescription)}
                            </Link>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
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
