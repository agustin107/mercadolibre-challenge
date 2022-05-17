import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import { List } from "../components/List";
import { useFetch } from "../hooks/useFetch";

export function Search() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const { data } = useFetch({ url: `/sites/MLA/search?q=${searchValue}&offset=${page * 10}&limit=10` });

  function handleNextClick() {
    setPage(prevValue => prevValue + 1);
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <List data={data.results} />
      <button onClick={handleNextClick}>
        Next
      </button>
    </div>
  )
}