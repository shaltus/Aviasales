import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";

import { fetchTickets, searchId, load } from "../../Actions/Actions";
import Ticket from "../Ticket";

import "./TicketList.scss";

function TicketList() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tickets.loading);
  const currentSearchId = useSelector((state) => state.searchId);
  const allTickets = useSelector((state) => state.tickets.tickets[0]);
  const ticketsCount = useSelector((state) => state.tickets.ticketCount);
  const filters = useSelector((state) => state.filter.labels);
  const activeFilterIds = filters
    .filter((filter) => filter.checked)
    .map((filter) => filter.id);
  const activeTab = useSelector((state) => state.sort.activeTab);

  let filteredTickets;
  if (allTickets) {
    if (activeFilterIds.length === 5) {
      filteredTickets = allTickets;
    } else if (activeFilterIds.length > 0) {
      filteredTickets = allTickets.filter((ticket) =>
        ticket.segments.every((segment, _, array) => {
          const stopsLength = segment.stops.length + 2;
          return (
            array.every(
              (otherSegment) => otherSegment.stops.length + 2 === stopsLength,
            ) && activeFilterIds.includes(stopsLength)
          );
        }),
      );
    }
  }

  if (activeTab === "cheap" && filteredTickets !== undefined) {
    filteredTickets = filteredTickets.sort((a, b) => a.price - b.price);
  } else if (activeTab === "fast" && filteredTickets !== undefined) {
    filteredTickets = filteredTickets.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        b.segments[0].duration -
        b.segments[1].duration,
    );
  }

  useEffect(() => {
    if (currentSearchId) {
      dispatch(load(true));
      dispatch(fetchTickets(currentSearchId)).then(() => {
        dispatch(load(false));
      });
    } else {
      dispatch(searchId());
    }
  }, [dispatch, currentSearchId]);

  useEffect(() => {
    dispatch(searchId());
  }, [dispatch]);

  return loading ? (
    <Spin className="spin" size="large" />
  ) : (
    <ul className="ticket-list">
      {filteredTickets && filteredTickets.length > 0 ? (
        filteredTickets.slice(0, ticketsCount).map((el, index) => (
          <li key={index}>
            <Ticket ticket={el} />
          </li>
        ))
      ) : (
        <div className="ticket-list__notification">
          &ldquo;Рейсов, подходящих под заданные фильтры, не найдено&rdquo;
        </div>
      )}
    </ul>
  );
}
export default TicketList;
