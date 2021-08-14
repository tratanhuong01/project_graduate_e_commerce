import React from "react";
import ItemFollowUs from "./ItemFollowUs/ItemFollowUs";

function FollowUs(props) {
  return (
    <>
      <div className="mb-8 ml-2">
        <span className="py-2 border-b-2 border-solid border-organce font-semibold text-xl text-gray-600">
          THEO DÕI CHÚNG TÔI
        </span>
      </div>
      <div className="w-full flex flex-wrap">
        <ItemFollowUs
          color={{ backgroundColor: "#4C66A3" }}
          icon={"bx bxl-facebook"}
          number={"12.322"}
        />
        <ItemFollowUs
          color={{ backgroundColor: "#2FC2EE" }}
          icon={"bx bxl-twitter"}
          number={"11.245"}
        />
        <ItemFollowUs
          ins={"instgram"}
          color={{
            filter:
              "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888'GradientType=1",
          }}
          icon={"bx bxl-instagram"}
          number={"9.291"}
        />
        <ItemFollowUs
          color={{ backgroundColor: "#FF680D" }}
          icon={"bx bx-store-alt"}
          number={"134.528"}
        />
        <ItemFollowUs
          color={{ backgroundColor: "#CF3E28" }}
          icon={"bx bxl-google-plus"}
          number={"43.534"}
        />
        <ItemFollowUs
          color={{ backgroundColor: "#E42C27" }}
          icon={"bx bxl-youtube"}
          number={"102.202"}
        />
      </div>
    </>
  );
}

export default FollowUs;
