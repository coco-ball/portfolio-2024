import { Project } from "@/pages/project";

type ProjectDetailProps = { selectedProject: Project | null };

export default function ProjectDetail({ selectedProject }: ProjectDetailProps) {
  return (
    <div
      className={
        "-rotate-6 mr-20 h-fit w-[20rem] " + (selectedProject ? "" : "hidden")
      }
    >
      <div className="project-summary">
        {selectedProject?.year + ", " + selectedProject?.mainCategory}
      </div>
      <div className="text-[3.25rem] leading-[1.15]  mt-2">
        {selectedProject?.name}
      </div>
      <div className="text-sm mt-5">
        <div className="flex gap-8">
          <p className="w-16">category</p>
          <p className="min-w-40">{selectedProject?.category}</p>
        </div>
        <div className="flex gap-8">
          <p className="w-16">tools</p>
          <p className="min-w-40">{selectedProject?.tools}</p>
        </div>
      </div>
      <div className="text-sm mt-20">
        <p className="mb-5">{selectedProject?.engDescription}</p>
        <p>{selectedProject?.korDescription}</p>
      </div>
      {selectedProject?.engHonors && (
        <p className="text-xs w-3/4 mt-8 px-1 bg-black text-white">
          {selectedProject?.engHonors} <br />
          {selectedProject?.korHonors}
        </p>
      )}
    </div>
  );
}
