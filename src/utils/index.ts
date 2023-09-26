import axios from "axios";
const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
export { fetchData };
