import { useEffect, useRef } from "react";
import { useProject } from "@/contexts/ProjectContext";

export default function ProjectPage() {
  const { selectedProject } = useProject();
  const imageContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTo(0, 0);
    }
  }, [selectedProject]);

  return (
    <>
      <div className="col-span-1 overflow-y-scroll">
        <div
          className={
            // "mb-8 md:mb-20 pt-14 pl-3 pr-8" + (selectedProject ? "" : "hidden")
            "mb-8 md:mb-20 pt-14 pl-0 pr-6" + (selectedProject ? "" : "hidden")
          }
        >
          <div className="project-summary">
            {selectedProject?.year + ", " + selectedProject?.mainCategory}
          </div>
          <div className="text-[3rem] leading-[1.12] mt-2">
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
      </div>
      <ul ref={imageContainerRef} className="col-span-2 overflow-y-scroll">
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
