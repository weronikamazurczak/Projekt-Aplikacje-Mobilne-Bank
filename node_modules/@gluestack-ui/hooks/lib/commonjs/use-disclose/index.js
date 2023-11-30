"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDisclose = useDisclose;
var _react = require("react");
function useDisclose(initState) {
  const [isOpen, setIsOpen] = (0, _react.useState)(initState || false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle
  };
}
//# sourceMappingURL=index.js.map