const formatTheaterSeats = (theaterSeats) => {
  return theaterSeats.reduce((acc, category) => {
    acc[category.name] = category.seatsFilled;
    return acc;
  }, {});
};

export default formatTheaterSeats;
