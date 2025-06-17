// src/hooks/useFuseSearch.js
import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";

export function useFuseSearch(data, { keys, threshold = 0.3, limit = 5 }) {
  const fuse = useMemo(
    () => new Fuse(data, { keys, threshold }),
    // fuse only needs to recreate if data, keys array identity, or threshold change
    [data, JSON.stringify(keys), threshold]
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const items = fuse
        .search(searchTerm)
        .map((r) => r.item)
        .slice(0, limit);
      setResults(items);
    } else {
      setResults([]);
    }
  }, [searchTerm, limit]); // only re-run when searchTerm or limit change

  return { results, setSearchTerm };
}
