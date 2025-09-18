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
            "Our design side is where creativity meets innovation, crafting visually stunning and emotionally resonant architectural experiences. We believe that great design is not just about aesthetics, but about creating meaningful connections between people and spaces. Our team of visionary designers harnesses the power of cutting-edge tools like Blender, Unreal Engine, and Cinema 4D to bring architectural concepts to life with unparalleled realism and artistic flair.",
            "From photorealistic renderings to immersive virtual environments, we push the boundaries of what's possible in architectural visualization. Our designs are characterized by meticulous attention to detail, dynamic lighting, and a deep understanding of spatial relationships, ensuring that every project we undertake is not only visually captivating but also functionally sound.",
            "We specialize in creating compelling narratives through design, using advanced techniques such as procedural generation, parametric modeling, and real-time rendering to craft spaces that inspire and engage. Whether it's a sleek modern skyscraper or a cozy residential retreat, our design team is dedicated to delivering innovative solutions that elevate the architectural experience.",
            "By integrating the latest advancements in AI-driven design tools and generative design processes, we streamline our workflow and enhance our creative capabilities. This allows us to explore a wider range of design possibilities and deliver projects that are both cutting-edge and deeply human-centric.",
            "At the heart of our design philosophy is a commitment to collaboration and client engagement. We work closely with architects, developers, and stakeholders to ensure that our designs not only meet but exceed expectations, resulting in spaces that are as functional as they are beautiful.",
          ],
        }}
        imageSrc={"/images/design.webp"}
      />
    </>
  );
};

export default DesignWorkPage;
