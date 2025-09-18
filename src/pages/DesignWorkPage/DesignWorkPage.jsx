import React from "react";
import Page from "../Page";
import "./DesignWorkPage.scss";

const DesignWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "Our collaborators",
          quote: "The best design is more than beautiful, it's meaningful.",
          content: [
            "Our collaborators are at the heart of our design process, bringing diverse perspectives and expertise to every project. We believe that great design is a collaborative effort, and we work closely with architects, developers, and clients to create spaces that truly resonate.",
          ],
        }}
        imageSrc={"/images/design.webp"}
      />
    </>
  );
};

export default DesignWorkPage;
