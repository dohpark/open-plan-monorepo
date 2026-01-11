# Open Plan Monorepo

과제 제출용 이미지 뷰어 애플리케이션

## 기술 스택

### Core

- **Monorepo**: Turborepo
- **Package Manager**: pnpm 9.0.0
- **Language**: TypeScript 5.9
- **Node.js**: 20.19+ 또는 22.12+ (Storybook 요구사항)

### Frontend

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.1.1
- **State Management**: Zustand 5.0.9
- **Data Fetching**: TanStack Query 5.90.16
- **Styling**: Tailwind CSS 4.0.0
- **UI Components**: Custom shared components (`@repo/ui`)

### Development Tools

- **Linting**: ESLint 9.39.1
- **Formatting**: Prettier 3.7.4
- **Type Checking**: TypeScript
- **UI Development**: Storybook

## 실행 방법

### 사전 요구사항

- Node.js 20.19+ 또는 22.12+ (Storybook 사용 시 필수)
- pnpm 9.0.0 이상

### 설치

```bash
# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 모든 워크스페이스의 개발 서버 실행
pnpm dev

# 또는 web 앱만 실행
cd apps/web
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

### 빌드

```bash
# 프로덕션 빌드
pnpm build
```

### 기타 명령어

```bash
# 린트
pnpm lint

# 타입 체크
pnpm check-types

# 포맷팅
pnpm format
```

## 주요 기능 설명

### 1. 메인 페이지 (`/`)

- 사용자 이름을 표시하는 인사 페이지
- "다음" 버튼 클릭 시 이미지 데이터를 Picsum API에서 가져옴
- 버튼 클릭은 throttle 적용으로 중복 클릭 방지
- 이미지 데이터 로딩 중 로딩 상태 표시
- 이미 데이터를 가져온 경우 결과 페이지로 자동 리다이렉트

### 2. 결과 페이지 (`/result`)

- 메인 페이지에서 가져온 이미지를 표시
- 이미지를 배경으로 사용하는 풀스크린 레이아웃
- 이미지 메타데이터를 카드 형식으로 표시:
  - **ID**: 이미지 고유 ID
  - **Author**: 이미지 저자
  - **Width**: 이미지 너비 (천 단위 구분 기호 포함)
  - **Height**: 이미지 높이 (천 단위 구분 기호 포함)
  - **URL**: 이미지 페이지 URL (클릭 가능)
  - **Download URL**: 이미지 다운로드 URL (클릭 가능)
- 반응형 디자인:
  - **모바일**: 이미지와 카드가 세로로 배치 (stacked layout)
  - **태블릿**: 모바일과 유사하지만 카드 내부 그리드 레이아웃 및 간격 조정
  - **데스크톱**: 이미지와 카드가 가로로 배치되며 화면 중앙에 정렬
- 이미지 로딩 중 스켈레톤 UI 표시
- "이전" 버튼으로 메인 페이지로 이동
- 데이터가 없는 경우 메인 페이지로 자동 리다이렉트

### 3. 상태 관리

- **Zustand**: 이미지 데이터와 조회 이력을 전역 상태로 관리
- **TanStack Query**: 이미지 데이터 fetching 및 이미지 프리로딩 관리
- 페이지 간 상태 유지 (메인 페이지에서 가져온 데이터가 결과 페이지에서 유지됨)

### 4. 라우팅 보호

- 결과 페이지: 이미지 데이터가 없으면 메인 페이지로 리다이렉트
- 메인 페이지: 이미 이미지 데이터가 있으면 결과 페이지로 리다이렉트

### 5. API 통합

- Picsum Photos API를 사용하여 이미지 데이터 가져오기
- 이미지 프리로딩을 통한 성능 최적화

### 6. 사용자 경험

- 버튼 클릭 throttle 적용
- 로딩 상태 표시
- 반응형 디자인으로 다양한 디바이스 지원
- 부드러운 페이지 전환 애니메이션

## 프로젝트 구조

```
open-plan/
├── apps/
│   ├── web/              # 메인 웹 애플리케이션
│   │   ├── src/
│   │   │   ├── api/      # API 관련 코드
│   │   │   ├── hooks/    # Custom hooks
│   │   │   ├── pages/    # 페이지 컴포넌트
│   │   │   ├── stores/   # 상태 관리 (Zustand)
│   │   │   └── App.tsx   # 메인 앱 컴포넌트
│   │   └── package.json
│   └── storybook/        # Storybook
├── packages/
│   ├── ui/               # 공유 UI 컴포넌트 라이브러리
│   ├── eslint-config/    # 공유 ESLint 설정
│   ├── tailwind-config/  # 공유 Tailwind 설정
│   └── typescript-config/# 공유 TypeScript 설정
├── package.json
└── turbo.json            # Turborepo 설정
```

## GitHub / 배포 URL

### GitHub Repository

<!-- GitHub 저장소 URL을 여기에 추가하세요 -->

- Repository: (추가 예정)

### 배포 URL

<!-- 배포된 사이트 URL을 여기에 추가하세요 -->

- 배포 사이트: (추가 예정)

---

## 개발 환경

- 개발자: 박도희
- 프로젝트명: Open Plan Monorepo
- 생성일: 2026-01-10
