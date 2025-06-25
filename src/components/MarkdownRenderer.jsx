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
    <div className="prose max-w-none">
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <img
              {...props}
              className="mx-auto my-6 w-40 h-40 object-cover"
              alt={props.alt || 'Profile'}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;