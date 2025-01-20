import ProjectList from "@/components/ProjectList";

function HomePage() {
  return (
    <>
      <ProjectList></ProjectList>
      <div className="h-fit flex flex-col col-start-3 gap-14 -rotate-6 mt-32 pl-2 w-120 md:mt-2 md:pl-0 md:mix-blend-exclusion hover:mix-blend-normal">
        <div className="bg-white pl-1">
          <p className="home-category">About</p>
          <p className="home-content">
            Chaewon Yu / A graphic designer based in Seoul <br />
            Seoul National University / BA Visual Design / BA Information and
            Culture Technology Studies <br />
            UI Designer Vive Studios Lab 2023
          </p>
        </div>
        <div className="bg-white pl-1">
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
    </>
  );
}

export default HomePage;
