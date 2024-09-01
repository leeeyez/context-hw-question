import React from "react";
import styled from "styled-components";
import hashtags from "../hashtag/hashtag";

const Box = styled.div`
  padding: 0px 15px;
  margin: 10px;
  border: black;
  border-radius: 10px;
  background-color: #e1e1e1;
`;

const Post = ({ name, content, selectedTagId }) => {
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
