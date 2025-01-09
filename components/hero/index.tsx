export default function Hero() {
  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Generate AI Beauties
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Button */}
            <div className="flex items-center">
              <a
                href="#"
                className="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8"
              >
                Let's Talk
              </a>
              <a href="#" className="flex max-w-full items-center font-bold">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg"
                  alt=""
                  className="mr-2 inline-block max-h-4 w-5"
                />
                <p>View Showreel</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
