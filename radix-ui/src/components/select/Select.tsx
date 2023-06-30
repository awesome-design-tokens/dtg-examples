import * as Listbox from '@radix-ui/react-select';

import { css } from '@emotion/react';

export interface SelectProps {
  name: string;
  value: string;
  items: string[];
  onSelectValue: (v: string) => void;
}

const Select = (props: SelectProps) => {
  const { name, value, items, onSelectValue } = props;

  return (
    <div>
      <Listbox.Root value={value} onValueChange={onSelectValue} name={name}>
        <Listbox.Trigger
          css={css`
            display: block;
            width: 100%;

            box-sizing: border-box;
            padding: var(--awsm-space-075);
            height: calc(var(--awsm-font-size-n) + 2 * var(--awsm-space-075));

            border: var(--awsm-space-012) solid var(--awsm-color-primary);
            background: var(--awsm-color-primary);

            color: var(--awsm-color-primary-contrast);
            font-size: var(--awsm-font-size-n);
            line-height: 0;
            text-transform: uppercase;
            white-space: nowrap;

            cursor: pointer;
            transition: all ease-out var(--awsm-duration-instant);

            @media (hover: hover) {
              &:hover {
                background: var(--awsm-color-primary-tint);
              }
            }

            &:active {
              background: var(--awsm-color-primary-tone);
            }
          `}
        >
          <Listbox.Value>
            Current theme: {value.toLocaleUpperCase()}
          </Listbox.Value>
        </Listbox.Trigger>
        <Listbox.Portal>
          <Listbox.Content
            position='popper'
            css={css`
              z-index: 100;

              box-sizing: border-box;
              width: var(--radix-popper-anchor-width);
              max-height: 60vh;

              margin-top: var(--awsm-space-050);

              background: var(--awsm-color-primary-contrast);
              color: var(--awsm-color-primary);
              font-size: var(--awsm-font-size-n);

              overflow-y: auto;
              box-shadow: var(--awsm-shadow-medium);
            `}
          >
            <Listbox.Viewport
              css={css`
                padding: var(--awsm-space-025);
              `}
            >
              {items.map((value) => (
                <Listbox.Item key={value} value={value} asChild>
                  <li
                    css={css`
                      list-style: none;
                      padding: var(--awsm-space-050);

                      @media (hover: hover) {
                        &:not([data-state='checked']):hover {
                          background: var(--awsm-color-primary-tint);
                          color: var(--awsm-color-primary-contrast);
                          cursor: pointer;
                        }
                      }

                      &[data-state='checked'] {
                        background: var(--awsm-color-primary-shade);
                        color: var(--awsm-color-primary-contrast);
                        cursor: default;
                      }

                      &[data-highlighted] {
                        background: var(--awsm-color-primary-tint);
                        color: var(--awsm-color-primary-contrast);
                      }
                    `}
                  >
                    {value}
                  </li>
                </Listbox.Item>
              ))}
            </Listbox.Viewport>
          </Listbox.Content>
        </Listbox.Portal>
      </Listbox.Root>
    </div>
  );
};

export { Select };
