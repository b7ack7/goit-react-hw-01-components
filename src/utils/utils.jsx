export const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export const getFlexBasis = ({length}) => {
  return `calc(100%/${length})`;
}

export const getBgColorIsOnline = ({isOnline}) => {
  return isOnline ? "green" : "red";
}