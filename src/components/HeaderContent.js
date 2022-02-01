const HeaderContent = () => {
    return (
      <div className="flex flex-col justify-end items-center mt-24 text-center">
        <h1 className="text-center text-white font-bold mb-2 md:text-5xl xl:text-6xl 2xl:text-7xl">
          A modern publishing platform
        </h1>
        <p className="font-light mb-6 notwhite">
          Grow your audience and build your online brand
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <button className="btn-light bg-white rounded-full py-2 px-4 font-bold">
              Start for Free
            </button>
          </li>
          <li>
            <button className="learn-more font-bold border border-white py-2 px-4 rounded-full text-white">
              Learn More
            </button>
          </li>
        </ul>
      </div>
    );
}

export default HeaderContent
