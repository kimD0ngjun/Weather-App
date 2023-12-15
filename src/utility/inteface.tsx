export interface ClickProps {
  isClicked: boolean;
}

export interface UpdateProps {
  isUpdated: boolean;
}

export interface ErrorData {
  error: boolean;
}

export interface WeatherDataForm {
  location: string;
  weather: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export interface ClickedData {
  click: boolean;
  update: boolean;
}
