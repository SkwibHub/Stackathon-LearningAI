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

const calculateNodeFromPolicy = (positions, byIndex, winData, visits) => {
  console.log('-- FILTERED POSITIONS BY POSITIONS ', positions);
  console.log('-- FILTERED POSITIONS BY INDEX ', byIndex);
  console.log('-- FILTERED POSITIONS BY DATA ', winData);
  console.log('-- FILTERED POSITIONS BY VISIT ', visits);
  console.log('-- MAX OF DATA: ', Math.max(...winData));
  console.log('-- MIN OF DATA: ', Math.min(...winData));

  const maxData = Math.max(...winData);
  const maxDataIndices = filterIndices(winData, maxData);
  const maxDataRandom = selectValueAtRandom(maxDataIndices);

  console.log('--MAX VALUE WITH INDEX, ', maxDataIndices);
  console.log('--MAX VALUE WITH INDEX RANDOM, ', maxDataRandom);

  console.log('--MAX VALUE - POSITION, ', positions[maxDataRandom]);
  console.log('--MAX VALUE - BY INDEX, ', byIndex[maxDataRandom]);
  console.log('--MAX VALUE - ENTIRE INDEX, ', byIndex);

  // return [positions[0], -1];
  return [positions[maxDataRandom], byIndex[maxDataRandom]];
};

export default calculateNodeFromPolicy;
