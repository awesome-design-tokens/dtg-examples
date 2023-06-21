import { ReactElement } from "react";

import { ComponentProps } from "../../types";

export interface HeaderProps extends ComponentProps {
  children?: ReactElement;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header className="relative flex flex-row align-center z-20 py-8 px-4 bg-base-dark text-contrast-dark border-b-8 border-b-primary-alpha/50">
      <h1 className="flex-auto m-0 text-2xl leading-tight">Dystopian Weather</h1>
      <div>{children}</div>
    </header>
  );
};

export { Header };
