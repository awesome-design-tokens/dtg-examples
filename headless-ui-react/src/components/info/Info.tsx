export interface InfoProps {
  city: string;
  sky: string;
  temp: number;
}

const Info = (props: InfoProps) => {
  const { city, sky, temp } = props;

  return (
    <section>
      <h2>{city}</h2>
      <h3>
        {sky}: {temp}°C
      </h3>
    </section>
  );
};

export { Info };
