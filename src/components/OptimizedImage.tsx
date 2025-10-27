import React from "react";

interface OptimizedImageProps {
  /** 예: "salvadordali/1.png" */
  fileName: string;
  w?: number;
  h?: number;
  className?: string;
  alt?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  fileName,
  w = 1200,
  h = 800,
  className = "w-full",
  alt = "",
}) => {
  const base = `/image/project/${fileName.replace(
    /\.(jpe?g|png|gif|webp)$/i,
    ""
  )}`;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`
          ${base}@800.webp 800w,
          ${base}@1600.webp 1600w
        `}
        sizes="(max-width:768px) 100vw, (max-width:1280px) 90vw, 1200px"
      />
      <source
        type="image/jpeg"
        srcSet={`
          ${base}@800.jpg 800w,
          ${base}@1600.jpg 1600w
        `}
        sizes="(max-width:768px) 100vw, (max-width:1280px) 90vw, 1200px"
      />
      {/* 폴백: 원본 파일 */}
      <img
        src={`/image/project/${fileName}`}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        className={className}
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: `${w}px ${h}px`,
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
