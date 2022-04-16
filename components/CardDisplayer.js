import Card from './Card';

export default CardDisplayer = (props) => {
  const colors = props.colors;

  const onRemove = (id) => {
    props.onRemove(id);
  };

  return colors.map((data) => {
    return (
      <Card
        color={data.color}
        colorName={data.colorName}
        key={data.id}
        id={data.id}
        removeCallback={onRemove}
      />
    );
  });
};
