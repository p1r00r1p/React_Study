export const ColoredMessage = (props) => {
  console.log(props);
  //Propsを分割代入
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export const Spacer = ({ size, axis, style = {}, ...delegated }) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style
      }}
      {...delegated}
    />
  );
};
