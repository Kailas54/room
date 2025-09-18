import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "About Us",
          quote: "Revolutionizing architecture through design and technology.",
          content: [
            "At BrandBook, we are a pioneering architectural studio that seamlessly integrates cutting-edge design with advanced technological solutions. Our mission is to transform the way architecture is conceived, experienced, and realized by leveraging the latest in digital tools and innovative design methodologies.",
          ],
        }}
        imageSrc={"/images/Screenshot 2025-09-19 003731.png"}
      />
    </>
  );
};

export default AboutPage;
