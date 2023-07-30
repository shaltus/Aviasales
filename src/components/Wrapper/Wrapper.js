import React from "react";

import st from "./Wrapper.module.scss";

function Wrapper({ children }) {
  return <div className={st.wrapper}>{children}</div>;
}
export default Wrapper;
