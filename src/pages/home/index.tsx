// import Logo from "@/../public/image/logo/logo_thin.png";
import ProjectList from "@/components/project/ProjectList";
// import Navbar from "@/components/common/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spiral from "@/spiral";

function HomePage() {
  const x = Math.random() * 1200;
  const y = Math.random() * 800 - 400;
  const z = Math.random() * 800 - 400;

  return (
    <div>
      <Canvas
        style={{
          background: "#1e1e1e",
          height: "100vh",
          position: "absolute",
        }}
        camera={{ position: [x, y, z], fov: 75, near: 1, far: 10000 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={10} />
        {/* <directionalLight position={[10, 10, 10]} intensity={1.5} />{" "} */}
        <OrbitControls
          rotateSpeed={0.17}
          zoomSpeed={0.17}
          // panSpeed={0.3}
          // enablePan={true}
        />
        <Spiral />
      </Canvas>
      <main className="h-screen flex flex-wrap justify-between content-center mx-20 text-white mix-blend-exclusion">
        {/* <img src={Logo} className="h-[20rem]" alt="Logo"></img> */}
        <div className="h-[20rem] flex flex-col gap-14">
          <div>
            <p className="home-category">About</p>
            <p className="home-content">
              Chaewon Yu / A graphic designer based in Seoul <br />
              Seoul National University <br /> BA Visual Design & BA Information
              and Culture Technology Studies <br />
              Internship at Vive Studios Lab 2023
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
        <div>
          <p className="home-category">Project</p>
          <div className="home-content">
            <ProjectList></ProjectList>
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
