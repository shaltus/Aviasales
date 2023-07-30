import React from "react";

import Filter from "../Filter";
import "./FilterList.scss";

function FilterList() {
  const filterIds = [1, 2, 3, 4, 5];
  return (
    <aside className="filter">
      <h3>Количество пересадок</h3>
      <ul className="filter__list">
        {filterIds.map((id) => (
          <li className="filter__item" key={id}>
            <Filter id={id} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default FilterList;
