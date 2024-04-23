import LogoLarge from "@/../public/image/logo/logo_large.gif";
import Navbar from "@/components/common/Navbar";

function HomePage() {
  return (
    <main className="h-screen bg-zinc-900 text-white">
      <img src={LogoLarge} className="w-full pt-3 mb-2" alt="Logo"></img>
      <div className="flex justify-between px-8">
        <p className="text-sm">
          Chaewon Yu <br />
          <br />
          A graphic Designer based in Seoul <br />
          Seoul National University BA Visual Design BA Information and Culture
          Technology Studies <br />
          {/* Internship at Vive Studios Lab 2023 */}
        </p>
        <div className="content-center">
          <Navbar currentTab="home" />
        </div>
      </div>
      {/* center text */}
      {/* <p className="text-zinc-900 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-70%] text-sm text-center tracking-wider">
        Chaewon Yu <br />
        <br />
        A graphic Designer based in Seoul <br />
        Seoul National University <br /> BA Visual Design BA Information and
        Culture Technology Studies <br />
        Internship at Vive Studios Lab 2023
      </p> */}
    </main>
  );
}

export default HomePage;
