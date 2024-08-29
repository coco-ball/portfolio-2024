import { Project } from "@/pages/home";

type ProjectDetailProps = { selectedProject: Project | null };

export default function ProjectDetail({ selectedProject }: ProjectDetailProps) {
  return (
    <div
      className={"mb-20 pt-14 pl-3 pr-8" + (selectedProject ? "" : "hidden")}
    >
      <div className="project-summary">
        {selectedProject?.year + ", " + selectedProject?.mainCategory}
      </div>
      <div className="text-[3.25rem] leading-[1.15] mt-2">
        {selectedProject?.name}
      </div>
      <div className="text-sm mt-5">
        <div className="flex gap-7">
          <p className="w-20">category</p>
          <p className="w-full">{selectedProject?.category}</p>
        </div>
        <div className="flex gap-7">
          <p className="w-20">tools</p>
          <p className="w-full">{selectedProject?.tools}</p>
        </div>
      </div>
      <div className="text-sm mt-20 text-justify hyphens-auto">
        <p className="mb-5">{selectedProject?.engDescription}</p>
        <p>{selectedProject?.korDescription}</p>
      </div>
      {selectedProject?.engHonors && (
        <div className="text-xs mt-8 content-center p-0.5 w-32 h-32 bg-gray-300 text-white overflow-clip">
          <p className="-rotate-6 w-[7.75rem]">
            {selectedProject?.engHonors}
            <br />
            <br />
            {selectedProject?.korHonors}
          </p>
        </div>
      )}
    </div>
  );
}
