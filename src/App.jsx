import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Navbar/Nav";
import ChartOne from "./Charts/PiChart";
import VerticalBar from "./Charts/Vertical";
import BarChart from "./Charts/Bubble";
import DataTable from "./Models/DataTable";
import axios from "axios";
import formlabel from "./Models/FormLabel";
import ScaterChart from "./Charts/ScatterChart";
import ScatterPlot from "./Charts/ScatterChart";
import DoughnutChart from "./Charts/PiChart";
import Donuts from "./Charts/Donuts";
// import { useDispatch } from "react-redux";
// import { userInput } from "./Redux/ActionCreator";

function App() {
  // const dispatch = useDispatch();

  const [data, setData] = useState(null);

  // const data = {
  //   products: {
  //     administrative: -0.9971,
  //     product_duration: -0.471,
  //     informational: -0.745,
  //     productQuality: Number(Math.random().toFixed(4)),
  //     customerService: Number(Math.random().toFixed(4)),
  //     deliverySpeed: Number(Math.random().toFixed(4)),
  //     priceValue: Number(Math.random().toFixed(4)),
  //     websiteEaseOfUse: Number(Math.random().toFixed(4)),
  //     productVariety: Number(Math.random().toFixed(4)),
  //     paymentOptions: Number(Math.random().toFixed(4)),
  //     orderTracking: Number(Math.random().toFixed(4)),
  //     returnPolicy: Number(Math.random().toFixed(4)),
  //     security: Number(Math.random().toFixed(4)),
  //     userInterface: Number(Math.random().toFixed(4)),
  //     productInformation: Number(Math.random().toFixed(4)),
  //     websiteFeatures: Number(Math.random().toFixed(4)),
  //     customerReviews: Number(Math.random().toFixed(4)),
  //     promotions: Number(Math.random().toFixed(4)),
  //     shippingOptions: Number(Math.random().toFixed(4)),
  //     websitePerformance: Number(Math.random().toFixed(4)),
  //     productAvailability: Number(Math.random().toFixed(4)),
  //     customerCommunication: Number(Math.random().toFixed(4)),
  //     overallSatisfaction: Number(Math.random().toFixed(4)),
  //   },
  // };

  useEffect(() => {
    console.log(formlabel, "forms");
    setData(formlabel);
    const userInputData = JSON.stringify({
      user_input: [
        -0.990128076, -0.996658527, -0.52048939, -0.491697374, 0.250488013,
        -0.460348834, -0.799208869, -1.35836211, -0.529409168, -0.336019957, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1,
      ],
    });
    console.log(userInputData, "userinput");
    //     dispatch(
    //       userInput(userInputData, (res) => {
    //         if(res.status === 200){
    // console.log(res,'responseeee');
    //         }

    //       })
    //     )

    // axios
    // .post("http://localhost:8000/api/predict/", JSON.stringify(userInputData), {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then((response) => {
    //   console.log("response", response);
    // })
    // .catch((error) => {
    //   console.error("Error making the request:", error);
    // });
  }, []);

  return (
    <>
      {/* <Nav /> */}
      {/* <ChartOne /> */}
      {/* <DoughnutChart /> */}
      <div className="main">
        {/* <Donuts /> */}
        <ChartOne />
        <div className="section">
          <ScaterChart />
          <BarChart/>
        </div>
      </div>
      <div className="table-main">
        <h1 className="title">Web analytics predictive model</h1>
        <br />
        <DataTable data={data} />
      </div>
    </>
  );
}

export default App;
