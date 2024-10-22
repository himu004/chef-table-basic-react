import bannerBG from "../../assets/banner-img.png";
const Banner = () => {
  return (
    <section className="mt-10">
      <div
        className="hero h-[80vh] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${bannerBG})`,
        }}
      >
        <div className="hero-overlay bg-opacity-25 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, unde nostrum ipsum corporis quos aliquid quo incidunt fugiat corrupti expedita!
            </p>
            <div className="space-x-5">
            <button className="btn btn-success rounded-full">Explore Now</button>
            <button className="btn btn-outline btn-success rounded-full">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
