import axios from "axios";
import key from "./ApiKey";

const city = "YourCity";
const requestURL = `${
  import.meta.env.VITE_APP_BASE_URL
}?q=${city}&units=metric&appid=${key}`;
