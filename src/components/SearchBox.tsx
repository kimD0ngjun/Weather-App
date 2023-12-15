import { useState } from "react";

import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";

import { AppDispatch } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import { click } from "../redux/ClickSlice";
import { setWeather } from "../redux/WeatherSlice";
import getWeatherData from "../api/WeatherAPI";
import { setError, clearError } from "../redux/ErrorSlice";
import { startLoading, stopLoading } from "../redux/LoadingSlice";

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  padding: 10rem;
  margin-bottom: 10rem;
  background-color: #fff;
  border-radius: 5rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
`;

const LocationIcon = styled(LuMapPin)`
  color: #555;
  width: 25rem;
  height: 25rem;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16rem;
`;

const SearchButton = styled.button`
  background-color: #3498db;
  border: none;
  border-radius: 5rem;
  padding: 8rem 16rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #267bb6;
  }

  &:active {
    transform: translateY(2rem);
    cursor: grab;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  width: 22rem;
  height: 22rem;
`;

const SearchBox = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const [locationInfo, setLocationInfo] = useState("");

  const handleClick = async () => {
    dispatch(click());
    dispatch(startLoading());

    try {
      const weatherData = await getWeatherData(locationInfo);
      dispatch(setWeather(weatherData));
      dispatch(clearError());
    } catch (error) {
      dispatch(setError());
      console.log(error);
    } finally {
      dispatch(stopLoading());
    }
  };

  const handleEnterKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      dispatch(click());

      try {
        const weatherData = await getWeatherData(locationInfo);
        dispatch(setWeather(weatherData));
        dispatch(clearError());
      } catch (error) {
        dispatch(setError());
        console.log(error);
      }
    }
  };

  const displayLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInfo(e.target.value);
  };

  return (
    <SearchBoxWrapper>
      <LocationIcon />
      <Input
        type="text"
        placeholder="Enter your location"
        onChange={displayLocation}
        onKeyPress={handleEnterKeyPress}
        value={locationInfo}
      />
      <SearchButton onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
