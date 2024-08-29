import React from "react";
import styled from "styled-components";
import TagBar from "./TagBar";

const Tag = styled.button`
  margin: 10px;
`;

const HashTag = ({ tag, onTagSelect }) => {
  const handleClick = () => {
    onTagSelect(tag.id);
  };

  return <Tag onClick={handleClick}>#{tag.name}</Tag>;
};

export default HashTag;
