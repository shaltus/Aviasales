import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showMoreTickets, togglePagination } from "../../Actions/Actions";
import "./Pagination.scss";

function Pagination() {
  const filters = useSelector((state) => state.filter.labels);
  const activeFilterIds = filters
    .filter((filter) => filter.checked)
    .map((filter) => filter.id);
  const showPagination = useSelector((state) => state.tickets.showPagination);

  const dispatch = useDispatch();

  const showFiveTickets = () => {
    dispatch(showMoreTickets());
  };

  useEffect(() => {
    if (activeFilterIds.length === 0) {
      dispatch(togglePagination(false));
    } else {
      dispatch(togglePagination(true));
    }
  }, [activeFilterIds, dispatch]);

  if (!showPagination) {
    return null;
  }

  return (
    <button className="pagination" type="button" onClick={showFiveTickets}>
      <span>Показать еще 5 билетов</span>
    </button>
  );
}
export default Pagination;
