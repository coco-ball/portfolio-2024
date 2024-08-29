import ProjectDetail from "@/components/project/ProjectDetail";
import { Project } from "@/pages/home";

type ProjectProps = {
  selectedProject: Project | null;
};

export default function ProjectInfo({ selectedProject }: ProjectProps) {
  return (
    <>
      <div className=" col-span-1 h-screen overflow-y-scroll">
        <ProjectDetail selectedProject={selectedProject}></ProjectDetail>
      </div>
      <ul className="col-span-2 h-screen overflow-y-scroll">
        {selectedProject?.image.map((img, idx) => (
          <img
            src={`/image/project/${img}`}
            className="w-full"
            alt=""
            key={idx}
          />
        ))}
      </ul>
    </>
  );
}
