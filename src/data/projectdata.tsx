const getImageArray = (name: string, imgNum: number): string[] => {
  const imageArray = [];
  for (let i = 1; i < imgNum + 1; i++) {
    imageArray.push(`${name}/${i}.png`);
    imageArray.push(`${name}/${i}.gif`); //gif 추가 로직 고치기
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
    korHonors: "2023 HCI 학회의 SK Creative Challenge에서 대상을 수상했습니다.",
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
  },
  {
    name: "SNU Computer Science &\nEngineering Website",
    shortenName: "SNU CSE Website",
    year: "2023-2024",
    link: "https://cse.snu.ac.kr/",
    engDescription:
      "This project is a renewal of the website of the Department of Computer Science and Engineering at Seoul National University. Our team, CSEREAL, reorganized the information architecture of the existing website and refactored the data and website structure to make it stable and easy to maintain. We also redesigned the website with graphic elements that embody the concept of 'connection', which is the identity of CSE. Since it is an official website visited by various people of all ages, we have taken great care in improving information's intuitiveness and user-friendly experiences.",
    korDescription:
      "이 프로젝트는 서울대학교 컴퓨터공학부의 웹사이트를 리뉴얼한 프로젝트입니다. 저희 팀 CSEREAL은 기존 웹사이트의 정보 체계를 정리하고 데이터 및 웹사이트 구조를 안정적이고 유지보수가 쉽도록 리팩토링하였습니다. 또한 컴퓨터공학부의 아이덴티티로 꼽은 '연결'의 이미지를 그래픽 요소로 녹여내어 새로운 디자인을 적용하였습니다. 전연령의 다양한 사람들이 사용하는 학부 홈페이지인 만큼 직관적인 정보 전달과 사용자 친화적인 경험에 유의하며 디자인하였습니다.",
    mainCategory: "Website",
    category: "UX/UI Design",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("snucse", 12),
  },
  {
    name: "Perfume",
    year: "2023",
    link: "",
    engDescription:
      'Perfume is the opening sequence of the movie "Perfume: The Story of a Murderer". To depict the process of creating a perfume abstractly, most scenes were shot by myself, and the complementary shades were used to create a bizarre atmosphere.',
    korDescription:
      "Perfume은 영화 “향수 : 어느 살인자의 이야기”의 오프닝 시퀀스입니다. 향수를 만드는 과정을 추상적으로 묘사하기 위해 직접 촬영하였으며 보색을 활용한 색감으로 기이한 분위기를 연출하였습니다.",
    mainCategory: "Video, 1min 52sec",
    category: "Video, Production",
    tools: "Adobe Premiere Pro, After Effect",
    image: getImageArray("perfume", 11),
  },
  {
    name: "Flood Vulnerability Map for Banjihas in Seoul",
    shortenName: "Flood Vulnerability Map for Banjihas",
    year: "2023",
    link: "https://kdja-visualization-dviz.vercel.app/waterMap.html",
    engDescription:
      'Our team, D-Viz, created a map that visualizes "banjihas" in Seoul that are vulnerable to flooding during the rainy season. By mining public data such as Building Registers and Integrated Building Information, we attained cogent information on banjihas in 4 gus in Seoul — Gwanak, Dongjak, Yeongdeungpo, and Seocho. The flood vulnerability was analyzed by considering the Inundation Trace Map, the Flood Prediction Map, and the degree of deterioration of the building. We visualized three different levels of flood vulnerability with apparent colors and raining and water-filling interactions.',
    korDescription:
      "D-Viz팀 5인과 서울시 4개 구의 반지하 중 집중호우 발생 시 침수가 우려되는 건물을 시각화한 지도를 제작하였습니다. 건축물 대장과 건축통합정보 등 공공데이터를 바탕으로 서울시 관악, 동작, 영등포, 서초구의 유효한 반지하 건물 정보를 추려낸 후 침수흔적도와 침수예상도, 건물 노후 정도를 고려하여 침수 우려 정도를 분석하였습니다. 건물마다 상이한 침수 우려 정도를 직관적인 색깔 및 건물에 물이 차는 인터랙션으로 시각화하였습니다.",
    mainCategory: "Website",
    category: "Data Analysis, Visualization, UX/UI Design",
    tools: "R, QGIS, Mapbox, HTML, CSS, JS",
    image: getImageArray("banjihamap", 8),
    engHonors: "Published on page 9 of the Seoul Shinmun on June 29, 2023",
    korHonors: "2023년 6월 29일자 서울신문 9면에 게재되었습니다.",
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
    category: "UX/UI Design, Service Design, Typography",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("wafflesans", 7),
  },
  {
    name: "地獄のメカニカル・トレーニング・フレーズ",
    year: "2023",
    link: "",
    engDescription:
      "A typography poster inspired by Shinichi Kobayashi's guitar manual <Hell's Mechanical Guitar Training>.",
    korDescription:
      "코바야시 신이치의 기타 교본 <지옥의 메커니컬 기타 트레이닝>을 주제로 작업한 타이포그래피 포스터입니다.",
    mainCategory: "Poster, 594 x 841mm",
    category: "Poster, Typography, Graphic Design",
    tools: "Adobe Photoshop, Illustrator",
    image: getImageArray("guitartraining", 4),
  },
  {
    name: "The Physiological Process of Tattooing",
    shortenName: "Physiological Process of Tattooing",
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
  },
  {
    name: "Salvador Dali",
    year: "2023",
    link: "",
    engDescription:
      "This is an abstract portrait illustrating the artistic theory of Salvador Dali. Using Stable Diffusion, his artworks were reimagined as animated images, emphasizing the surreal and paranoiac aspects in his creations. As Dali often likened himself to a fish, his mustache was depicted as a fishbone, and various elements from his artworks were collaged to form a fish-like portrait.",
    korDescription:
      "살바도르 달리의 작품 세계를 담은 추상 초상화입니다. 달리의 작품을 Stable Diffusion을 활용해 움직이는 명화로 재구성하여 그의 작품에서 드러나는 초현실적이고 편집증적인 면모를 부각하였습니다. 달리가 스스로를 물고기에 자주 빗대었듯, 수염을 물고기의 뼈대로 활용하고 작품 요소들을 콜라쥬하여 한 마리의 물고기로 초상을 그려내었습니다.",
    mainCategory: "Video, 1min 3sec",
    category: "Video, Collage",
    tools: "Adobe Photoshop, Illustrator, Stable Diffusion",
    image: getImageArray("salvadordali", 24),
  },
  {
    name: "Code-based Artworks",
    year: "2023",
    link: "",
    engDescription:
      "This is an abstract illustration drawn on a web canvas using p5.js.",
    korDescription: "p5.js로 웹 캔버스에 구현한 추상 일러스트레이션입니다.",
    mainCategory: "Coded illustration",
    category: "Coded Illustration, Graphic Design",
    tools: "JS Canvas, p5.js",
    image: getImageArray("codedartworks", 4),
  },
  {
    name: "Waffle Life",
    year: "2022",
    link: "",
    engDescription:
      "Waffle Life is a multiplayer mobile nurturing game where players raise a waffle character together. It won 2nd place at the hackathon 'Interactions Never Seen Before', hosted by our web development club. I created the game’s icon and pixel art for the characters.",
    korDescription:
      "Waffle Life는 여러 명이 함께 와플 캐릭터를 키워내는 모바일 양육 게임으로, 웹 개발 동아리에서 주최한 해커톤 ‘세상에 없던 인터랙션’에서 2위를 수상하였습니다. 게임 아이콘 및 캐릭터 픽셀아트를 작업하였습니다.",
    mainCategory: "Mobile Game",
    category: "Mobile UX/UI Design, Graphic Design",
    tools: "Figma, Adobe Illustrator, AfterEffects",
    image: getImageArray("wafflelife", 3),
  },
  {
    name: "LinkBoggle!",
    year: "2024",
    link: "",
    engDescription:
      "Created a board game that integrates a web-based interface, inspired by the board game Labyrinth. Players draw a menu card and must complete a dish by connecting the correct ingredients to the stove for a set amount of time, following on-screen instructions. The game features a specially designed board embedded with conductive circuits that detect block movements. When players connect ingredients to the stove by shifting blocks on the board, the system recognizes the circuit connection, triggering the cooking process on the screen. I designed the graphics for the menu, ingredient cards, and game interface.",
    korDescription:
      "보드게임 Labyrinth를 변형하여 웹 화면이 결합된 보드게임 이어보글!을 제작하였습니다. 요리할 메뉴 카드를 뽑고, 화면의 지시에 따라 알맞은 재료를 일정 시간 이상 화로에 연결하여 요리를 완성해야 합니다. 전도체와 회로가 부착된 특수제작 보드판에서 블록을 움직여 재료와 화로를 연결하면, 보드판의 회로를 통해 이를 감지하고 화면에서 해당 재료가 요리됩니다. 메뉴와 재료의 그래픽과 카드, 게임 화면을 디자인하였습니다.",
    mainCategory: "Board Game",
    category: "UX/UI Design, Graphic Design",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("linkboggle", 2),
  },
  {
    name: "Seeya",
    year: "2024",
    link: "",
    engDescription:
      "Seeya is a photo challenge SNS designed to introduce users to new spaces, people, and experiences on campus. By uploading a photo of their schedule, the platform uses computer vision to analyze the timetable and recommend nearby locations that fit their free periods. When notified, users can visit the suggested location and capture a photo resembling the provided reference image. Multi-modal AI evaluates the similarity between the two images, providing a score and feedback based on how closely they match. Through these challenges, users can discover unfamiliar corners of their school, share their experiences, and inspire others to explore and connect.",
    korDescription:
      "Seeya는 학교의 새로운 공간, 사람들, 경험으로 이끄는 사진 챌린지 SNS입니다. 시간표 사진을 입력하면, 컴퓨터 비전 이미지 처리를 통해 이를 인식하고 공강 시간에 맞추어 방문하기 적절한 거리의 장소를 사진을 통해 추천합니다. 알림이 오면, 사용자는 즉시 그 사진 속 공간으로 가서 제시된 사진과 유사한 사진을 찍어야합니다. 찍은 사진은 Multi-modal AI를 사용해 이미지 유사도를 측정하고, 기존 사진과 얼마나 유사한 공간 및 사진인지 점수와 평가를 도출합니다. 이러한 챌린지를 바탕으로 학교의 생소한 공간들을 방문하고, 사진과 일상을 공유하며 다른 사람들의 발걸음을 이끌 수도 있습니다.",
    mainCategory: "Website",
    category: "Mobile UX/UI Design, Service Design",
    tools: "Figma, Adobe Illustrator",
    image: getImageArray("seeya", 7),
  },
  {
    name: "Find Waffle",
    year: "2024",
    link: "https://interactive-study.wafflestudio.com/projects/find-waffle/",
    engDescription:
      "Find Waffle is a puzzle-adventure game that uses optical illusions and 2D-to-3D dimensional shifts to challenge players to find a hidden waffle. Built with Three.js, the game allows players to enjoy a 3D experience directly in a web browser. I contributed to the game's planning and level design, creating 3D models of characters and an 11x11x11 grid map in a cartoon style.",
    korDescription:
      "Find Waffle은 착시와 2D-3D 차원 전환을 활용해 와플을 찾는 퍼즐 어드벤처 게임입니다. Three.js를 기반으로 제작되어 웹 환경에서 3D 게임을 즐길 수 있습니다. 게임 기획과 레벨 디자인에 참여하고 미국 카툰 스타일의 11x11x11 그리드 맵과 캐릭터를 3D 모델링하였습니다.",
    mainCategory: "Web game",
    category: "3D Graphic, UX/UI Design, Level Design",
    tools: "Spline, Figma",
    image: getImageArray("findwaffle", 10),
  },
  {
    name: "ISC Student Work Exhibition",
    year: "2024",
    link: "",
    engDescription:
      "Designed promotional materials for the 2024 Spring Semester Student Work Exhibition of Seoul National University's Information Science and Culture Studies. The overall tone was inspired by motifs of moving companies and boxes, which were reflected in the designs for posters, banners, and other materials.",
    korDescription:
      "서울대학교 연합전공 정보문화학의2024년도 1학기 과제전의 홍보물을 작업하였습니다. 이삿짐 센터, 박스의 모티프를 바탕으로 전체적인 톤을 맞추고 포스터, 현수막 등을 디자인하였습니다.",
    mainCategory: "Poster, 594 x 841mm",
    category: "Poster, Graphic Design",
    tools: "Adobe Photoshop, Illustrator",
    image: getImageArray("iscexhibition", 5),
  },
  {
    name: "MOI Block Puzzle",
    year: "2024",
    link: "https://coco-ball.github.io/block-puzzle/",
    engDescription:
      "Implemented a sliding block puzzle from the Museum of Illusion as a web game. It was designed to highlight the texture of paper through patterns and textures, and it was developed using React and Tailwind to ensure seamless graphic rendering across all screen resolutions.",
    korDescription:
      "Museum of Illusion에서 풀지 못한 슬라이딩 블록 퍼즐을 웹 게임으로 구현하였습니다. 패턴과 텍스쳐를 통해 종이 질감을 강조하여 디자인하였고, React와 Tailwind를 바탕으로 모든 해상도에 그래픽 붕괴 없이 대응할 수 있도록 개발하였습니다.",
    mainCategory: "Web Game",
    category: "UX/UI Design, Graphic Design, Website Development",
    tools: "React, Figma, Adobe Illustrator",
    image: getImageArray("blockpuzzle", 4),
  },
  {
    name: "The Picture of Dorian Gray",
    year: "2024",
    link: "",
    engDescription: "",
    korDescription: "",
    mainCategory: "Video, 5min",
    category: "Video",
    tools: "Adobe Photoshop, After Effect",
    image: getImageArray("doriangray", 5),
  },
  {
    name: "Wemade Co. ERP",
    year: "2025",
    link: "",
    engDescription: "",
    korDescription: "",
    mainCategory: "SaaS",
    category: "UX/UI Design",
    tools: "Figma",
    image: getImageArray("wemade", 2),
  },
];

export default projectData;
