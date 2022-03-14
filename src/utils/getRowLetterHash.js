const getRowLetterHash = (theaterSeats) => {
  const { currentLetter, ...hash } = theaterSeats.reduce(
    (acc, category) => {
      acc[category.name] = category.seatsFilled.map((_row, index) => {
        if (index !== 0) {
          acc.currentLetter = acc.currentLetter + 1;
        }
        return String.fromCharCode(acc.currentLetter);
      });
      acc.currentLetter = acc.currentLetter + 1;
      return acc;
    },
    { currentLetter: 65 }
  );

  return hash;
};

export default getRowLetterHash;
