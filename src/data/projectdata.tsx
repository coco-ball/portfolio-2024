const getImageArray = (name: string, imgNum: number): string[] => {
  const imageArray = [];
  for (let i = 1; i < imgNum + 1; i++) {
    imageArray.push(`${name}/${i}.png`);
  }
  return imageArray;
};

const projectList = [
  {
    name: "Mindly",
    year: "2022-2023",
    link: "",
    engDescription:
      "Mindly is an Emotional-responsive Meditation Metaverse Based on Computer Vision AI Model. Under two professors, we conducted the research with six team members, wrote a thesis, and presented it at the HCI Conference. We built a brand identity and produced service guide banners and brochures.",
    korDescription:
      "Mindly는 컴퓨터비전 AI모델을 활용한 감정반응형 명상공간 메타버스입니다. 교수님 2분의 지도 아래 팀원 6인과 해당 연구를 진행, 논문을 작 성하여 HCI 학회에서 발표하였습니다. 브랜드 아이덴티티를 구축하고 서비스 가이드 배너 및 브로셔를 제작하였습니다.",
    mainCategory: "Service Design",
    category: "Service Design, VR, UX/UI Design", //나중에 리스트로 바꾸기
    tools: "Unity, Adobe Premiere Pro",
    image: getImageArray("mindly", 12),
  },
  {
    name: "S-Factory Rebranding",
    year: "2023",
    link: "",
    engDescription:
      "This project re-established the brand identity of S-Factory, a complex cultural space in Seongsu. S-Factory has operated four buildings, A, B, C, and D, as the centers of culture, art, and communication, connecting Seongsu, brands, and people. Based on this brand identity, we developed a new design system, including a logo that shows the linear flow and a versatile modules.",
    korDescription:
      "성수동의 복합문화공간 에스팩토리(S-Factory)의 브랜드 아이덴티티를 재정립하였습니다.에스팩토리는 A,B,C,D 네 개의 동을 문화, 예술, 소통의 창으로 운영하며 성수, 브랜드, 그리고 사람들을 연결합니다. 이에 착안하여 선적인 흐름이 나타나는 로고와 조합이 자유로운 모듈 등 새로운 디자인 시스템을 개발하였습니다.",
    mainCategory: "Identity Design",
    category: "Identity Design, Graphic Design", //나중에 리스트로 바꾸기
    tools: "Adobe Photoshop, Illustrator, Indesign",
    image: getImageArray("sfactory", 27),
  },
];

export default projectList;
