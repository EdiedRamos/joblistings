import { JobCard } from "../../Components";
import { data } from "../../Services/Json/data";

export const Listings = (props) => {
  return (
    <>
      {data.map((item) => (
        <JobCard key={item.company} {...item} setList={props.setList} />
      ))}
    </>
  );
};
