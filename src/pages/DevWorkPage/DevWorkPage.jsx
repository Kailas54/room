import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Our Works",
          quote:
            "Transforming visionary designs into seamless digital realities.",
          content: [
            "At the intersection of creativity and technology, our development team is dedicated to crafting digital experiences that inspire and elevate the architectural narrative. Whether it's a sleek modern building or a complex urban landscape, we are passionate about transforming visionary designs into seamless digital realities.",
          ],
        }}
        imageSrc={"/images/Screenshot 2025-09-19 003219.png"}
      />
    </>
  );
};

export default DevWorkPage;
