import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import "../../styles/table.scss";
import api from "../../services/api";
import Loading from "../../components/Loading";

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

  return (
    <>
      <NavBar />
      <main>
        {documents ? (
          <section className="container section section-height">
            {documents.Documentos.length === 0 ? (
              <h1>Não há documentos para serem mostradas no momento</h1>
            ) : (
              <>
                <h1 className="section__title">Aprovação</h1>
                <div className="details">
                  <div className="recentOrders">
                    <div className="cardHeader"></div>
                    <table>
                      <thead>
                        <tr id="navHeader">
                          <td></td>
                          <td>Número</td>
                          <td>Fornecedor</td>
                          <td>Filial</td>
                          <td>Valor</td>
                        </tr>
                      </thead>
                      <tbody>
                        {documents?.Documentos.map((document, index) => (
                          <tr key={index}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{document.NUM_SOLICIT}</td>
                            <td>{document.NOME_FORNEC}</td>
                            <td>{document.FILIAL}</td>
                            <td>R$ {document.VALOR_TOTAL}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </section>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}

export default App;
