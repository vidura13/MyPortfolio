import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const socials = [
  ["GitHub", "https://github.com/vidura13", FaGithub],
  ["LinkedIn", "https://www.linkedin.com/in/viduraabeysinghe/", FaLinkedinIn],
  ["Twitter / X", "https://twitter.com/Vidura_13", FaXTwitter],
  ["Instagram", "https://www.instagram.com/vd___a", FaInstagram],
];
export default function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map(([label, url, Icon]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in a new tab)`}
          title={label}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
