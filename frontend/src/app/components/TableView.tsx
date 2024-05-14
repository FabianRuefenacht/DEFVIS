import React from "react";
import { useState, useEffect } from "react";

function TableView({
  baseSessionPoints,
  nextSessionPoints,
  rowClick
}: {
  baseSessionPoints: any;
  nextSessionPoints: any;
  rowClick?: (e: number, n: number, h: number) => any;
}) {
  const [basePts, setBasePts] = useState<Point[]>([]);
  const [nextPts, setNextPts] = useState<Point[]>([]);
  const [tableSpace, setTableSpace] = useState<number | null>(0);

  useEffect(() => {
    // Funktion zur Berechnung des verfügbaren Platzes
    const calculateTableSpace = () => {
      const element = document.getElementById("tableContent");
      if (element) {
        const rect = element.getBoundingClientRect();
        const posTop = rect.top;
        const availableHeight = window.innerHeight;
        const space = availableHeight - posTop;
        return space;
      }
      return null; // Falls das Element nicht gefunden wird
    };

    // Initialen verfügbaren Platz berechnen und setzen
    const initialTableSpace = calculateTableSpace();
    setTableSpace(initialTableSpace);

    // Event-Listener hinzufügen, um den verfügbaren Platz bei Änderungen zu aktualisieren
    const handleResize = () => {
      const newTableSpace = calculateTableSpace();
      setTableSpace(newTableSpace);
    };
    window.addEventListener("resize", handleResize);

    // Aufräumen
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Leere Abhängigkeitsliste, um sicherzustellen, dass dieser Effekt nur einmal ausgeführt wird


  function findCorrespondingNextPoint(
    basePoint: Point,
    nextPoints: Point[]
  ): Point | undefined {
    return nextPoints.find((point) => point.name === basePoint.name);
  }

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
  return (
    <main
      id="tableContent"
      style={{
        height: tableSpace ? `${Math.floor(tableSpace)}px` : "200px"
      }}
      className="overflow-y-auto"
    >
      {
        basePts[0] && nextPts[0] && (
          <div className="p-4 pb-10">
            <table>
              <thead>
                <tr className="p-0">
                  <th className="p-0 pr-5 text-left">springe zu</th>
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
                        <td>
                          {point.E && point.N && rowClick && (
                            <button onClick={() => rowClick(point.E, point.N, point.H)} className="w-full bg-blue-500 text-white rounded hover:bg-blue-600">{point.name}</button>
                          )}
                        </td>
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
        )
      }
    </main >
  );
}

export default TableView;
