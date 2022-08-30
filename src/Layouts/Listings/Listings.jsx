import { JobCard } from "../../Components";
import { data } from "../../Services/Json/data";

export const Listings = (props) => {
  const handleFilter = () => {
    return props.list.length === 0
      ? data
      : data.filter(
          (info) =>
            info.languages.some((key) => props.list.includes(key)) ||
            info.tools.some((key) => props.list.includes(key))
        );
  };
  return (
    <>
      {handleFilter().map((item) => (
        <JobCard key={item.company} {...item} setList={props.setList} />
      ))}
    </>
  );
};
