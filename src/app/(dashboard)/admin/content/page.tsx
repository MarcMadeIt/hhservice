import React from "react";
import { setNewNews } from "./actions";

const Content = () => {
  return (
    <div>
      <button onClick={setNewNews}>Add News</button>
    </div>
  );
};

export default Content;
