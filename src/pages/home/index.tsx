import ProjectList from "@/components/project/ProjectList";
// import Navbar from "@/components/common/Navbar";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spiral from "@/components/common/spiral";

function HomePage() {
  const cameraPosition: [number, number, number] = useMemo(() => {
    const x = Math.random() * 1200;
    const y = Math.random() * 800 - 400;
    const z = Math.random() * 800 - 400;
    return [x, y, z]; // 배열로 반환
  }, []);

  const bgColor = useMemo(() => {
    const r = Math.floor(Math.random() * 256); // 0~255 값 생성
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; // CSS용 rgb 문자열 생성
  }, []);

  return (
    <div>
      <Canvas
        style={{
          background: bgColor,
          height: "100vh",
          position: "absolute",
        }}
        camera={{ position: cameraPosition, fov: 75, near: 1, far: 10000 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={5} />
        {/* <directionalLight position={[10, 10, 10]} intensity={1.5} />{" "} */}
        <OrbitControls
          rotateSpeed={0.17}
          zoomSpeed={0.17}
          // panSpeed={0.3}
          // enablePan={true}
        />
        <Spiral />
      </Canvas>
      {/* <main className="h-screen flex flex-wrap justify-between content-center mx-20 text-white mix-blend-exclusion"> */}
      <main className="h-screen grid grid-cols-2 gap-3 mx-24 text-black ">
        {/* <img src={Logo} className="h-[20rem]" alt="Logo"></img> */}
        <div className="-rotate-6 mt-auto mb-28">
          <div className="home-category">Project</div>
          <div className="home-content">
            <ProjectList></ProjectList>
          </div>
        </div>
        <div className="h-[20rem] flex flex-col gap-14 mt-12 -rotate-6">
          <div>
            <p className="home-category">About</p>
            <p className="home-content">
              Chaewon Yu / A graphic designer based in Seoul <br />
              Seoul National University <br /> BA Visual Design & BA Information
              and Culture Technology Studies <br />
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
              <a
                href="https://github.com/coco-ball"
                className="hover:underline"
              >
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
        {/* <div className="content-center">
          <Navbar currentTab="home" />
        </div> */}
      </main>
    </div>
  );
}

export default HomePage;
