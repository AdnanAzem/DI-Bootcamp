import { ReactElement, ReactNode } from "react";

type ListProps<T> = {
  items: T[];
};

const List = <T,>({ items }: ListProps<T>): ReactElement => {
  return (
    <>
      <h2>List Of Generic Items</h2>
      {items &&
        items.map((item, indx) => {
          return <div key={indx}>{item as ReactNode}</div>;
        })}
    </>
  );
};
export default List;
