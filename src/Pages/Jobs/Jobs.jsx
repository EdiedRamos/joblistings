import { useState } from "react";
import { Header, Listings, Filter } from "../../Layouts";

export const Jobs = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <Header />
      <Filter list={list} setList={setList} />
      <Listings setList={setList} />
    </>
  );
};
