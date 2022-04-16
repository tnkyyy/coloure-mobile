import ColorCard from './ColorCard';

export const SchemesDisplayer = (props) => {
  const schemes = props.schemes;

  return schemes.map((data) => {
    return <ColorCard />;
  });
};
