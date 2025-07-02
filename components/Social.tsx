import Link from "next/link";
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
  { href: "/", icon: <FaTwitter /> },
  { href: "https://github.com/Ramachandra-2k96", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/ramachandra-udupa/", icon: <FaLinkedin /> },
  { href: "https://www.youtube.com/@pokemonmaster2541", icon: <FaYoutube /> },
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
