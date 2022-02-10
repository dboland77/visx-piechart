import Doughnut from "./components/Doughnut";
import BubbleDrag from "./components/BubbleDrag.tsx";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

function App() {
  return (
    <ParentSize>
      {({ width, height }) => {
        return (
          <>
            <Doughnut width={width} height={height} />
            <BubbleDrag width={width} height={height} />
          </>
        );
      }}
    </ParentSize>
  );
}

export default App;
