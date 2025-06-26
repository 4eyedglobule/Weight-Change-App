import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Button from "./components/Button";
import Linegraph from "./components/Linegraph";

function App() {
  const [newChartWeight, setNewChartWeight] = useState(0); //New weight value added to chart (without calculations)
  const [chartLabels, setChartLabels] = useState([]); //e.g. [Firstlabel,secondlabel,thirdlabel]
  const [chartWeightData, setChartWeightData] = useState([]); //e.g. [300,400,100,200]
  const fileExplorerRef = useRef(null);
  
  const chartInputData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Weight (kg)",
        data: chartWeightData,
        borderColor: "rgb(255, 0, 0)",
      },
    ],
  };

  const handleNewChartWeight = (e) => {
    setNewChartWeight(Number(e.target.value));
  };
  //Adds calculated weight change to chart
  const addCalcToChart = (newVal) => {
    setChartLabels((chartLabels) => [
      ...chartLabels,
      `Weight ${chartLabels.length + 1}`,
    ]);
    setChartWeightData((chartWeightData) => [...chartWeightData, newVal]);
  };
  //Adds weightChange variable as data on chart, should add an element to both data and label
  const addInputToChart = () => {
    setChartLabels((chartLabels) => [
      ...chartLabels,
      `Weight ${chartLabels.length + 1}`,
    ]);
    setChartWeightData((chartWeightData) => [...chartWeightData, newChartWeight]);
  };
  //Clears chart data to empty chart
  const resetChart = () => {
    setChartLabels([]);
    setChartWeightData([]);
  };
  //Exports chart weight data as a text file
  const exportWeightData = (weightData) => {
    const fileText = weightData.join("\n");
    const blob = new Blob([fileText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chart_data.txt";
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  //Activates input of type file. Used by button to trigger it. The input is hidden to better improve aesthetics and readability
  const activateFileExplorer = () => {
    fileExplorerRef.current.click();
  };
  //Imports a txt file and uses it for chart data
  const importWeightData = (e) => {
    resetChart();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const textArr = e.target.result.split("\n");
        const numArray = textArr.map(txt => Number(txt.trim()));
        alert(numArray);
        setChartLabels((chartLabels) => [
          ...chartLabels,
          ...numArray.map(num=>num.toString()),
        ]);
        setChartWeightData((chartWeightData) => [...chartWeightData, ...numArray]);
      }
    };
    reader.readAsText(file);
  };
  document.body.style.background = "rgb(0, 24, 92)";
  return (
    <div className="box">
      <div className="title">DAILY WEIGHT CHANGE TRACKER</div>
      <div className="wrapper" style={{ display: "flex" }}>
        <div>
          <Calculator getNewWeight={(newVal) => addCalcToChart(newVal)}/>
        </div>
        <div className="chart_box">
          <Linegraph inputData={chartInputData} />
          <div style={{ display: "flex" }}>
            <Button
              onClick={addInputToChart}
              onDisable={newChartWeight < 1}
              textSize="15px"
            >
              ADD VALUE
            </Button>
            <div className="search-bar">
              <input
                type="Number"
                placeholder="Input weight (kg)"
                onChange={handleNewChartWeight}
              />
            </div>
            <Button
              onClick={resetChart}
              onDisable={chartLabels.length < 1 || chartWeightData.length < 1}
              textSize="15px"
            >
              RESET
            </Button>
            <Button
              onClick={() => exportWeightData(chartWeightData)}
              onDisable={chartLabels.length < 1 || chartWeightData.length < 1}
              textSize="15px"
            >
              DOWNLOAD
            </Button>
            <Button onClick={activateFileExplorer} textSize="15px">
              IMPORT
            </Button>
            <div>
              {/*Opens file explorer. Hidden because default input field is ugly and non-ergonomic*/}
              <input 
                type="file"
                accept=".txt"
                onChange={importWeightData}
                ref={fileExplorerRef}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        THIS APPLICATION IS NOT A COMPLETE AND TOTAL GUIDELINE FOR WEIGHT LOSS.
        MANY FACTORS ARE NOT INCLUDED, SUCH AS FOOD TYPE EATEN, METABOLISM, ETC.
        BE SURE TO CONSULT OTHER SOURCES OF INFORMATION.
      </div>
    </div>
  );
}

export default App;
