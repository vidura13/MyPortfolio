import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
export default function MarkdownRenderer({ fileName }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/content/${fileName}.md`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Content unavailable");
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setError(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, [fileName]);
  return (
    <div className="prose">
      {error ? (
        <p role="status">
          This content couldn’t be loaded. Please refresh the page or{" "}
          <a href="mailto:viduravd@gmail.com">get in touch</a>.
        </p>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
}
