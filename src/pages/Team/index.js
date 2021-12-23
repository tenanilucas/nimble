import React from "react";
import NavBar from "../../components/NavBar";
import "./style.scss";

function Team() {
  return (
    <>
      <NavBar />
      <main>
        <section className="container section section-height">
          <h1 className="section__title">Time</h1>
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader"></div>
              <table>
                <thead>
                  <tr id="navHeader">
                    <th>Nome</th>
                    <th>Superior</th>
                    <th>Unidade</th>
                    <th>Está na equipe?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Luiz</td>
                    <td>Felipe</td>
                    <td>São Paulo</td>
                    <td>
                      <button>NÃO</button>
                    </td>
                  </tr>
                  <tr>
                    <td>João</td>
                    <td>Felipe</td>
                    <td>São Paulo</td>
                    <td>
                      <button>SIM</button>
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

export default Team;
