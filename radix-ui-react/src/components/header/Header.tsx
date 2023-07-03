import { ReactElement } from 'react';

import { css } from '@emotion/react';

import { ComponentProps } from '../../types';

export interface HeaderProps extends ComponentProps {
  children?: ReactElement;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header
      css={css`
        position: relative;
        z-index: 20;

        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        padding: var(--awsm-space-200) var(--awsm-space-100);
        border-bottom: var(--awsm-space-050) solid rgba(var(--awsm-color-primary-rgb), 0.5);

        background-color: var(--awsm-color-base-dark);
        color: var(--awsm-color-contrast-dark);
      `}
    >
      <h1
        css={css`
          flex: 1 1 auto;

          margin: 0;
        `}
      >
        Dystopian Weather
      </h1>
      <div>{children}</div>
    </header>
  );
};

export { Header };
