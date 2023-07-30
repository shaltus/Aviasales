import React from "react";

import "./Ticket.scss";

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (duration % 60).toString().padStart(2, "0");
  return `${hours}ч ${minutes}м`;
};

const formatDate = (date0, duration) => {
  const startDate = new Date(date0);
  const endDate = new Date(startDate.getTime() + duration * 60000);
  const getHoursMin = (date) => {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const min = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${min}`;
  };
  const startTime = getHoursMin(startDate);
  const endTime = getHoursMin(endDate);

  return { startTime, endTime };
};

function Tickets({ ticket }) {
  const { price, carrier, segments } = ticket;
  const [segment0, segment1] = segments;

  const times0 = formatDate(segment0.date, segment0.duration);
  const times1 = formatDate(segment1.date, segment1.duration);

  const {
    origin: origin0,
    destination: destination0,
    stops: stops0,
  } = segment0;

  const {
    origin: origin1,
    destination: destination1,
    stops: stops1,
  } = segment1;

  return (
    <div className="ticket">
      <h2>{price} Р</h2>
      <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
      <ul className="ticket__desc">
        <li>
          <span>
            {origin0} - {destination0}
          </span>
          <br />
          <span>
            {times0.startTime}-{times0.endTime}
          </span>
        </li>
        <li>
          <span>В пути</span>
          <br />
          <span>{formatDuration(segment0.duration)}</span>
        </li>
        <li>
          <span>{stops0.length} пересадки</span>
          <br />
          <span>{stops0.join(", ")}</span>
        </li>
        <li>
          <span>
            {origin1} - {destination1}
          </span>
          <br />
          <span>
            {times1.startTime}-{times1.endTime}
          </span>
        </li>
        <li>
          <span>В пути</span>
          <br />
          <span>{formatDuration(segment1.duration)}</span>
        </li>
        <li>
          <span>{stops1.length} пересадки</span>
          <br />

          <span>{stops1.join(", ")}</span>
        </li>
      </ul>
    </div>
  );
}

export default Tickets;
