import React from 'react';

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return (
    <div className={`w-full border-t border-border-primary ${className}`} />
  );
};

export default Divider;
