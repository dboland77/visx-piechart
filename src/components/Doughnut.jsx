import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const coins = [
  { symbol: "ADA", amount: 200, colour: "#0033ad", inGBP: 1.48 },
  { symbol: "SOL", amount: 5, colour: "#00ffbd", inGBP: 37.6 },
  { symbol: "BTC", amount: 0.005, colour: "#F7931A", inGBP: 40000 },
];

export default function Doughnut() {
  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={coins}
            pieValue={(data) => data.amount * data.inGBP}
            outerRadius={half}
            innerRadius={({ data }) => {
              const padSize = active && active.symbol === data.symbol ? 12 : 8;
              return half - padSize;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                    onMouseEnter={() => {
                      setActive(arc.data);
                    }}
                    onMouseLeave={() => {
                      setActive(null);
                    }}
                  >
                    <path d={pie.path(arc)} fill={arc.data.colour}></path>
                  </g>
                );
              });
            }}
          </Pie>
          {active ? (
            <>
              <Text textAnchor="middle" fill="#000" fontSize={40} dy={-20}>
                {`£${Math.floor(active.amount * active.inGBP)}`}
              </Text>
              <Text
                textAnchor="middle"
                fill={active.colour}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#000" fontSize={40} dy={-20}>
                {`£${Math.floor(
                  coins.reduce((acc, coin) => acc + coin.amount * coin.inGBP, 0)
                )}`}
              </Text>
              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`${coins.length} Assets`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
}
