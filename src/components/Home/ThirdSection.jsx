import welcombg from "../../assets/welcomebg.png";

export default function ThirdSection() {
  return (
    <div
      className="relative items-center justify-center bg-center bg-no-repeat py-50 "
      style={{ backgroundImage: `url(${welcombg})` }} // Use the imported image
    >
      {/* Overlay for low opacity */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h2 className="text-4xl font-bold text-black lg:text-6xl lg:py-10">Welcome to AS Academy</h2>
        <h2 className="mt-5 mb-5 lg:text-4xl font-medium text-[#ED6F23]">
          Master the Art of Stitching
        </h2>
        <p className="text-black mb-[80px] lg:px-80 text-wrap">
          AS Academy is your ultimate destination for learning the timeless
          craft of knitting and stitching. Whether you re a beginner eager to
          explore your creative side or a seasoned artist aiming to refine your
          skills, our expert-led courses cater to all levels. We offer a wide
          range of programs, from traditional hand-knitting techniques to modern
          machine-based methods, ensuring a comprehensive and hands-on learning
          experience. Unleash your creativity with AS Academy and transform your
          passion for knitting into a lifelong skill or career. Join our
          community of stitch enthusiasts today!
        </p>
      </div>

    </div>
  );
}
