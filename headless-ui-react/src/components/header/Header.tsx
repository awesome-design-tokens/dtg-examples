import { ReactElement } from 'react';

import { ComponentProps } from '../../types';

import styles from './header.module.css';

export interface HeaderProps extends ComponentProps {
  children?: ReactElement;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header className={styles.root}>
      <h1>Dystopian Weather</h1>
      <div>{children}</div>
    </header>
  );
};

export { Header };
