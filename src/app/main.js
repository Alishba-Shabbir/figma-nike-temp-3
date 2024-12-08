"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BlogSlider = function () {
    var _a = (0, react_1.useState)(false), isSlid = _a[0], setIsSlid = _a[1]; // Correctly typed useState
    // Toggle the state based on the arrow direction clicked
    var toggleArrow = function (direction) {
        if (direction === "left") {
            setIsSlid(false); // Show 3 blogs
        }
        else if (direction === "right") {
            setIsSlid(true); // Show 4 blogs
        }
    };
}
exports.default = BlogSlider;
