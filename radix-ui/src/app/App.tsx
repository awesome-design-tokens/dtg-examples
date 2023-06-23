import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { Weather, data } from '@dtg-examples/common-data';

import { Header } from '../components/header/Header';

const App = () => {
  const [items, setItems] = useState<Weather[]>([]);
  const [uid, setUid] = useState(data[0].uid);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItems(data);
    setLoading(false);
  }, []);

  const current = items.find((item) => uid === item.uid)!;

  if (loading) return <div>Loading...</div>;

  return (
    <div
      css={css`
        width: 100%;

        min-width: var(--min-width);
        max-width: var(--max-width);

        box-shadow: var(--awsm-shadow-medium);

        @media (min-width: 780px) {
          width: 60vw;
        }
      `}
    >
      <Header />

      <main
        css={css`
          position: relative;
          z-index: 10;

          display: flex;
          flex-flow: column;
          align-items: stretch;

          @media (min-width: 780px) {
            flex-flow: row;
          }
        `}
      >
        <aside
          css={css`
            flex: 1 1 40%;

            display: flex;
            flex-direction: column;
            justify-content: stretch;
          `}
        >
          <span>{current.city}</span>
        </aside>
        <div
          css={css`
            flex: 1 1 60%;

            display: flex;
            flex-direction: column;
            justify-content: stretch;
          `}
        >
          {items.map((item) => {
            return <div key={item.uid}>{item.city}</div>;
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
