import desktopImage from "../images/illustration-laptop-desktop.svg";
import mobileImage from "../images/illustration-laptop-mobile.svg";

const SectionThree = () => {
  return (
    <section className="pb-20 px-4">
      <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:mx-auto xl:max-w-7xl">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={desktopImage}
          />
          <img
            src={mobileImage}
            alt="laptop illustration"
            className="block w-full"
          />
        </picture>
        <div className="text-center md:text-left">
          <div>
            <h3 className="mt-10 mb-5">Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h3 className="mt-10 mb-5">Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
