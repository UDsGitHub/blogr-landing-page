import logo from "../images/logo.svg";
import { LinksData } from "../data/LinksData";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-20 md:flex-row md:gap-0 md:justify-around items-center md:items-start p-20">
      <div>
        <img src={logo} alt="blogr logo" />
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:gap-0 md:w-full md:justify-around text-center md:text-left">
        {LinksData.map(({ id, title, links }) => {
          return (
            <div key={id}>
              <h4 className="text-white mb-4 ">{title}</h4>
              <ul>
                {links.map((link, index) => {
                  return (
                    <li key={index} className="my-2">
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
