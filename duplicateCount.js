function CountDuplicate(text) {
  const splitString = text.toLowerCase().split('').sort();
  let results = [];

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i + 1]) {
      results.push(splitString[i]);
    }
  }
  const setArray = new Set(results);
  return setArray.size;
}

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}
