export function CardMovie({movie}) {
    const {title, year, image} = movie;
  return (
    <div className="movie">
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={image} />
    </div>
  );
}
