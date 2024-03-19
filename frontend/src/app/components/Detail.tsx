" use client"

import { useState } from "react";


interface Point {
  pointId: number;
  name: string;
  E: number;
  N: number;
  H: number;
}

interface Session {
  sessionId: number;
  sessionName: string;
  datetime: string;
  points: Point[];
}

const Detail = (props: { base: Session }) => {
  const { base: session } = props;

  const [viewwModel, setViewwModel] = useState("Text");

  return (
    <main>
      <button onClick={() => setViewwModel("Text")}>Text</button>
      <button onClick={() => setViewwModel("ZRA")}>ZRA</button>
      <button onClick={() => setViewwModel("3D")}>3D</button>

      {viewwModel === "Text" && session && session.points && session.points.map((point: any) => (
        <p key={point.pointId}>{point.name}</p>
      ))}
    </main>
  );
};
export default Detail;