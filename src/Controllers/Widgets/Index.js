import { getData } from "../../Models/Core/Widgets";
const calculateAmount = (currentValue, isMoney) => {
  if (isMoney) {
    return new Intl.NumberFormat("es-MX").format(currentValue) + " Є";
  } else {
    return currentValue
      .toFixed(3)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
};
const calculatePerc = (currentValue, total, isMoney) => {
  const value = (currentValue / total) * 100;
  return value;
};
const getDataWidgets = () => {
  return getData();
};
export { calculateAmount, calculatePerc, getDataWidgets };
