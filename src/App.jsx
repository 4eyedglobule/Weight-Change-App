import { useState } from "react";
import "./App.css";
import Intake from "./components/Intake";
import Loss from "./components/Loss";
import Estimator from "./components/Estimator";
import Button from "./components/Button";
import Linegraph from "./components/Linegraph";

function App() {
  const [totalCalAdded, setTotalCalAdded] = useState(0);
  const [totalCalLost, setTotalCalLost] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [sexConst, setSexConst] = useState(0);
  const [weightChange, setWeightChange] = useState(0);//Total weight change
  const [newWeight, setNewWeight] = useState(0);
  
  const [newWeightVal, setNewWeightVal] = useState(0);//New weight value added to chart (without calculations)
  const [chartLabels, setChartLabels] = useState([]); //e.g. [Firstlabel,secondlabel,thirdlabel]
  const [chartWeightData, setChartWeightData] = useState([]); //e.g. [300,400,100,200]
  const chartInputData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Weight (kg)",
        data: chartWeightData,
        borderColor: "rgb(0, 26, 255)",
      },
    ],
  };

  const handleCalAdded = (value) => {
    setTotalCalAdded(value);
  };
  const handleCalLost = (value) => {
    setTotalCalLost(value);
  };
  const handleHeight = (value) => {
    setHeight(value);
  };
  const handleWeight = (value) => {
    setWeight(value);
  };
  const handleAge = (value) => {
    setAge(value);
  };
  const handleSexConst = (value) => {
    setSexConst(value);
  }
  const handleNewWeightValInput = (e) => {
    setNewWeightVal(Number(e.target.value));
  };
  //Calculates total weight loss and sets weightChange variable to it
  const calculateWeightChange = () => {
    setWeightChange(parseFloat((totalCalAdded-((10*weight+6.25*height-5*age+sexConst)+totalCalLost))/7700).toFixed(2));
    setNewWeight(parseFloat((Number(weight)+parseFloat((totalCalAdded-((10*weight+6.25*height-5*age+sexConst)+totalCalLost))/7700)).toFixed(2)));
  };
  //Adds calculated weight change to chart
  const addCalcToChart = () => {
    setChartLabels((chartLabels) => [
      ...chartLabels,
      `Weight ${chartLabels.length + 1}`,
    ]);
    setChartWeightData((chartWeightData) => [...chartWeightData, newWeight]);
  }
    //Adds weightChange variable as data on chart, should add an element to both data and label
  const addInputToChart = () => {
    setChartLabels((chartLabels) => [
      ...chartLabels,
      `Weight ${chartLabels.length + 1}`,
    ]);
    setChartWeightData((chartWeightData) => [...chartWeightData, newWeightVal]);
  };
  //Clears chart data to empty chart
  const resetChart = () => {
    setChartLabels([]);
    setChartWeightData([]);
  };
  document.body.style.background = "rgb(218, 218, 218)";
  return (
    <div className="box">
      <div className="title">DAILY WEIGHT CHANGE CALCULATOR</div>
      <div className="wrapper" style={{ display: "flex" }}>
        <div className="input_box">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Intake onSendCaloriesAdded={handleCalAdded} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loss onSendCaloriesLost={handleCalLost} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Estimator
              onSendHeight={handleHeight}
              onSendAge={handleAge}
              onSendWeight={handleWeight}
              onSendSexConst={handleSexConst}
            />
          </div>
          <div
            className="calc_button_box"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={calculateWeightChange}
              onDisable={height < 1 || weight < 1 || age < 1 || sexConst == 0}
            >
              CALCULATE WEIGHT CHANGE
            </Button>
            <Button onClick={addCalcToChart} onDisable={weightChange == 0}>
              ADD TO CHART
            </Button>
            <div>Total weight change: {weightChange} kg difference</div>
            <div>New weight: {newWeight} kg</div>
          </div>
        </div>
        <div className="chart_box">
          <Linegraph inputData={chartInputData} />
          <div style={{ display: "flex" }}>
            <Button onClick={addInputToChart} onDisable={newWeightVal < 1}>
              ADD WEIGHT
            </Button>
            <div className="search-bar">
              <input
                type="Number"
                placeholder="Input weight (kg)"
                onChange={handleNewWeightValInput}
              />
            </div>
            <Button
              onClick={resetChart}
              onDisable={chartLabels.length < 1 || chartWeightData.length < 1}
            >
              RESET CHART
            </Button>
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
