import { useState } from "react";

const useFAQ = (defaultOpen = 0) => {
  const [activeIndex, setActiveIndex] =
    useState(defaultOpen);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) =>
      prev === index ? null : index
    );
  };

  const isOpen = (index) =>
    activeIndex === index;

  return {
    activeIndex,
    toggleFAQ,
    isOpen,
  };
};

export default useFAQ;