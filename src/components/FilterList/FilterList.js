import React from "react";

import Filter from "../Filter";
import "./FilterList.scss";

function FilterList() {
  const filterIds = [1, 2, 3, 4, 5];

  const advertisements = {
    left: {
      href: "https://www.emirates.com/ru/russian/",
      img: "https://images.unsplash.com/photo-1549921296-3ecf9c9e3be0?auto=format&fit=crop&w=400&q=80",
      alt: "Emirates — специальные тарифы на дальнемагистральные рейсы",
    },
    right: {
      href: "https://www.qatarairways.com/ru-ru/homepage.html",
      img: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=400&q=80",
      alt: "Qatar Airways — комфортные перелёты в любую точку мира",
    },
  };

  return (
    <div className="filter-layout">
      <a
        className="filter-layout__ad filter-layout__ad--left"
        href={advertisements.left.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={advertisements.left.img} alt={advertisements.left.alt} />
      </a>
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
      <a
        className="filter-layout__ad filter-layout__ad--right"
        href={advertisements.right.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={advertisements.right.img} alt={advertisements.right.alt} />
      </a>
    </div>
  );
}
export default FilterList;
