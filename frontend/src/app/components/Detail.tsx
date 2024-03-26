import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Detail({ baseSessionPoints, nextSessionPoints }: { baseSessionPoints: any, nextSessionPoints: any }) {
  const [viewwModel, setViewwModel] = useState("Text");
  const [basePts, setBasePts] = useState([]);
  const [nextPts, setNextPts] = useState([]);
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

  function findCorrespondingNextPoint(basePoint: Point, nextPoints: Point[]): Point | undefined {
    return nextPoints.find(point => point.name === basePoint.name);
  }



  return (
    <main>
      <button onClick={() => setViewwModel("Text")} className='pl-5'>Text</button>
      <button onClick={() => setViewwModel("ZRA")} className='pl-5'>ZRA</button>
      <button onClick={() => setViewwModel("3D")} className='pl-5'>3D</button>
      {viewwModel === "Text" && basePts[0] && nextPts[0] &&
        <div className="overflow-y-auto h-full p-4 pb-10">
          <table>
            <thead>
              <tr className='p-0'>
                <th className='p-0 pr-5 text-left'>
                  Punkt
                </th>
                <th className='p-0 pr-5 text-left'>
                  ΔE [mm]
                </th>
                <th className='p-0 pr-5 text-left'>
                  ΔN [mm]
                </th>
                <th className='p-0 text-left'>
                  ΔH [mm]
                </th>
              </tr>
            </thead>
            <tbody>
              {basePts.map((point: { "name": string, "E": number, "N": number, "H": number }) => {
                const correspondingNextPoint = findCorrespondingNextPoint(point, nextPts)
                const deltaOst = correspondingNextPoint ? correspondingNextPoint.E - point.E : point.E;
                const deltaNord = correspondingNextPoint ? correspondingNextPoint.N - point.N : point.N;
                const deltaH = correspondingNextPoint ? correspondingNextPoint.H - point.H : point.H;

                return (
                  <tr key={point.name}>
                    <td className='pr-5 text-left'>{point.name}</td>
                    <td className='pr-5 text-right'>{(deltaOst * 1000).toFixed(1)}</td>
                    <td className='pr-5 text-right'>{(deltaNord * 1000).toFixed(1)}</td>
                    <td className='text-right'>{(deltaH * 1000).toFixed(1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      }


    </main>
  )
}

export default Detail