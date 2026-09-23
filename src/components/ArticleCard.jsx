import { Arrow } from "./Icons";
export default function ArticleCard({
  title,
  description,
  image,
  link,
  date,
  info,
  category = "BEYOND THE CODE",
  imageAlt = title,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`article-card${image ? "" : " article-card--text-only"}`}
    >
      {image && (
        <div className="article-image">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      )}
      <div className="article-copy">
        <div className="article-meta">
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="text-link">
          {info} <Arrow diagonal />
        </span>
      </div>
      <span className="article-arrow">
        <Arrow diagonal />
      </span>
    </a>
  );
}
