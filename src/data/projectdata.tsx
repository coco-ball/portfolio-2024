const getImageArray = (name: string, imgNum: number): string[] => {
  const imageArray = [];
  for (let i = 1; i < imgNum + 1; i++) {
    imageArray.push(`${name}/${i}.png`);
  }
  return imageArray;
};

const projectData = [
  {
    name: "Mindly",
    year: "2022-2023",
    link: "",
    engDescription:
      "Mindly is an Emotional-responsive Meditation Metaverse Based on Computer Vision AI Model. Under two professors, we conducted the research with six team members, wrote a thesis, and presented it at the HCI Conference. We built a brand identity and produced service guide banners and brochures.",
    korDescription:
      "Mindly는 컴퓨터비전 AI모델을 활용한 감정반응형 명상공간 메타버스입니다. 교수님 2분의 지도 아래 팀원 6인과 해당 연구를 진행, 논문을 작성하여 HCI 학회에서 발표하였습니다. 브랜드 아이덴티티를 구축하고 서비스 가이드 배너 및 브로셔를 제작하였습니다.",
    mainCategory: "Service Design",
    category: "Service Design, VR, UX/UI Design", //나중에 리스트로 바꾸기
    tools: "Unity, Oculus, Adobe Premiere Pro",
    image: getImageArray("mindly", 13),
    engHonors: "Grand Prize in SK Creative Challenge at 2023 HCI Conference",
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
    category: "Identity Design, Graphic Design",
    tools: "Adobe Photoshop, Illustrator, Indesign",
    image: getImageArray("sfactory", 27),
    engHonors: null,
    korHonors: null,
  },
  {
    name: "SNU Computer Science &\nEngineering Website",
    year: "2023-2024",
    link: "https://cse.snu.ac.kr/",
    engDescription:
      "This project is a renewal of the website of the Department of Computer Science and Engineering at Seoul National University. Our team, CSEREAL, reorganized the information architecture of the existing website and refactored the data and website structure to make it stable and easy to maintain. We also redesigned the website with graphic elements that embody the concept of 'connection', which is the identity of CSE. Since it is an official website visited by various people of all ages, we have taken great care in improving information's intuitiveness and user-friendly experiences.",
    korDescription:
      "이 프로젝트는 서울대학교 컴퓨터공학부의 웹사이트를 리뉴얼한 프로젝트입니다. 저희 팀 CSEREAL은 기존 웹사이트의 정보 체계를 정리하고 데이터 및 웹사이트 구조를 안정적이고 유지보수가 쉽도록 리팩토링하였습니다. 또한 컴퓨터공학부의 아이덴티티로 꼽은 '연결'의 이미지를 그래픽 요소로 녹여내어 새로운 디자인을 적용하였습니다. 전연령의 다양한 사람들이 사용하는 학부 홈페이지인 만큼 직관적인 정보 전달과 사용자 친화적인 경험에 유의하며 디자인하였습니다.",
    mainCategory: "Website",
    category: "Website, UX/UI Design",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("snucse", 11),
    engHonors: null,
    korHonors: null,
  },
  {
    name: "Perfume",
    year: "2023",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Video, 1min 52sec",
    category: "Video, Production",
    tools: "Adobe Premiere Pro, After Effect",
    image: getImageArray("perfume", 11),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "Flood Vulnerability Map for Banjihas in Seoul",
    year: "2023",
    link: "https://kdja-visualization-dviz.vercel.app/waterMap.html",
    engDescription:
      'Our team, D-Viz, created a map that visualizes "banjihas" in Seoul that are vulnerable to flooding during the rainy season. By mining public data such as Building Registers and Integrated Building Information, we attained cogent information on banjihas in 4 gus in Seoul — Gwanak, Dongjak, Yeongdeungpo, and Seocho. The flood vulnerability was analyzed by considering the Inundation Trace Map, the Flood Prediction Map, and the degree of deterioration of the building. We visualized three different levels of flood vulnerability with apparent colors and raining and water-filling interactions.',
    korDescription:
      "D-Viz팀 5인과 서울시 4개 구의 반지하 중 집중호우 발생 시 침수가 우려되는 건물을 시각화한 지도를 제작하였습니다. 건축물 대장과 건축통합정보 등 공공데이터를 바탕으로 서울시 관악, 동작, 영등포, 서초구의 유효한 반지하 건물 정보를 추려낸 후 침수흔적도와 침수예상도, 건물 노후 정도를 고려하여 침수 우려 정도를 분석하였습니다. 건물마다 상이한 침수 우려 정도를 직관적인 색깔 및 건물에 물이 차는 인터랙션으로 시각화하였습니다.",
    mainCategory: "Website",
    category: "Website, Data Analysis, Visualization",
    tools: "R, QGIS, Mapbox, HTML, CSS, JS",
    image: getImageArray("banjihamap", 8),
    engHonors: "Published on page 9 of the Seoul Shinmun on June 29, 2023",
    korHonors: "2023년 6월 29일자 서울신문 9면에 실린 프로젝트입니다.",
  },
  {
    name: "Waffle Sans",
    year: "2023",
    link: "https://interactive-study.wafflestudio.com/projects/waffle-sans/",
    engDescription:
      'This project was carried out by Interactive Study, in which six developers and designers are studying experimental web interactions. We created Waffle Sans modifying the variable font "Leon Sans" (Copyright. Jongmin Kim). When you write with Waffle Sans, each character turns into a Christmas wreath with leaves and ornaments. We\'d expanded Waffle Sans into a service that you can enclose Christmas wreath typography in a letter and send to others. I participated in project planning, wreath design, and UX/UI design.',
    korDescription:
      '개발자 3인, 디자이너 3인이 웹의 새로운 인터랙션을 연구하는 Interactive Study에서 진행한 프로젝트로, 배리어블 폰트 "Leon Sans"(Copyright. Jongmin Kim)를 활용하여 Waffle Sans를 제작하였습니다. Waffle Sans로 글자를 쓰면 잎사귀와 여러 오나먼트가 생겨나 곧 크리스마스 리스가 됩니다. 이 크리스마스 리스 타이포그래피는 편지 속에 담아 타인에게 보낼 수 있는 서비스로 확장하였습니다. 기획 및 리스 디자인, UX/UI 디자인에 참여하였습니다.',
    mainCategory: "Website",
    category: "Website, Service Design, Typography",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("wafflesans", 4),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "— 地獄のメカニカル・トレーニング・フレーズ",
    year: "2023",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Poster, 594 x 841mm",
    category: "Poster, Typography, Graphic Design",
    tools: "Adobe Photoshop, Illustrator",
    image: getImageArray("seeya", 7),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "The Physiological Process of Tattooing",
    year: "2023",
    link: "",
    engDescription:
      "The Physiological Process of Tattooing is an animated explainer video which visualizes what happens to our body when we get a tattoo.",
    korDescription:
      "The Physiological Process of Tattooing은 타투를 받을 때 몸에서 일어나는 일과 원리를 설명한 애니메이션입니다.",
    mainCategory: "Video, 31sec",
    category: "Video, Animation, Illustration",
    tools: "Adobe Photoshop, After Effect",
    image: getImageArray("tattooing", 12),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "BooYoo",
    year: "2023",
    link: "",
    engDescription:
      "BooYoo is a video visualizing the word 浮遊. A calm pond was designed by overlapping wave layers mixed with blend mode and floating several pieces of duckweed on top.",
    korDescription:
      "BooYoo는 단어 浮遊(부유)를 시각화한 비디오입니다. 블렌드 모드를 입힌 물결을 여러 겹 쌓고, 몇 점의 개구리밥을 올려 잔잔한 연못을 만들어냈습니다.",
    mainCategory: "Video, 7sec",
    category: "Video, Collage",
    tools: "Adobe Photoshop, After Effect",
    image: getImageArray("booyoo", 3),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "Salvador Dali",
    year: "2023",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Video, 1min 3sec",
    category: "Video, Collage",
    tools: "Adobe Photoshop, Illustrator, Stable Diffusion",
    image: getImageArray("salvadordali", 24),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "Code-based Artworks",
    year: "2023",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Coded illustration",
    category: "Coded Illustration, Graphic Design",
    tools: "JS Canvas, p5.js",
    image: getImageArray("seeya", 7),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "Seeya",
    year: "2024",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Website",
    category: "Mobile Website, Service Design",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("seeya", 7),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "Breakaway: The Funeral of Cycle",
    year: "2023",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Book, 148 x 210mm",
    category: "Coded Illustration, Graphic Design",
    tools: "JS Canvas, p5.js",
    image: getImageArray("seeya", 7),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "Find Waffle",
    year: "2024",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Book, 148 x 210mm",
    category: "Coded Illustration, Graphic Design",
    tools: "JS Canvas, p5.js",
    image: getImageArray("seeya", 7),
    engHonors: "",
    korHonors: "",
  },
  {
    name: "ISC Student Work Exhibition",
    year: "2024",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 일부 씬을 제외하고 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Book, 148 x 210mm",
    category: "Coded Illustration, Graphic Design",
    tools: "JS Canvas, p5.js",
    image: getImageArray("seeya", 7),
    engHonors: "",
    korHonors: "",
  },
];

export default projectData;
