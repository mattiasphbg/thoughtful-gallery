import React, { useRef, useEffect } from "react";
import Two from "two.js";

function MyTwoCanvas() {
  const twoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const two = new Two({
      fullscreen: true,
      autostart: true,
    }).appendTo(twoRef.current as HTMLElement);

    const rect = two.makeRectangle(two.width / 2, two.height / 2, 200, 100);
    rect.fill = "#FF0000";
    const img = two.makeTexture("");

    two.add(rect);

    const update = () => {
      rect.rotation += 0.01;
      two.render();
      requestAnimationFrame(update);
    };

    update();

    return () => {
      // Clean up Two.js instance
      two.pause();
      two.clear();
    };
  }, []);

  return <div ref={twoRef} />;
}

export default MyTwoCanvas;
