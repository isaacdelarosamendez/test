import "./Index.scss";
import { getData } from "../../Models/Core/Widgets";
import WidgetCircular from "../../Components/Widgets/Circular/Index";
function Home() {
  const infoAnalytics = getData();

  const renderData = () => {
    let result = infoAnalytics.map((info,index) => (
      <WidgetCircular key={index}  element={info} />
    ));
    return result;
  };

  return <div className="home">{renderData()}</div>;
}

export default Home;
