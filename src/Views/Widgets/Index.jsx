import "./Index.scss";
import { getDataWidgets } from "../../Controllers/Widgets/Index";
import WidgetCircular from "../../Components/Widgets/Circular/Index";
function Index() {
  const infoAnalytics = getDataWidgets();

  const renderData = () => {
    let result = infoAnalytics.map((info, index) => (
      <WidgetCircular key={index} element={info} />
    ));
    return result;
  };

  return <div className="widgets">{renderData()}</div>;
}

export default Index;
