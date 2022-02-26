import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import "../../styles/table.scss";
import "./styles.scss";
import api from "../../services/api";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

function App() {
  const [documents, setDocuments] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleApprove = (workFlow, branch) => {
    api
      .put(
        `/rest01/documentapproval/api/v1/documents?Approve=True&Notes=Teste&BranchID=${branch}&WorkflowID=${workFlow}`
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("Documento aprovado com sucesso");
        } else {
          toast.error("Houve um problema na aprovação desse documento");
        }
        return;
      })
      .catch(() => {
        toast.error("Documento já alterado");
        return;
      });
  };

  const handleDisapprove = (workFlow, branch) => {
    api
      .put(
        `/rest01/documentapproval/api/v1/documents?Approve=False&Notes=Teste&BranchID=${branch}&WorkflowID=${workFlow}`
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("Documento rejeitado com sucesso");
        } else {
          toast.error("Houve um problema na rejeição desse documento");
        }
        return;
      })
      .catch(() => {
        toast.error("Documento já alterado");
        return;
      });
  };

  const convertCurrency = (currency) => {
    var f = currency
      .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      .replace(".", ",");
    return f;
  };

  const handdleFormat = (str) => {
    var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
    return subst;
  };

  useEffect(() => {
    setLoading(true);
    api
      .get("/rest01/documentapproval/api/v1/documents?Status=02")
      .then((response) => {
        setDocuments(response.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Algo deu errado");
        history.push("/");
      });
  }, [history]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <main>
        {documents ? (
          <section className="container section section-height">
            {documents.Documents.length === 0 ? (
              <h1>Não há documentos para serem exibidos no momento</h1>
            ) : (
              <>
                <h1 className="section__title">Aprovação</h1>
                <div className="details">
                  <div className="recentOrders">
                    <div className="cardHeader"></div>
                    <table>
                      <thead>
                        <tr id="navHeader">
                          <td>Número</td>
                          <td>Fornecedor</td>
                          <td>Filial</td>
                          <td>Valor</td>
                          <td>Tipo</td>
                          <td>Status</td>
                          <td></td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {documents.Documents.map((document, index) => (
                          <tr key={index}>
                            {/* <td>
                              <input type="checkbox" />
                            </td> */}
                            <td>{document.DocumentID}</td>
                            <td>
                              {document.SupplierName
                                ? handdleFormat(document.SupplierName)
                                : "Não há fonecedor"}
                            </td>
                            <td>{handdleFormat(document.BranchName)}</td>
                            <td>{convertCurrency(document.Amount)}</td>
                            <td>
                              {handdleFormat(document.DocumentTypeDescription)}
                            </td>
                            <td>{handdleFormat(document.StatusDescription)}</td>
                            <td>
                              <button
                                className="approve"
                                onClick={() =>
                                  handleApprove(
                                    document.WorkflowID,
                                    document.BranchID
                                  )
                                }
                              >
                                Aprovar
                              </button>
                            </td>
                            <td>
                              <button
                                className="disapprove"
                                onClick={() =>
                                  handleDisapprove(
                                    document.WorkflowID,
                                    document.BranchID
                                  )
                                }
                              >
                                Rejeitar
                              </button>
                            </td>
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
          <h1>Não há documentos a serem mostrados</h1>
        )}
      </main>
    </>
  );
}

export default App;
