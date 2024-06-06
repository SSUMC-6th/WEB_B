import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1",
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );
      await setList((prev) => [...prev, ...res.data.results]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
