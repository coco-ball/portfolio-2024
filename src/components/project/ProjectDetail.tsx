import { Project } from "@/pages/project";

type ProjectDetailProps = { selectedProject: Project | null };

export default function ProjectDetail({ selectedProject }: ProjectDetailProps) {
  return (
    <div
      className={"-rotate-6 mr-24 h-fit " + (selectedProject ? "" : "hidden")}
    >
      <div className="project-summary">
        {selectedProject?.year + ", " + selectedProject?.mainCategory}
      </div>
      <div className="text-[3.25rem]">{selectedProject?.name}</div>
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
      <div className="text-sm w-[20rem] mt-20">
        <p className="mb-5">{selectedProject?.engDescription}</p>
        <p>{selectedProject?.korDescription}</p>
      </div>
    </div>
  );
}
