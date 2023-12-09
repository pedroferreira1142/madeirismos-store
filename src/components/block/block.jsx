const Block = ({ className, children, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Block;
