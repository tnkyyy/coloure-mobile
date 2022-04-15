import Card from './Card';

export default CardDisplayer = (props) => {
  const colors = props.colors;
  return colors.map((data) => {
    return <Card color={data.color} colorName={data.colorName} key={data.id} />;
  });
};
