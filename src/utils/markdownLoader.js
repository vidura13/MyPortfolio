import fs from 'fs';
import path from 'path';

/*// This function will be replaced later with dynamic imports
export const getMarkdownContent = (fileName) => {
  // For now, we'll simulate loading markdown content
  return fetch(`/content/${fileName}.md`)
    .then(res => res.text())
    .catch(() => '# Error\nFailed to load content.');
};*/

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ fileName }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/${fileName}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent('# Error\nFailed to load content.'));
  }, [fileName]);

  return (
    <div className="prose text-lg md:text-xl max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;