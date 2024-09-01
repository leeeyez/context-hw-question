import React, { useState } from "react";
import styled from "styled-components";
import "../style/TagBar.css";
import HashTag from "./HashTag";

const Bar = styled.div`
  background-color: #dedede;
`;

const TagBar = ({ onTagSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hashtags = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
    { id: 8, name: "H" },
    { id: 9, name: "I" },
    { id: 10, name: "J" },
    { id: 11, name: "K" },
    { id: 12, name: "L" },
    { id: 13, name: "M" },
    { id: 14, name: "N" },
    { id: 15, name: "O" },
    { id: 16, name: "P" },
    { id: 17, name: "Q" },
    { id: 18, name: "R" },
    { id: 19, name: "S" },
    { id: 20, name: "T" },
    { id: 21, name: "U" },
    { id: 22, name: "V" },
    { id: 23, name: "W" },
    { id: 24, name: "X" },
    { id: 25, name: "Y" },
    { id: 26, name: "Z" },
  ];

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Bar className={`tag-bar ${isOpen ? "open" : "closed"}`}>
      <div className="handle" onClick={toggleBar}>
        {isOpen ? "▼" : "▲"}
      </div>
      {isOpen && (
        <div>
          <h2>Hash Tags</h2>
          {hashtags.map((tag) => (
            <HashTag key={tag.id} tag={tag} onTagSelect={onTagSelect} />
          ))}
        </div>
      )}
    </Bar>
  );
};

export default TagBar;
