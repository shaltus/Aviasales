import React from "react";
import "./Filter.scss";
import { useDispatch, useSelector } from "react-redux";

import { filter, filterAll } from "../../Actions/Actions";

function Filter({ id }) {
  const dispatch = useDispatch();

  const { labelTxt, checked } = useSelector((state) =>
    state.filter.labels.find((label) => label.id === id),
  );

  const handleFilterChange = () => {
    if (id === 1) {
      dispatch(filterAll());
    } else {
      dispatch(filter(id));
    }
  };

  return (
    <div onClick={handleFilterChange}>
      <input
        className="filter__input"
        type="checkbox"
        checked={checked}
        onChange={() => {}}
      />
      <label className="filter__name" htmlFor={id}>
        {labelTxt}
      </label>
    </div>
  );
}
export default Filter;
