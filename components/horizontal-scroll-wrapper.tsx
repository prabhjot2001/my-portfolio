// components/HorizontalScrollWrapper.tsx

import React, { ReactNode } from 'react';

interface HorizontalScrollWrapperProps {
  children: ReactNode;
}

const HorizontalScrollWrapper: React.FC<HorizontalScrollWrapperProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="inline-flex">{children}</div>
    </div>
  );
};

export default HorizontalScrollWrapper;
