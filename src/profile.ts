// 페이지에 보이는 모든 내용은 이 파일에서 고칩니다.
// 컴포넌트는 이 값을 읽어 그리기만 합니다.

export type Project = {
  name: string
  description: string
  tech: string[]
  url?: string
}

export type Game = {
  name: string
  description: string
  screenshot: string
  storeUrl: string
}

export type Profile = {
  name: string
  tagline: string
  about: string[]
  skills: { category: string; items: string[] }[]
  projects: Project[]
  games: Game[]
  contact: { github: string; email: string }
}

export const profile: Profile = {
  name: '이진석',
  tagline: '무궁무진한 호기심을 가진 잡식성 개발자',

  about: [
    '궁금한 건 일단 만들어 봐야 직성이 풀리는 잡식성 개발자입니다. Python, Node, Go, Rust를 가리지 않고 문제에 맞는 도구를 골라 씁니다.',
    '메인 디바이스는 M5 Pro입니다.',
    '좋아하는 운동은 숨쉬기이고, 쉬는 운동은 크로스핏과 요가입니다.',
  ],

  // TODO: "등"에 해당하는 나머지 기술 채우기
  skills: [
    { category: '언어', items: ['Python', 'Go', 'Rust'] },
    { category: '런타임', items: ['Node.js'] },
  ],

  // TODO: 실제 프로젝트로 바꾸기 (url 은 없으면 빼도 됩니다)
  projects: [
    {
      name: '자기소개 페이지',
      description: 'Vite + React + TypeScript로 만든 한 페이지짜리 자기소개 페이지입니다.',
      tech: ['React', 'TypeScript', 'Vite'],
      url: 'https://github.com/your-id/my-profile',
    },
    {
      name: '프로젝트 이름',
      description: '프로젝트에서 무엇을 만들었고 어떤 문제를 풀었는지 한두 문장으로 적어 주세요.',
      tech: ['React'],
    },
  ],

  // 이 컴퓨터에 설치된 Steam 게임 (2026-11-13 기준)
  // 설명·스크린샷은 Steam 상점 페이지에서 가져왔습니다.
  games: [
    {
      name: 'Terraria',
      description: '파고, 싸우고, 탐험하고, 짓는 액션 어드벤처 샌드박스 게임입니다. 이 세계에서 불가능한 일은 없습니다.',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.600x338.jpg?t=1792530636',
      storeUrl: 'https://store.steampowered.com/app/105600/',
    },
    {
      name: 'Baldur\'s Gate II: Enhanced Edition',
      description: '시대를 초월한 RPG 걸작으로 돌아오세요. 발더스 게이트 II: 강화판은 세심하고 현대적인 개선을 통해 클래식한 2000년도 어드벤처에 다시 생명력을 불어넣었습니다. 파티를 모아 중요한 선택을 하며 다시 한번 대서사시로 뛰어드세요.',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257350/ss_e7b9946871e2b7554dabf67725ecaf3c48f831bd.600x338.jpg?t=1793821593',
      storeUrl: 'https://store.steampowered.com/app/257350/',
    },
    {
      name: 'A Good Snowman Is Hard To Build',
      description: 'A Good Snowman Is Hard To Build는 괴물이 되어 눈사람을 만드는 사랑스러운 퍼즐 게임입니다.',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/316610/ss_da3e26349ea103358253c696383cb416e2489501.600x338.jpg?t=1791415261',
      storeUrl: 'https://store.steampowered.com/app/316610/',
    },
    {
      name: 'Stardew Valley',
      description: '할아버지가 남긴 낡은 농장을 물려받아, 물려받은 연장 몇 개와 동전 몇 닢으로 새 삶을 시작합니다. 잡초가 무성한 밭을 일궈 풍요로운 보금자리로 바꿀 수 있을까요?',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1786554168',
      storeUrl: 'https://store.steampowered.com/app/413150/',
    },
    {
      name: 'Graveyard Keeper',
      description: 'Punch Club 제작자들이 Graveyard Keeper로 돌아왔습니다. 역사상 가장 부정확한 고증을 자랑하는 중세 묘지 경영 시뮬레이션 게임으로 말이죠.',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/599140/ss_7616d4343808620c0853a9ee5f1e21597a20b042.600x338.jpg?t=1791579735',
      storeUrl: 'https://store.steampowered.com/app/599140/',
    },
    {
      name: '터미너스: 좀비 생존자들',
      description: '좀비 아포칼립스를 배경으로 하는 턴제 생존 로그라이크 게임입니다. 각 여정은 고유하며, 모든 결정이 삶과 죽음을 가를 수 있습니다. 배고픔과 추위, 그리고 좀비들로부터 살아남아 종착역에 도달할 수 있을까요?',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1534980/ss_469229d040ecfd1fef7bcd72633c42eeecaa8b75.600x338.jpg?t=1792375621',
      storeUrl: 'https://store.steampowered.com/app/1534980/',
    },
    {
      name: 'Vampire Survivors',
      description: '수많은 어둠의 피조물을 쓰러뜨리며 새벽이 올 때까지 생존하세요! 로그라이트 요소를 갖춘 고딕 호러 캐주얼 게임으로, 선택에 따라 순식간에 수백 마리의 괴물이 눈덩이처럼 불어납니다.',
      screenshot: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_6c55afe36be2a7784bf18cb9b3218321ae2d10e5.600x338.jpg?t=1794307910',
      storeUrl: 'https://store.steampowered.com/app/1794680/',
    },
  ],

  contact: {
    // TODO: 실제 GitHub 주소로 바꾸기
    github: 'https://github.com/your-id',
    // TODO: 실제 이메일 주소로 바꾸기
    email: 'you@example.com',
  },
}
