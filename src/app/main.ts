import React, { useState } from "react";

const BlogSlider = () => {
  const [isSlid, setIsSlid] = useState(false); // State for slide

  // Toggle the state based on the arrow direction clicked
  const toggleArrow = (direction: "left" | "right") => {
    if (direction === "left") {
      setIsSlid(false); // Show 3 blogs
    } else if (direction === "right") {
      setIsSlid(true); // Show 4 blogs
    }
  };

}

export default BlogSlider;

