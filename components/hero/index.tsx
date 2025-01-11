import Input from "../input"

export default function Hero() {
  return (
    <section className="relative lg:py-20">
    <header className="w-full h-full flex flex-col justify-between items-center">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10">
        {/* Component */}
        <div className="flex justify-center gap-8 sm:gap-20">
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center max-w-2xl">
            {/* Hero Title */}
            <h1 className="mb-4 text-primary text-4xl font-bold md:text-6xl">
              Generate AI Beauties
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl">
              Stunning beauties you want to generate, whether it's a portrait, a landscape, or a still life.
            </p>
          </div>
        </div>
      </div>
    </header>
    <Input />
    </section>
  );
}
