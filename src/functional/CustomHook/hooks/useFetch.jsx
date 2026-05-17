import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useFetch(keyword, page, search) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const skip = (page - 1) * 9;

        let url = search
          ? `https://dummyjson.com/${keyword}/search?q=${search}`
          : `https://dummyjson.com/${keyword}?limit=9&skip=${skip}`;

        const response = await fetch(url);
        const result = await response.json();

        setData(
          result.products ||
            result.users ||
            result.posts ||
            result.recipes ||
            [],
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword, page, search]);

  return { data, loading };
}
