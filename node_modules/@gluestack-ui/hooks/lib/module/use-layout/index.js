import { useState } from 'react';
export const useLayout = () => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0
  });
  return {
    onLayout: e => {
      setLayout(e.nativeEvent.layout);
    },
    layout
  };
};
//# sourceMappingURL=index.js.map