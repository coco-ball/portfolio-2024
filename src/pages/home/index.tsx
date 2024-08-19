import Logo from "@/../public/image/logo/logo.png";
// import Navbar from "@/components/common/Navbar";

function HomePage() {
  return (
    <main className="h-screen bg-[#1e1e1e] text-white content-center px-20">
      <div className="flex justify-between">
        <img src={Logo} className="h-[24rem]" alt="Logo"></img>
        <div className="h-[24rem] flex flex-col gap-20">
          <div className="-rotate-6">
            <p className="text-lg typewriter-bold pb-2">About</p>
            <p className="text-[0.8125rem] sohne-light">
              Chaewon Yu / A graphic designer based in Seoul <br />
              Seoul National University <br /> BA Visual Design & BA Information
              and Culture Technology Studies <br />
              Internship at Vive Studios Lab 2023
            </p>
          </div>
          <div className="rotate-3">
            <p className="text-lg typewriter-bold">Contact</p>
            <p className="text-[0.8125rem] sohne-light">
              Email / kidbean02@snu.ac.kr <br />
              Github / coco-ball <br />
              Instagram / @co_lorem
            </p>
          </div>
        </div>
        {/* <div className="content-center">
          <Navbar currentTab="home" />
        </div> */}
      </div>
    </main>
  );
}

export default HomePage;
