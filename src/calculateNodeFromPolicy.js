const filterIndices = (array, maxMinValue) => {
  let getIndices = [];
  array.filter((e, index) => {
    if (e === maxMinValue) {
      getIndices.push(index);
      return true;
    }
    return false;
  });
  return getIndices;
};

const selectValueAtRandom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const calculateNodeFromPolicy = (
  positions,
  byIndex,
  winData,
  visits,
  player,
  policy = 0
) => {
  const winDataByVisits = [];
  for (let i = 0; i < winData.length; i++) {
    winDataByVisits.push(winData[i] / (visits[i] + 1));
  }

  if (policy === 0) {
    const minData = Math.min(...visits);
    const minDataIndices = filterIndices(visits, minData);
    const minDataRandom = selectValueAtRandom(minDataIndices);
    return [positions[minDataRandom], byIndex[minDataRandom]];
  }

  if (player === 'X') {
    const minData = Math.min(...winDataByVisits);
    const minDataIndices = filterIndices(winDataByVisits, minData);
    const minDataRandom = selectValueAtRandom(minDataIndices);
    return [positions[minDataRandom], byIndex[minDataRandom]];
  }

  const maxData = Math.max(...winDataByVisits);
  const maxDataIndices = filterIndices(winDataByVisits, maxData);
  const maxDataRandom = selectValueAtRandom(maxDataIndices);

  return [positions[maxDataRandom], byIndex[maxDataRandom]];
};

export default calculateNodeFromPolicy;
