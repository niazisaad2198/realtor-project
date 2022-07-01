import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      "X-RapidAPI-Key": "648ffb6144msh01ba65ff19f9d96p14d165jsn350bc995d9b3",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data
};
