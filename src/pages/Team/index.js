import React from "react";
import NavBar from "../../components/NavBar";
import "./style.scss";

function Team() {
  return (
    <>
      <NavBar />
      <main>
        <div class="limiter">
          <div class="container-table100">
            <div class="wrap-table100">
              <div class="table100">
                <table>
                  <thead>
                    <tr class="table100-head">
                      <th class="column1">Nome</th>
                      <th class="column2">Superior</th>
                      <th class="column3">Unidade</th>
                      <th class="column4">Está na equipe?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="column1">Luiz</td>
                      <td class="column2">Felipe</td>
                      <td class="column3">São Paulo</td>
                      <td class="column4">
                        <button className="myButton no">NÃO</button>
                      </td>
                    </tr>
                    <tr>
                      <td class="column1">João</td>
                      <td class="column2">Felipe</td>
                      <td class="column3">São Paulo</td>
                      <td class="column4">
                        <button className="myButton yes">SIM</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Team;
