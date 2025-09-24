import React from "react";

import Filter from "../Filter";
import "./FilterList.scss";

function FilterList() {
  const filterIds = [1, 2, 3, 4, 5];

  const advertisements = [
    {
      position: "left",
      href: "https://www.emirates.com/ru/russian/",
      image: {
        src: "https://images.unsplash.com/photo-1549921296-3ecf9c9e3be0?auto=format&fit=crop&w=400&q=80",
        alt: "Emirates — специальные тарифы на дальнемагистральные рейсы",
      },
    },
    {
      position: "right",
      href: "https://www.qatarairways.com/ru-ru/homepage.html",
      image: {
        src: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=400&q=80",
        alt: "Qatar Airways — комфортные перелёты в любую точку мира",
      },
    },
  ];

  const getAd = (position) =>
    advertisements.find((advertisement) => advertisement.position === position);

  const renderAd = (position) => {
    const advertisement = getAd(position);

    if (!advertisement) {
      return null;
    }

    const {
      href,
      image: { src, alt },
    } = advertisement;

    return (
      <a
        className={`filter-layout__ad filter-layout__ad--${position}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={src} alt={alt} loading="lazy" />
      </a>
    );
  };

  return (
    <div className="filter-layout">
      {renderAd("left")}
      <aside className="filter" aria-label="Фильтр по количеству пересадок">
        <h3>Количество пересадок</h3>
        <ul className="filter__list">
          {filterIds.map((id) => (
            <li className="filter__item" key={id}>
              <Filter id={id} />
            </li>
          ))}
        </ul>
      </aside>
      {renderAd("right")}
    </div>
  );
}
export default FilterList;
