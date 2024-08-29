function HomePage() {
  return (
    <div className="h-[20rem] flex flex-col col-start-3 gap-14 mt-12 -rotate-6">
      <div>
        <p className="home-category">About</p>
        <p className="home-content">
          Chaewon Yu / A graphic designer based in Seoul <br />
          Seoul National University <br /> BA Visual Design & BA Information and
          Culture Technology Studies <br />
          UI Designer Vive Studios Lab 2023
        </p>
      </div>
      <div>
        <p className="home-category">Contact</p>
        <div className="home-content">
          <span>Email / </span>
          <a href="mailto:kidbean02@snu.ac.kr" className="hover:underline">
            kidbean02@snu.ac.kr
          </a>
          <br />
          <span>Github / </span>
          <a href="https://github.com/coco-ball" className="hover:underline">
            coco-ball
          </a>
          <br />
          <span>Instagram / </span>
          <a
            href="https://www.instagram.com/co_lorem/"
            className="hover:underline"
          >
            @co_lorem
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
