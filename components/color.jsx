import React from 'react';

const ColoredText = ({ color, children }) => {
  const style = { color };

  return <span style={style}>{children}</span>;
};

export default ColoredText;
