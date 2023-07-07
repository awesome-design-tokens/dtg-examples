import { KeyboardEvent, useState } from 'react';

import { Box, Button, Heading, Input } from '@chakra-ui/react';

import { ComponentProps } from '../../types';

export interface ReportProps extends ComponentProps {
  status: string;
  onReport: (data: string) => void;
}

const Report = (props: ReportProps) => {
  const { clsx, status, onReport } = props;

  const [value, setValue] = useState<string>('');

  const handleClick = () => {
    onReport(value);
    setValue('');
  };

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();

      onReport(value);
      setValue('');
    }
  };

  return (
    <Box as="section" p={4} bg="base.dark" color="text.regular" __css={clsx}>
      <Heading
        as="h2"
        fontSize="xl"
        lineHeight="short"
        m={0}
        mb={2}
        color="text.strong"
      >
        Anomaly Status
      </Heading>
      <Heading as="h3" fontSize="l" lineHeight="short" m={0}>
        {status}
      </Heading>

      <Box
        as="fieldset"
        m={0}
        mt={4}
        p={4}
        bg="gamma.300"
        border={0.5}
        borderColor="primary.alpha50"
      >
        <div>
          <Input
            variant="outline"
            value={value}
            placeholder="Describe situation"
            onChange={(e) => setValue(e.target.value.trim())}
            boxSizing="border-box"
            p={3}
            height="formBase"
            border={0.5}
            borderColor="gamma.400"
            borderRadius={0}
            bg="gamma.850"
            color="gamma.150"
            fontSize="md"
            lineHeight="reset"
            transitionDuration="instant"
            _hover={{}}
            _focus={{
              bg: 'gamma.900',
            }}
          />
        </div>
        <div>
          <Button
            variant="solid"
            onClick={handleClick}
            onKeyUp={handleKey}
            height="formBase"
            width="100%"
            mt={4}
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
            transitionDuration="faster"
            _hover={{
              bg: 'primary.tint',
            }}
            _active={{
              bg: 'primary.tone',
            }}
          >
            Report Anomaly
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export { Report };
