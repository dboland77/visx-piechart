import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const coins = [
  { symbol: "ADA", amount: 200, colour: "#0033ad", inGBP: 1.48 },
  { symbol: "SOL", amount: 5, colour: "#00ffbd", inGBP: 37.6 },
  { symbol: "BTC", amount: 0.005, colour: "#F7931A", inGBP: 37363 },
];

export default function Home() {
  const width = 400;
  const half = width / 2;
  const padSize = 8;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie 
          data={coins} 
          pieValue={data => data.amount*data.inGBP}
          outerRadius={half}
          innerRadius={half-padSize}
          padAngle = {0.01}
          >
            {pie => {
              return pie.arcs.map(arc => {
                return (
                  <g key ={arc.data.symbol}>
                    <path d={pie.path(arc)} fill={arc.data.colour}></path>
                  </g>)
              })
            }}


          </Pie>
        </Group>
      </svg>
    </main>
  );
}
