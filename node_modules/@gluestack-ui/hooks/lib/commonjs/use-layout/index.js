"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayout = void 0;
var _react = require("react");
const useLayout = () => {
  const [layout, setLayout] = (0, _react.useState)({
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
exports.useLayout = useLayout;
//# sourceMappingURL=index.js.map