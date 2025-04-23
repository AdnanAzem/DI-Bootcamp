
import { ReactNode } from "react";
import { ListProps } from "../types";

export const List = <T,>({ items, renderItem }: ListProps<T>) : ReactNode => {
  return (
    <>
      {" "}
      <ul>
        {items && items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </>
  );
};

