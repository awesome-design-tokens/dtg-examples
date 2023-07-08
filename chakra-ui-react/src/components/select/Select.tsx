import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';

import { theme } from '../../theme';

export interface SelectProps {
  name: string;
  value: string;
  items: string[];
  onSelectValue: (v: string) => void;
}

const Select = (props: SelectProps) => {
  const { /* name, */ value, items, onSelectValue } = props;

  return (
    <Menu matchWidth gutter={0}>
      <MenuButton
        as={Button}
        variant="solid"
        height="formBase"
        width="100%"
        p={3}
        color="primary.contrast"
        bg="primary.default"
        border={0.5}
        borderColor="primary.default"
        borderRadius={0}
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontSize="md"
        lineHeight="reset"
        cursor="pointer"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        transitionDuration="faster"
        _hover={{
          bg: 'primary.tint',
        }}
        _active={{
          bg: 'primary.tone',
        }}
        _focusVisible={{
          outline: 'var(--focus-style)',
          outlineOffset: 1,
        }}
      >
        Current theme: {value.toLocaleUpperCase()}
      </MenuButton>
      <MenuList
        boxSizing="border-box"
        w="100%"
        minW="8"
        maxH="60vh"
        overflowY="auto"
        p={1}
        mt={2}
        bg="primary.contrast"
        color="primary.default"
        boxShadow="md"
        borderRadius={0}
      >
        <MenuOptionGroup
          type="radio"
          value={value}
          onChange={(v) => {
            onSelectValue(v as string);
          }}
        >
          {items.map((value) => (
            <MenuItemOption
              icon={null}
              key={value}
              value={value}
              p={2}
              fontSize="md"
              lineHeight="base"
              border={0}
              bg="none"
              transitionProperty="all"
              transitionTimingFunction="ease-out"
              transitionDuration="faster"
              _hover={{
                bg: 'primary.tint',
                color: 'primary.contrast',
                cursor: 'pointer',
              }}
              _checked={{
                bg: 'primary.shade',
                color: 'primary.contrast',
                cursor: 'default',
              }}
              _focus={{
                bg: 'primary.tint',
                color: 'primary.contrast',
              }}
              _focusVisible={{
                outline: theme.focus.style,
                outlineOffset: theme.focus.outline,
              }}
            >
              {value}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export { Select };
