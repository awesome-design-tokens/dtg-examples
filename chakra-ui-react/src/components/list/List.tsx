import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';

import { Weather, weather } from '@dtg-examples/common-data';

import { ComponentProps } from '../../types';
import { theme } from '../../theme';

export interface ListProps extends ComponentProps {
  name: string;
  value: string;
  items: Weather[];
  onSelectValue: (v: string) => void;
}

const List = (props: ListProps) => {
  const { clsx, /* name, */ value, items, onSelectValue } = props;

  const index = items.findIndex((item) => item.uid === value);

  return (
    <Box __css={clsx}>
      <Tabs
        orientation="vertical"
        variant="unstyled"
        index={index}
        onChange={(idx) => {
          const uid = items[idx].uid;
          onSelectValue(uid);
        }}
        flexGrow={1}
      >
        <TabList
          display="flex"
          flexFlow="column"
          justifyItems="stretch"
          justifyContent="stretch"
          w="100%"
          p={4}
          bg="gamma.300"
        >
          {items.map(({ uid, city, code, temp }) => (
            <Tab
              flexGrow={1}
              flexShrink={1}
              key={uid}
              value={uid}
              display="block"
              px={4}
              py={3}
              border={0}
              bg="secondary.default"
              color="secondary.contrast"
              cursor="pointer"
              lineHeight="base"
              textAlign="initial"
              fontSize="md"
              transitionProperty="all"
              transitionTimingFunction="ease-out"
              transitionDuration="faster"
              _hover={{
                bg: 'secondary.tint',
              }}
              _selected={{
                zIndex: 1,
                color: 'secondary.default',
                bg: 'secondary.contrast',
              }}
              _focusVisible={{
                outline: theme.focus.style,
                outlineOffset: theme.focus.outline,
              }}
              sx={{ '--focus-color': theme.colors.primary.default }}
            >
              <Box fontSize="lg">{city}</Box>
              <Box>
                {weather[code]}: {temp}°C
              </Box>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export { List };
