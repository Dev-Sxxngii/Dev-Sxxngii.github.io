const projects = [
  {
    title: "이미지 리터칭 자동화",
    desc: "파이프라인 스크립트로 일괄 보정/리사이즈/워터마크",
    stack: ["Python", "Pillow"],
    cover: "/images/temp.png",
    video: "https://www.youtube.com/watch?v=HaYNqWBaanI",
    links: { github: "https://github.com/yourname/repo", notion: "https://www.notion.com/ko/product" },
    detail: {
      period: "2024.03–2024.04",     // 기간
      team: "개인",                   // 팀
      role: "파이프라인 설계·구현",   // 역할

      goals: [
        "대량 이미지 보정/리사이즈/워터마크 일괄 처리",
        "설정 파일 기반으로 재현 가능한 실행"
      ],
      approach: [ /* 기존과 동일 */ ],
      designDecisions: [             // 설계 결정(추천)
        "동시 처리(작업 큐)로 I/O 병목 완화",
        "YAML 설정으로 파라미터 버저닝"
      ],
      issues: [                      // 이슈 & 해결 (권장 형식)
        { issue: "색공간에 따른 결과 편차", solution: "프로파일 통일 + 변환 단계 추가" },
        { issue: "워터마크 품질 저하", solution: "알파 합성 방식 변경, 샘플링 조정" }
      ],
      features: [
        "밝기/대비/샤픈 자동 보정",
        "여러 사이즈 동시 리사이즈 (SNS 프리셋)",
        "워터마크 위치/투명도 커스텀"
      ]
    },
  },
  {
    title: "이미지 리터칭 자동화",
    desc: "파이프라인 스크립트로 일괄 보정/리사이즈/워터마크",
    stack: ["Python", "Pillow"],
    cover: "/images/temp.png",
    video: "https://www.youtube.com/watch?v=HaYNqWBaanI",
    links: { github: "https://github.com/yourname/repo", notion: "https://www.notion.com/ko/product" },
    detail: {
      period: "2024.03–2024.04",     // 기간
      team: "개인",                   // 팀
      role: "파이프라인 설계·구현",   // 역할

      goals: [
        "대량 이미지 보정/리사이즈/워터마크 일괄 처리",
        "설정 파일 기반으로 재현 가능한 실행"
      ],
      approach: [ /* 기존과 동일 */ ],
      designDecisions: [             // 설계 결정(추천)
        "동시 처리(작업 큐)로 I/O 병목 완화",
        "YAML 설정으로 파라미터 버저닝"
      ],
      issues: [                      // 이슈 & 해결 (권장 형식)
        { issue: "색공간에 따른 결과 편차", solution: "프로파일 통일 + 변환 단계 추가" },
        { issue: "워터마크 품질 저하", solution: "알파 합성 방식 변경, 샘플링 조정" }
      ],
      features: [
        "밝기/대비/샤픈 자동 보정",
        "여러 사이즈 동시 리사이즈 (SNS 프리셋)",
        "워터마크 위치/투명도 커스텀"
      ]
    },
  },
  {
    title: "이미지 리터칭 자동화",
    desc: "파이프라인 스크립트로 일괄 보정/리사이즈/워터마크",
    stack: ["Python", "Pillow"],
    cover: "/images/temp.png",
    video: "https://www.youtube.com/watch?v=HaYNqWBaanI",
    links: { github: "https://github.com/yourname/repo", notion: "https://www.notion.com/ko/product" },
    detail: {
      period: "2024.03–2024.04",     // 기간
      team: "개인",                   // 팀
      role: "파이프라인 설계·구현",   // 역할

      goals: [
        "대량 이미지 보정/리사이즈/워터마크 일괄 처리",
        "설정 파일 기반으로 재현 가능한 실행"
      ],
      approach: [ /* 기존과 동일 */ ],
      designDecisions: [             // 설계 결정(추천)
        "동시 처리(작업 큐)로 I/O 병목 완화",
        "YAML 설정으로 파라미터 버저닝"
      ],
      issues: [                      // 이슈 & 해결 (권장 형식)
        { issue: "색공간에 따른 결과 편차", solution: "프로파일 통일 + 변환 단계 추가" },
        { issue: "워터마크 품질 저하", solution: "알파 합성 방식 변경, 샘플링 조정" }
      ],
      features: [
        "밝기/대비/샤픈 자동 보정",
        "여러 사이즈 동시 리사이즈 (SNS 프리셋)",
        "워터마크 위치/투명도 커스텀"
      ]
    },
  },
  {
    title: "이미지 리터칭 자동화",
    desc: "파이프라인 스크립트로 일괄 보정/리사이즈/워터마크",
    stack: ["Python", "Pillow"],
    cover: "/images/temp.png",
    video: "https://www.youtube.com/watch?v=HaYNqWBaanI",
    links: { github: "https://github.com/yourname/repo", notion: "https://www.notion.com/ko/product" },
    detail: {
      period: "2024.03–2024.04",     // 기간
      team: "개인",                   // 팀
      role: "파이프라인 설계·구현",   // 역할

      goals: [
        "대량 이미지 보정/리사이즈/워터마크 일괄 처리",
        "설정 파일 기반으로 재현 가능한 실행"
      ],
      approach: [ /* 기존과 동일 */ ],
      designDecisions: [             // 설계 결정(추천)
        "동시 처리(작업 큐)로 I/O 병목 완화",
        "YAML 설정으로 파라미터 버저닝"
      ],
      issues: [                      // 이슈 & 해결 (권장 형식)
        { issue: "색공간에 따른 결과 편차", solution: "프로파일 통일 + 변환 단계 추가" },
        { issue: "워터마크 품질 저하", solution: "알파 합성 방식 변경, 샘플링 조정" }
      ],
      features: [
        "밝기/대비/샤픈 자동 보정",
        "여러 사이즈 동시 리사이즈 (SNS 프리셋)",
        "워터마크 위치/투명도 커스텀"
      ]
    },
  },
  {
    title: "이미지 리터칭 자동화",
    desc: "파이프라인 스크립트로 일괄 보정/리사이즈/워터마크",
    stack: ["Python", "Pillow"],
    cover: "/images/temp.png",
    video: "https://www.youtube.com/watch?v=HaYNqWBaanI",
    links: { github: "https://github.com/yourname/repo", notion: "https://www.notion.com/ko/product" },
    detail: {
      period: "2024.03–2024.04",     // 기간
      team: "개인",                   // 팀
      role: "파이프라인 설계·구현",   // 역할

      goals: [
        "대량 이미지 보정/리사이즈/워터마크 일괄 처리",
        "설정 파일 기반으로 재현 가능한 실행"
      ],
      approach: [ /* 기존과 동일 */ ],
      designDecisions: [             // 설계 결정(추천)
        "동시 처리(작업 큐)로 I/O 병목 완화",
        "YAML 설정으로 파라미터 버저닝"
      ],
      issues: [                      // 이슈 & 해결 (권장 형식)
        { issue: "색공간에 따른 결과 편차", solution: "프로파일 통일 + 변환 단계 추가" },
        { issue: "워터마크 품질 저하", solution: "알파 합성 방식 변경, 샘플링 조정" }
      ],
      features: [
        "밝기/대비/샤픈 자동 보정",
        "여러 사이즈 동시 리사이즈 (SNS 프리셋)",
        "워터마크 위치/투명도 커스텀"
      ]
    },
  },
  {
    title: "이미지 리터칭 자동화",
    desc: "파이프라인 스크립트로 일괄 보정/리사이즈/워터마크",
    stack: ["Python", "Pillow"],
    cover: "/images/temp.png",
    video: "https://www.youtube.com/watch?v=HaYNqWBaanI",
    links: { github: "https://github.com/yourname/repo", notion: "https://www.notion.com/ko/product" },
    detail: {
      period: "2024.03–2024.04",     // 기간
      team: "개인",                   // 팀
      role: "파이프라인 설계·구현",   // 역할

      goals: [
        "대량 이미지 보정/리사이즈/워터마크 일괄 처리",
        "설정 파일 기반으로 재현 가능한 실행"
      ],
      approach: [ /* 기존과 동일 */ ],
      designDecisions: [             // 설계 결정(추천)
        "동시 처리(작업 큐)로 I/O 병목 완화",
        "YAML 설정으로 파라미터 버저닝"
      ],
      issues: [                      // 이슈 & 해결 (권장 형식)
        { issue: "색공간에 따른 결과 편차", solution: "프로파일 통일 + 변환 단계 추가" },
        { issue: "워터마크 품질 저하", solution: "알파 합성 방식 변경, 샘플링 조정" }
      ],
      features: [
        "밝기/대비/샤픈 자동 보정",
        "여러 사이즈 동시 리사이즈 (SNS 프리셋)",
        "워터마크 위치/투명도 커스텀"
      ]
    },
  },
];
export default projects;
