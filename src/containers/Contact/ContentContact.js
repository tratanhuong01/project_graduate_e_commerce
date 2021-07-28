import React, { Component } from "react";
import FormContact from "../../components/Contact/ContentContact/FormContact/FormContact";
import InfoContact from "../../components/Contact/ContentContact/InfoContact/InfoContact";
import MapContact from "../../components/Contact/ContentContact/MapContact/MapContact";

function ContentContact(props) {
  return (
    <div className="xl:w-4/5 w-full mx-auto p-4">
      <MapContact />
      <div className="w-full flex flex-col xl:flex-row my-10">
        <FormContact />
        <InfoContact />
      </div>
    </div>
  );
}

export default ContentContact;
