function countOccurrences(str, char) {
  const strArray = str.split("");

  let charCount = 0;

  for (let index = 0; index < strArray.length; index++) {
    const element = strArray[index];

    if (element === char) {
      charCount = charCount + 1;
    }
  }

  return charCount;
}

module.exports = countOccurrences;
