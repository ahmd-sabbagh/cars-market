function GetYears(setState) {
  const currentYears = new Date().getFullYear();
  const lastYears = currentYears - 50;
  const ArrayYears = [];
  for (let i = lastYears; i <= currentYears; i++) {
    ArrayYears.push({ value: i, label: i });
  }
  setState(ArrayYears);
}

export default GetYears;
