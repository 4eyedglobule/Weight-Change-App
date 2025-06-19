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
  const [weightLoss, setWeightLoss] = useState(0);
  const [chartLabels, setChartLabels] = useState([]); //e.g. [Firstlabel,secondlabel,thirdlabel]
  const [chartWeightData, setchartWeightData] = useState([]); //e.g. [300,400,100,200]
  const chartInputData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Weight",
        data: chartWeightData,
        borderColor: "rgb(1,0,0)",
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
  //Calculates total weight loss and sets weightLoss variable to it
  const calculateWeightLoss = () => {
    alert(
      "Cal Added: " +
        totalCalAdded +
        ", Cal Lost: " +
        totalCalLost +
        ", Height, Age, Weight: " +
        height +
        ", " +
        age +
        ", " +
        weight
    );
  };
  //Adds weightLoss variable as data on chart, should add an element to both data and label
  const addToChart = () => {
    alert("Should add total weight loss to chart");
  };
  //Clears chart data to empty chart
  const resetChart = () => {
    setChartLabels([]);
    setchartWeightData([]);
  };
  document.body.style.background = "rgb(218, 218, 218)";
  return (
    <div className="box">
      <div className="title">DAILY WEIGHT LOSS CALCULATOR</div>
      <div className="wrapper" style={{ display: "flex" }}>
        <div>
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
            />
          </div>
          <div
            className="calc_button_box"
            style={{ display: "flex", justifyContent: "center", flex: "1" }}
          >
            <Button
              onClick={calculateWeightLoss}
              onDisable={height < 1 || weight < 1 || age < 1}
            >
              CALCULATE WEIGHT LOSS
            </Button>
            <Button onClick={addToChart} onDisable={weightLoss == 0}>
              ADD TO CHART
            </Button>
          </div>
        </div>
        <div className="chart_box">
          <Linegraph inputData={chartInputData} />
          <Button
            onClick={addToChart}
            onDisable={chartLabels.length < 1 || chartWeightData.length < 1}
          >
            RESET CHART
          </Button>
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
