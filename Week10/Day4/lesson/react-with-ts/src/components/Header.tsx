import { ReactNode, ReactElement } from "react";

import { HeadingProps } from "../types";

const Header = ({ title, subTitle }: HeadingProps): ReactElement => {
  return (
    <>
      <h1>Title: {title}</h1>
      <h2>Sub Title {subTitle}</h2>
    </>
  );
};
export default Header;
