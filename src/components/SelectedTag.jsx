import React from "react";
import hashtags from "../hashtag/hashtag";

const SelectedTag = ({ selectedTagId }) => {
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
