import { useEffect, useRef } from "react";
import { useProject } from "@/contexts/ProjectContext";
import ProjectList from "@/components/ProjectList";
// import OptimizedImage from "@/components/OptimizedImage";
// import usePreloadFirstImages from "@/hooks/usePreloadFirstImages";

export default function ProjectPage() {
  const { selectedProject } = useProject();
  const imageContainerRef = useRef<HTMLUListElement | null>(null);

  // const images = selectedProject?.image ?? [];
  // usePreloadFirstImages(images, 2);

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTo(0, 0);
    }
  }, [selectedProject]);

  // const raw = selectedProject?.image ?? [];
  // // 1@800.webp, 3@1600.jpg 같은 파생 파일은 제외
  // const images = raw.filter((name) => !/@\d+\.(webp|jpe?g)$/i.test(name));

  return (
    <>
      <ProjectList></ProjectList>
      <div className="col-span-1 overflow-y-scroll">
        <div
          className={
            // "mb-8 md:mb-20 pt-14 pl-3 pr-8" + (selectedProject ? "" : "hidden")
            "mb-8 md:mb-20 pt-4 md:pt-14 px-4 md:pl-0 md:pr-6" +
            (selectedProject ? "" : "hidden")
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
        </div>
      </div>
      <ul ref={imageContainerRef} className="col-span-2 overflow-y-scroll">
        <div>
          {selectedProject?.engHonors && (
            <div className="flex gap-3 text-[0.68rem] md:text-xs sohne-light w-full px-4 py-1 bg-black text-white overflow-clip">
              <p className="w-60 flex-1">{selectedProject?.engHonors}</p>
              <p className="w-60 flex-1">{selectedProject?.korHonors}</p>
            </div>
          )}
        </div>
        {/* {images.map((img, idx) => ( */}
        {selectedProject?.image.map((img, idx) => (
          // <OptimizedImage key={idx} fileName={img} />
          <img
            src={`/image/project/${img}`}
            className="w-full"
            alt=""
            key={idx}
            loading="lazy"
          />
        ))}
        {/* {images.map((img, idx) =>
          img.toLowerCase().endsWith(".gif") ? (
            // gif는 그대로 <img> (또는 나중에 <video>로 교체)
            <img
              key={idx}
              src={`/image/project/${img}`}
              alt=""
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          ) : (
            // 사진류는 파생 파일을 내부에서 쓰는 OptimizedImage
            <OptimizedImage key={idx} fileName={img} />
          )
        )} */}
      </ul>
    </>
  );
}
