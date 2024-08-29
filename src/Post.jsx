import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 0px 15px;
  margin: 10px;
  border: black;
  border-radius: 10px;
  background-color: #e1e1e1;
`;

const Post = ({ name, content, selectedTagId }) => {
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

  const selectedTag = hashtags.find((tag) => tag.id === selectedTagId);

  // 태그가 선택되지 않았거나, 태그가 일치하는 경우에만 포스트를 렌더링
  if (!selectedTag || selectedTag.name === name) {
    return (
      <Box>
        <h3>{name}</h3>
        <p>{content}</p>
      </Box>
    );
  }

  return null;
};

export default Post;
