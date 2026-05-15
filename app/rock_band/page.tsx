export default function RockBand() {
    return <>
    <section className="relative bg-zinc-900 text-white py-32 overflow-hidden">
  <div className="container mx-auto px-6">
    <h1 className="text-center text-5xl font-bold mb-4">
        Rock Band Summer Sessions
    </h1>

    <p className="text-zinc-300 text-lg">
      Uneven section border with Tailwind
    </p>
  </div>

  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg
      className="relative block w-full h-30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        className="fill-foreground"
        d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      />
    </svg>
  </div>
</section>

<section className="bg-foreground py-32">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold">
      Rock Band
    </h2>
  </div>
</section>
    </>
}