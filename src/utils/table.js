import colors from "../constants/table";
import i18n from "../i18n"

export const getColor = () => {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export const desc = (a, b, orderBy) => {
  if (a[orderBy] === null || b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] === null || b[orderBy] > a[orderBy]) return 1;
  return 0;
};

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

export const getSorting = (order, orderBy) => { 
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

export const formatMoney = x => {
  var lng = i18n.language;
  return parseFloat(x).toLocaleString(lng, { minimumFractionDigits: 2 }) + " €";
};
