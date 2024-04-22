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
    engHonors:
      "Grand Prize in  2023 SK Creative Challenge at 2023 HCI Conference",
    korHonors:
      "2023 HCI 학회의 SK Creative Challenge에서 대상을 수상하였습니다.",
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
    engHonors: null,
    korHonors: null,
  },
  {
    name: "SNU CSE Website",
    year: "2023-2024",
    link: "https://cse.snu.ac.kr/",
    engDescription:
      "This project is a renewal of the website of the Department of Computer Science and Engineering at Seoul National University. Our team, CSEREAL, reorganized the information architecture of the existing website and refactored the data and website structure to make it stable and easy to maintain. We also redesigned the website with graphic elements that embody the concept of 'connection', which is the identity of CSE. Since it is an official website visited by various people of all ages, we have taken great care in improving information's intuitiveness and user-friendly experiences.",
    korDescription:
      "이 프로젝트는 서울대학교 컴퓨터공학부의 웹사이트를 리뉴얼한 프로젝트입니다. 저희 팀 CSEREAL은 기존 웹사이트의 정보 체계를 정리하고 데이터 및 웹사이트 구조를 안정적이고 유지보수가 쉽도록 리팩토링하였습니다. 또한 컴퓨터공학부의 아이덴티티로 꼽은 '연결'의 이미지를 그래픽 요소로 녹여내어 새로운 디자인을 적용하였습니다. 전연령의 다양한 사람들이 사용하는 학부 홈페이지인 만큼 직관적인 정보 전달과 사용자 친화적인 경험에 유의하며 디자인하였습니다.",
    mainCategory: "Website",
    category: "Website, UX/UI Design", //나중에 리스트로 바꾸기
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("snucse", 11),
    engHonors: null,
    korHonors: null,
  },
];

export default projectList;
