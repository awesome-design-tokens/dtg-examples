export interface PictureProps {
  src: string;
  alt?: string;
}

const Picture = (props: PictureProps) => {
  const { src, alt = 'Weather widget illustration' } = props;

  return (
    <figure>
      <img src={src} alt={alt} width="100%" />
    </figure>
  );
};

export { Picture };
