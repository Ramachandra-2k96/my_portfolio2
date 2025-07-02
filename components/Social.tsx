import Link from "next/link";
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
  { href: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
  { href: "https://github.com/yourprofile", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
  { href: "https://youtube.com/yourprofile", icon: <FaYoutube /> },
];

const Socials = ({containerStyles, iconStyles}: {containerStyles: string, iconStyles: string}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
          return (
            <Link key={index} href={social.href} target="_blank" className={iconStyles}>
              {social.icon}
            </Link>
          );
        })}
    </div>
  );
};

export default Socials;
