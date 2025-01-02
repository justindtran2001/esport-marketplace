import apiClient from "@/data/api-client";
import { Character } from "@/data/models";
import { useEffect, useState } from "react";

const useCharacters = (): [Character[], boolean] => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    const resp = await apiClient?.get("/characters");
    if (resp?.statusText === "OK") {
      setCharacters(resp.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchCharacters();
  }, []);

  return [characters, loading];
};

export default useCharacters;
