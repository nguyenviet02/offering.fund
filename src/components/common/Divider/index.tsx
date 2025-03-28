import React from 'react';

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return (
    <div className={`border-border-primary w-full border-t ${className}`} />
  );
};

export default Divider;
