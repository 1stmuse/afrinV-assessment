import axios from "axios";

export const fetcher = async (url: string) => {
  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error();
  }

  return response.data;
};
