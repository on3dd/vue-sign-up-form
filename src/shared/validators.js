export const atLeastOneMustBeChecked = val => {
  return Object.keys(val).some(key => val[key]);
};
