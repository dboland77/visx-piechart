import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const coins = [
  { symbol: "ADA", amount: 200, colour: "#0033ad", inGBP: 1.48 },
  { symbol: "SOL", amount: 5, colour: "#00ffbd", inGBP: 37.6 },
  { symbol: "BTC", amount: 0.005, colour: "#0033ad", inGBP: 37363 },
];

export default function Home() {
  const width = 400;
  const half = width / 2;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie 
          data={coins} 
          pieValue={data => data.amount*data.inGBP}
          outerRadius={half}
          ></Pie>
        </Group>
      </svg>
    </main>
  );
}
