import desktopImage from "../images/illustration-editor-desktop.svg";
import mobileImage from "../images/illustration-editor-mobile.svg";

const SectionOne = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl mb-10 text-center">Designed for the future</h2>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:mx-auto xl:max-w-6xl">
        <div className="text-center md:text-left">
          <div>
            <h3 className="mt-10 mb-5">Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3 className="mt-10 mb-5">Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={desktopImage}
            alt="editor illustration"
          />
          <img
            src={mobileImage}
            alt="editor illustration"
            className="block w-full"
          />
        </picture>
      </div>
    </section>
  );
};

export default SectionOne;
