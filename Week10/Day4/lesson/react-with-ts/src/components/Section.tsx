import { ReactElement, ReactNode } from "react";

type SectionProps = {
    children: ReactNode
    content: string
}

const Section = ({ children,content }: SectionProps) => {
  return (
    <>
      {children}
      <h2>{content}</h2>
    </>
  );
};
export default Section;
