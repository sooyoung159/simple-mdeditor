import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <main className="mainLayout">{children}</main>;
};

MainLayout.Column = ({ children }: Props) => {
  return <div className="mainLayout__col">{children}</div>;
};

export default MainLayout;
