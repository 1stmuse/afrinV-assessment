import axios from "axios";

export const fetcher = async (func: string) => {
  const response = await axios.get(
    `https://www.alphavantage.co/query?function=${func}&symbol=IBM&apikey=demo`
  );

  if (response.status !== 200) {
    throw new Error();
  }

  return response.data;
};
