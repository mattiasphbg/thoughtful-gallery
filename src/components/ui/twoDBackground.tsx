import React from "react";
React.useLayoutEffect = React.useEffect;
import { Stage, Layer, Rect, Image } from "react-konva";
import useImage from "use-image";

const url = "https://konvajs.github.io/assets/yoda.jpg";

function MyTwoCanvas() {
  const [image] = useImage(url);

  return (
    <>
      <div className="container w-full">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Image x={20} y={20} image={image} draggable alt="Something" />
            <Rect x={20} y={20} width={100} height={50} fill="red" draggable />
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default MyTwoCanvas;
