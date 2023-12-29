import axios from "axios";
import { useEffect, useState } from "react";

export const useData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      let ignore = false;
      async function getData() {
        const response = await axios.get(url);
        if (!ignore) {
          setData(response.data);
        }
      }
      getData();
      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return data;
};
