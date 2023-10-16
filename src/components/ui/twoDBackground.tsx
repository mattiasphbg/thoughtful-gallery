import React, { useEffect, useRef } from "react";
import Two from "two.js";

const Background = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const two = new Two({
      width: window.innerWidth,
      height: window.innerHeight,
    }).appendTo(containerRef.current as HTMLElement);

    const imageUrl = "https://source.unsplash.com/random/242x320"; // Replace this with your desired image URL

    const imageWidth = Math.min(two.width, two.height); // Calculate the width of the image to fit within the canvas

    const currentX = two.width / 2;
    const currentY = two.height / 2;

    const image = two.makeRectangle(currentX, currentY, imageWidth, two.height);

    const texture = new Two.Texture(imageUrl);
    image.fill = texture;

    two.update();

    return () => {
      two.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
      }}
    ></div>
  );
};

export default Background;
