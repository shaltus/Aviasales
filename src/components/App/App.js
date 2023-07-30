import React from "react";

import Wrapper from "../Wrapper";
import FilterList from "../FilterList";
import logo from "../../Icons/Logo.png";
import Tab from "../Tab";
import TicketList from "../TicketList";
import Pagination from "../Pagination";

import "./App.scss";

function App() {
  return (
    <Wrapper>
      <header>
        <img src={logo} alt="Logo" />
      </header>
      <main className="app">
        <FilterList />
        <div className="app__tickets">
          <Tab />
          <TicketList />
          <Pagination />
        </div>
      </main>
    </Wrapper>
  );
}
export default App;
