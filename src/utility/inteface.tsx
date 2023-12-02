export interface ClickProps {
  isClicked: boolean;
}

export interface UpdateProps {
  isUpdated: boolean;
}

export interface WeatherDataForm {
  city: string;
  weather: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}
