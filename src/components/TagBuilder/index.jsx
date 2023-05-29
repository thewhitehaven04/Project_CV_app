import React, { useRef } from 'react';
import { useState } from 'react';
import style from './../../styles/tagBuilder.css';


export default function TagBuilder() {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const handleClick = (event) => {
    const newTag = inputRef.current?.value;
    if (tags.includes(newTag)) {
      setError(true);
    } else {
      setError(false);
      setTags(tags.concat(newTag));
    }
    inputRef.current.value = '';
  };

  return (
    <>
      <div className="tag-builder__flex">
        <input type="text" ref={inputRef} className="skills-input" />
        <button type="button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="tag-builder__flex">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {error && <span>Such a tag already exists!</span>}
    </>
  );
}
