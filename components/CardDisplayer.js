import ColorCard from './ColorCard';

export default CardDisplayer = (props) => {
  const colors = props.colors;

  const onRemove = (id) => {
    props.onRemove(id);
  };

  return colors.map((data) => {
    return (
      <ColorCard
        color={data.color}
        colorName={data.colorName}
        key={data.id}
        id={data.id}
        removeCallback={onRemove}
      />
    );
  });
};
