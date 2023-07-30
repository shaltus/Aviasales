import React from "react";
import { Tabs } from "antd";
import "./Tab.scss";
import { useDispatch } from "react-redux";

import { sort } from "../../Actions/Actions";

function Tab() {
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(sort(event));
  };

  const array = [
    { label: "Самый дешёвый", id: "cheap" },
    { label: "Самый быстрый", id: "fast" },
    { label: "Оптимальный", id: "optimal" },
  ];

  return (
    <Tabs
      type="card"
      defaultActiveKey="tab1"
      size="large"
      className="custom-tabs"
      items={array.map((item) => ({
        label: item.label,
        key: item.id,
      }))}
      onChange={onChange}
    />
  );
}
export default Tab;
