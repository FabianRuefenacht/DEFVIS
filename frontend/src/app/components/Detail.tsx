import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";

import ThreeScene from "./ThreeScene";


function Detail({
  baseSessionPoints,
  nextSessionPoints,
  view3DPoint,
}: {
  baseSessionPoints: any;
  nextSessionPoints: any;
  view3DPoint: string | null;
}) {

  const [viewwModel, setViewwModel] = useState("Text");
  const [basePts, setBasePts] = useState<Point[]>([]);
  const [nextPts, setNextPts] = useState<Point[]>([]);

  useEffect(() => {
    try {
      if (baseSessionPoints) {
        setBasePts(baseSessionPoints.points);
      }
    } catch (error) {
      console.error("Error in baseSessionPoints useEffect:", error);
    }
  }, [baseSessionPoints]);

  useEffect(() => {
    try {
      if (nextSessionPoints) {
        setNextPts(nextSessionPoints.points);
      }
    } catch (error) {
      console.error("Error in nextSessionPoints useEffect:", error);
    }
  }, [nextSessionPoints]);




  interface Point {
    name: string;
    E: number;
    N: number;
    H: number;
  }

  const [view3DPointInMap, setView3DPointInMap] = useState<string | null>(null);

  const [view3DPointInMapEasting, setView3DPointInMapEasting] = useState<number | null>(null);
  const [view3DPointNextEasting, setView3DPointNextEasting] = useState<number | null>(null);

  const [view3DPointInMapNorthing, setView3DPointInMapNorthing] = useState<number | null>(null);
  const [view3DPointNextNorthing, setView3DPointNextNorthing] = useState<number | null>(null);

  const [view3DPointInMapHeight, setView3DPointInMapHeight] = useState<number | null>(null);
  const [view3DPointNextHeight, setView3DPointNextHeight] = useState<number | null>(null);
  

  useEffect(() => {
    if (view3DPoint && basePts && nextPts) {
      const view3DPointInMapEasting = basePts.find((point) => point.name === view3DPoint)?.E;
      const view3DPointNextEasting = nextPts.find((point) => point.name === view3DPoint)?.E;
      const view3DPointInMapNorthing = basePts.find((point) => point.name === view3DPoint)?.N;
      const view3DPointNextNorthing = nextPts.find((point) => point.name === view3DPoint)?.N;
      const view3DPointInMapHeight = basePts.find((point) => point.name === view3DPoint)?.H;
      const view3DPointNextHeight = nextPts.find((point) => point.name === view3DPoint)?.H;

      setView3DPointInMap(view3DPoint);
      setViewwModel("3D");
      setView3DPointInMapEasting(view3DPointInMapEasting ?? null);
      setView3DPointNextEasting(view3DPointNextEasting ?? null);
      setView3DPointInMapNorthing(view3DPointInMapNorthing ?? null);
      setView3DPointNextNorthing(view3DPointNextNorthing ?? null);
      setView3DPointInMapHeight(view3DPointInMapHeight ?? null);
      setView3DPointNextHeight(view3DPointNextHeight ?? null);
    }
  }, [view3DPoint, basePts, nextPts, view3DPointNextEasting, view3DPointNextNorthing, view3DPointNextHeight]);




  function findCorrespondingNextPoint(
    basePoint: Point,
    nextPoints: Point[]
  ): Point | undefined {
    return nextPoints.find((point) => point.name === basePoint.name);
  }

  return (
    <main>
      <button onClick={() => setViewwModel("Text")} className="pl-5">
        Text
      </button>
      <button onClick={() => setViewwModel("ZRA")} className="pl-5">
        ZRA
      </button>
      <button onClick={() => setViewwModel("3D")} className="pl-5">
        3D
      </button>
      {viewwModel === "Text" && basePts[0] && nextPts[0] && (
        <div className="overflow-y-auto h-full p-4 pb-10">
          <table>
            <thead>
              <tr className="p-0">
                <th className="p-0 pr-5 text-left">Punkt</th>
                <th className="p-0 pr-5 text-left">ΔE [mm]</th>
                <th className="p-0 pr-5 text-left">ΔN [mm]</th>
                <th className="p-0 text-left">ΔH [mm]</th>
              </tr>
            </thead>
            <tbody>
              {basePts.map(
                (point: { name: string; E: number; N: number; H: number }) => {
                  const correspondingNextPoint = findCorrespondingNextPoint(
                    point,
                    nextPts
                  );
                  const deltaOst = correspondingNextPoint
                    ? correspondingNextPoint.E - point.E
                    : point.E;
                  const deltaNord = correspondingNextPoint
                    ? correspondingNextPoint.N - point.N
                    : point.N;
                  const deltaH = correspondingNextPoint
                    ? correspondingNextPoint.H - point.H
                    : point.H;

                  return (
                    <tr key={point.name}>
                      <td className="pr-5 text-left">{point.name}</td>
                      <td className="pr-5 text-right">
                        {(deltaOst * 1000).toFixed(1)}
                      </td>
                      <td className="pr-5 text-right">
                        {(deltaNord * 1000).toFixed(1)}
                      </td>
                      <td className="text-right">
                        {(deltaH * 1000).toFixed(1)}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}

      {viewwModel === "3D" && view3DPointInMap && view3DPointNextEasting && view3DPointNextNorthing && (
        <div className=" pl-5">
          {view3DPoint ? <ThreeScene width={300} height={300} point={view3DPoint} /> : ""}
          
          {/* <p>Punktnummer: {view3DPoint}</p>
          <p>Ost: {view3DPointInMapEasting}</p>
          <p>Δ Ost: {view3DPointNextEasting && view3DPointInMapEasting ? `${((view3DPointNextEasting - view3DPointInMapEasting) * 1000).toFixed(1)} mm` : ""}</p>
          <p>Nord: {view3DPointInMapNorthing}</p>
          <p>Δ Nord: {view3DPointNextNorthing && view3DPointInMapNorthing ? `${((view3DPointNextNorthing - view3DPointInMapNorthing) * 1000).toFixed(1)} mm` : ""}</p>
          <p>Höhe: {view3DPointInMapHeight}</p>
          <p>Δ Höhe: {view3DPointNextHeight && view3DPointInMapHeight ? `${((view3DPointNextHeight - view3DPointInMapHeight) * 1000).toFixed(1)} mm` : ""}</p> */}

        </div>
      )}
    </main>
  );
};

export default Detail;
