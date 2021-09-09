import React from "react";
import { Breadcrumbs } from "react-breadcrumbs-dynamic";
import { NavLink } from "react-router-dom";

const LevelUrl = (props) => {
  return (
    <div className="w-full flex xl:w-4/5 mx-auto p-4 dark:text-white font-semibold">
      <Breadcrumbs
        separator={<span className="mx-1"> /</span>}
        item={NavLink}
        finalItem={"span"}
        finalProps={{
          style: { color: "#f36438" },
        }}
      />
    </div>
  );
};

export default LevelUrl;
