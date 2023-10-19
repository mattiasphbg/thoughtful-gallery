import React from "react";
import { Stage, Layer, Rect } from "react-konva";

function MyTwoCanvas() {
  return (
    <>
      <div className="container">
        <Stage width={600} height={400}>
          <Layer>
            <Rect x={20} y={20} width={100} height={50} fill="red" draggable />
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default MyTwoCanvas;
