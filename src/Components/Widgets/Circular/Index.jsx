import "./Index.scss";
import { Doughnut } from "react-chartjs-2";
import {
  calculateAmount,
  calculatePerc,
} from "../../../Controllers/Widgets/Index";
const Index = ({ element }) => {
  const options = {
    cutoutPercentage: 90,
    tooltips: {
      callbacks: {},
    },
  };
  const percTablets = calculatePerc(
    element.tablets.amount,
    element.amount,
    element.isMoney
  );
  const percSmartphones = calculatePerc(
    element.smartphones.amount,
    element.amount,
    element.isMoney
  );
  const dataChart = {
    datasets: [
      {
        data: [percSmartphones, percTablets],
        backgroundColor: [element.smartphones.color, element.tablets.color],
        labels: ["Smartphones", "Tablets"],
        labelSuffix: "%",
        pointStyle: "circle",
      },
    ],
  };
  return (
    <div className="circular">
      <div className="circular-chart">
        <div className="chartContainer">
          <Doughnut
            data={dataChart}
            options={options}
            height={420}
            width={420}
          />
          <div className="chartInner">
            <div className="chartStatus">{element.name}</div>
            <div className="chartValue">
              {" "}
              {calculateAmount(element.smartphones.amount, element.isMoney)}
            </div>
          </div>
        </div>
      </div>
      <div className="circular-info">
        <div className="circular-info-tablet">
          <h3 style={{ color: element.tablets.color }}>Tablets</h3>
          <span className="circular-info-perc">{percTablets}%</span>
          <span className="circular-info-amount">
            {calculateAmount(element.tablets.amount, element.isMoney)}
          </span>
        </div>
        <div className="circular-info-smartphone">
          <h3 style={{ color: element.smartphones.color }}>Smartphones</h3>
          <span className="circular-info-perc">{percSmartphones} %</span>
          <span className="circular-info-amount">
            {calculateAmount(element.smartphones.amount, element.isMoney)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
