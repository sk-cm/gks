import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import useLocalStorage from "../../hooks/useLocalStorage";

import moviePhoto from "../../images/movie.jpg";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation]);

import "../../styles/seating.css";
import Seat from "../../components/Seating/Seat";
import getRowLetterHash from "../../utils/getRowLetterHash";

import theaterSeats from "../../../theaterSeatsData";

export default function Seating() {
  const [requiredSeats, setRequiredSeats] = useLocalStorage("requiredSeats", 1);
  const [selectedSeats, setSelectedSeats] = useLocalStorage(
    "selectedSeats",
    []
  );
  const [selectedCategory, setSelectedCategory] = useLocalStorage(
    "selectedCategory",
    ""
  );
  const [totalPrice, setTotalPrice] = useLocalStorage("totalPrice", 0);

  //! use useMemo here?
  // const rowLetterHash = getRowLetterHash(theaterSeats);
  const [rowLetterHash, _setRowLetterHash] = useState(() =>
    getRowLetterHash(theaterSeats)
  );

  const getVariantClass = (seatFilled, rowLetter, seatCoordinate) => {
    let variantClass = "";
    if (seatFilled) variantClass += " unavailable";

    if (!seatFilled) variantClass += " available";
    if (rowLetter === "A") variantClass += " vip";
    if (selectedSeats.includes(seatCoordinate)) variantClass += " selected";
    return variantClass;
  };

  const toggleSeatSelect = (
    seatFilled,
    seatCoordinate,
    category,
    price,
    row,
    seatIndex
  ) => {
    // const isVip = seatCoordinate[0] === "A";

    const isSelected = selectedSeats.includes(seatCoordinate);

    const requiredSeatsSelected = selectedSeats.length === requiredSeats;

    const isSameCategory = selectedCategory === category;

    const autoCompleteRow = row.slice(seatIndex, seatIndex + requiredSeats);

    let autoCompletePossible =
      autoCompleteRow.length === requiredSeats &&
      requiredSeats !== 1 &&
      !autoCompleteRow.includes(true);

    const adjustedPrice = seatCoordinate[0] === "A" ? price + 200 : price;

    if (!seatFilled && !isSelected) {
      if (requiredSeatsSelected && autoCompletePossible) {
        // console.log("--debug- it ran");
        const seatCoordinates = autoCompleteRow.map(
          (_seat, index) =>
            seatCoordinate[0] + (+seatCoordinate.substring(1) + index)
        );
        setSelectedSeats(seatCoordinates);
        setSelectedCategory(category);
        // setTotalPrice(price * requiredSeats);
        setTotalPrice(adjustedPrice * requiredSeats);
      } else if (requiredSeatsSelected && !autoCompletePossible) {
        setSelectedSeats([seatCoordinate]);
        setSelectedCategory(category);
        // setTotalPrice(price);
        setTotalPrice(adjustedPrice);
      } else if (!isSameCategory && autoCompletePossible) {
        const seatCoordinates = autoCompleteRow.map(
          (_seat, index) =>
            seatCoordinate[0] + (+seatCoordinate.substring(1) + index)
        );
        setSelectedSeats(seatCoordinates);
        setSelectedCategory(category);
        // setTotalPrice(price * requiredSeats);
        setTotalPrice(adjustedPrice * requiredSeats);
      } else if (!isSameCategory && !autoCompletePossible) {
        setSelectedSeats([seatCoordinate]);
        setSelectedCategory(category);
        // setTotalPrice(price);
        setTotalPrice(adjustedPrice);
      } else {
        setSelectedSeats((prevSeats) => [...prevSeats, seatCoordinate]);
        setSelectedCategory(category);
        // setTotalPrice((prevTotal) => prevTotal + price);
        setTotalPrice((prevTotal) => prevTotal + adjustedPrice);
      }
    } else if (isSelected) {
      // setTotalPrice((prevTotal) => prevTotal - price);
      setTotalPrice((prevTotal) => prevTotal - adjustedPrice);
      setSelectedSeats((prevSeats) =>
        prevSeats.filter((seat) => seat !== seatCoordinate)
      );
      if (selectedSeats.length === 1) {
        setSelectedCategory("");
      }
    }
  };

  return (
    <div className="seating-wrapper">
      <Header />
      <div className="main-content">
        <div className="movie-ticket-wrapper">
          <div className="movie-section">
            <div className="section">
              <img
                className="movie-section__photo"
                src={moviePhoto}
                alt=""
                srcSet=""
              />
              <div className="movie-section__details">
                <div className="movie-headline">
                  <div className="movie-genre">ACTION / SCI-FI</div>
                  <div className="movie-title">Inception</div>
                </div>
                <div className="movie-ticket-info">
                  <div className="movie-showtime">
                    <div className="movie-showtime__header">SHOWTIME</div>
                    <div className="movie-showtime__details">
                      <span className="movie-showtime__cinema">
                        Abc Cinema Palace &#10072;
                      </span>
                      <span className="movie-showtime__time">
                        <span className="date"> Mar 8, 6:00pm</span>
                      </span>
                    </div>
                    <button className="btn btn--sm btn--outlined btn--rounded btn--blue movie-showtime__btn">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              {/* adding here */}
              <div className="movie-seats-required">
                <div className="seats-required__header">SEATS REQUIRED</div>
                <div className="seats-required__content">
                  <div className="seats-required-desc">
                    Select number of seats required
                  </div>
                  <Swiper
                    slidesPerView={5}
                    navigation={true}
                    spaceBetween={1}
                    pagination={{ clickable: true }}
                    className="seats-carousel"
                  >
                    {Array.from(Array(10).keys()).map((n) => (
                      <SwiperSlide
                        onClick={() => {
                          setSelectedSeats([]);
                          setTotalPrice(0);
                          setRequiredSeats(n + 1);
                          setSelectedCategory("");
                        }}
                        key={"no" + n}
                        className={
                          requiredSeats === n + 1
                            ? "seat-slide active"
                            : "seat-slide"
                        }
                      >
                        {n + 1}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {/* till here */}
            </div>
          </div>
        </div>
        <div className="seating">
          <div className="seating__header">
            <div className="seat-legends">
              <div className="legend">
                <Seat variant="vip" seatNo={1} />
                <div className="legend__name">
                  VIP Seat <span>(extra ₹200)</span>
                </div>
              </div>
              <div className="legend">
                <Seat variant="regular" seatNo={2} />
                <div className="legend__name">Regular Seat</div>
              </div>
              <div className="seat-legend-separator">{""}</div>
              <div className="legend">
                <Seat variant="unavailable" seatNo={3} />
                <div className="legend__name">Unavailable</div>
              </div>
              <div className="legend">
                <Seat variant="" seatNo={4} />
                <div className="legend__name">Available</div>
              </div>
              <div className="legend">
                <Seat variant="selected" seatNo={5} />
                <div className="legend__name">Selected</div>
              </div>
            </div>
          </div>
          <div className="seating__content">
            <div className="theater">
              {theaterSeats.map((category) => {
                return (
                  <div className="category" key={category.name}>
                    <div className="category__header">
                      {`${category.name} - ₹ ${category.price}`}
                    </div>
                    <div className="category__seats">
                      {category.seatsFilled.map((row, rowIndex) => {
                        const rowLetter =
                          rowLetterHash[category.name][rowIndex];

                        return (
                          <div className="row" key={rowLetter}>
                            <div className="row-letter">{rowLetter}</div>
                            <div className="seat-row">
                              {row.map((seatFilled, seatIndex) => {
                                const seatNo = 15 - row.length + seatIndex + 1;
                                const seatCoordinate = rowLetter + seatNo;
                                return (
                                  <Seat
                                    variant={getVariantClass(
                                      seatFilled,
                                      rowLetter,
                                      seatCoordinate
                                    )}
                                    seatNo={seatNo}
                                    tooltip={seatCoordinate}
                                    key={seatCoordinate}
                                    customClick={() =>
                                      toggleSeatSelect(
                                        seatFilled,
                                        seatCoordinate,
                                        category.name,
                                        category.price,
                                        row,
                                        seatIndex
                                      )
                                    }
                                  />
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          selectedSeats.length > 0 ? "seats-footer active" : "seats-footer"
        }
      >
        <div className="footer-content">
          <div className="seat-details">
            <div className="seat-detail-wrapper">
              <div className="seat-detail__title">
                Your Seats{" "}
                <span className="light">({selectedSeats.length})</span>
              </div>
              <div className="seat-detail__numbers">
                {selectedSeats.map((seat, index) => (
                  <span key={"seatno" + index} className="seat-number">
                    {seat}
                    {index !== selectedSeats.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
            <div className="seat-detail-wrapper">
              <div className="seat-detail__title">Total Price</div>
              <div className="seat-detail__price">{`₹ ${totalPrice}`}</div>
            </div>
          </div>
          <div className="footer-action-wrapper">
            <button
              className={
                requiredSeats === selectedSeats.length
                  ? "btn btn--sm btn--rounded btn--blue footer-action__btn"
                  : "btn btn--disabled btn--sm btn--rounded btn--blue footer-action__btn"
              }
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
