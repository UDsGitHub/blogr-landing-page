import phoneImage from "../images/illustration-phones.svg";

const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <div className="sectionTwo__inner relative md:py-24 md:px-10 lg:px-8 flex flex-col md:items-center md:grid md:grid-cols-2 md:mx-auto xl:max-w-6xl">
        <div>
          <img
            src={phoneImage}
            alt="phones illustration"
            className="phones block w-full"
          />
        </div>
        <div className="sectionTwo__content text-center md:text-left text-white p-6 pb-24 md:p-0">
          <h2 className="text-4xl text-white pb-4">
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
