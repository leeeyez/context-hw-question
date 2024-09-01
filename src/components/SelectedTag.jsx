import React from "react";
import hashtags from "../hashtag/hashtag";

const SelectedTag = ({ selectedTagId }) => {
  // props로 내려받은 선택된 해시태그 id를 통해 hashtags 배열에서 해당 부분을 찾음
  const selectedTag = hashtags.find((tag) => tag.id === selectedTagId);

  return (
    <div>
      {selectedTag ? (
        <h3>Selected Tag: #{selectedTag.name}</h3>
      ) : (
        <h3>No Tag Selected</h3>
      )}
    </div>
  );
};

export default SelectedTag;
