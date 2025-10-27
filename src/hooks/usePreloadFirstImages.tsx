import { useEffect } from "react";

export default function usePreloadFirstImages(
  images: string[] = [],
  count = 2
) {
  useEffect(() => {
    if (!images.length) return;

    // 첫 count개의 이미지만 미리 불러오기
    const links: HTMLLinkElement[] = [];
    images.slice(0, count).forEach((img) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = `/image/project/${img}`;
      document.head.appendChild(link);
      links.push(link);
    });

    // 언마운트 시 제거
    return () => {
      links.forEach((l) => document.head.removeChild(l));
    };
  }, [images, count]);
}
