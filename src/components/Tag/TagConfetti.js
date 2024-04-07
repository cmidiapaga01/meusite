// Tag/TagConfetti.js
import React from 'react';
import Confetti from "react-confetti";

const TagConfetti = ({ onFinish }) => {
  return (
    <Confetti onFinish={onFinish} />
  );
};

export default TagConfetti;
