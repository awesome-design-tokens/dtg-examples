import { ReactElement } from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import { ComponentProps } from '../../types';

export interface HeaderProps extends ComponentProps {
  children?: ReactElement;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <Flex
      as="header"
      alignItems="center"
      pos="relative"
      zIndex={20}
      px={4}
      py={8}
      bg="base.dark"
      color="contrast.dark"
      borderBottom={2}
      borderColor="primary.alpha50"
    >
      <Heading as="h1" fontSize="2xl" lineHeight="short" m={0} flex="1 1 auto">
        Dystopian Weather
      </Heading>
      <div>{children}</div>
    </Flex>
  );
};

export { Header };
