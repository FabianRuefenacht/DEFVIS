import React from "react";

function CalculateDisplacement(props: any) {
  // Direkter Zugriff auf props.base
  const { base } = props;
  
  // Verwendung von base
  return (
    <main className=" row-span-1 col-span-3">
      <div>{base}</div>
    </main>
  );
}

export default CalculateDisplacement;
