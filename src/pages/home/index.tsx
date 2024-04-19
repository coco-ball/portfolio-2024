import LogoLarge from "@/../public/image/logo_large.gif";
import Navbar from "@/components/common/Navbar";

function Home() {
  return (
    <main>
      <img src={LogoLarge} className="w-full pt-6" alt="Logo"></img>
      <p className="absolute left-8 bottom-10 text-sm ">
        Chaewon Yu <br />
        <br />
        A graphic Designer based in Seoul <br />
        Seoul National University BA Visual Design BA Information and Culture
        Technology Studies <br />
        {/* Internship at Vive Studios Lab 2023 */}
      </p>
      <div className="absolute right-8 bottom-12">
        <Navbar />
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

export default Home;
