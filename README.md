# Co-creation 글로벌 K-뷰티 플랫폼

> 국가별 문화 정체성을 반영한 프리미엄 K-뷰티 에디션

## 📋 프로젝트 개요

**브랜드 컨셉**: K-뷰티의 검증된 원료·기술 + 국가별 Cultural Identity  
**핵심 가치**: Co-creation (고객 참여형 제품 개발)  
**타겟**: 글로벌 뷰티 시장 (일본 우선 → 프랑스, 미국, 동남아)

## 🎯 핵심 비즈니스 모델

### Co-creation 5단계 프로세스
1. **유저 리서치** - FGD + 온라인 커뮤니티 + 설문
2. **프로토타입 개발** - 샘플 3종 제작
3. **A/B 테스트** - 국가별 소비자 테스트
4. **공동 제작** - 디자인/용기/향 투표 선택
5. **크라우드펀딩** - CAMPFIRE/Makuake 론칭

### 차별화 포인트 (USP)
- 국가별 환경·피부·문화 맞춤형 현지화
- 고객 참여형 개발 프로세스
- Cultural Identity 반영 디자인
- 규제 컴플라이언스 체크리스트 자동화

## 🚀 빠른 시작

```bash
# 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# DB 초기화
npm run db:push
npm run db:seed

# 프로덕션 빌드
npm run build
```

## 📁 프로젝트 구조

```
kbeauty-cocreation/
├── app/
│   ├── [locale]/              # 다국어 라우팅 (ko, ja, en-US, fr)
│   │   ├── page.tsx           # 홈
│   │   ├── editions/          # Cultural Editions
│   │   │   ├── page.tsx       # 에디션 목록
│   │   │   └── [slug]/        # 에디션 상세
│   │   ├── community/         # Co-creation 플랫폼 (예정)
│   │   └── crowdfunding/      # 크라우드펀딩 (예정)
│   └── api/
│       ├── editions/          # Edition CRUD
│       ├── ab-tests/          # A/B 테스트 (예정)
│       └── surveys/           # 설문 (예정)
├── components/
│   ├── cocreation/            # Co-creation 컴포넌트
│   ├── editions/              # Edition 관련
│   └── compliance/            # 규제 체크리스트
├── lib/
│   ├── db/                    # Prisma 쿼리 헬퍼
│   ├── i18n/                  # 다국어 설정
│   ├── ab-testing/            # A/B 테스트 로직
│   └── crowdfunding/          # 펀딩 API 연동
├── prisma/
│   ├── schema.prisma          # DB 스키마
│   └── seed.ts                # 시드 데이터
└── messages/                  # 다국어 번역 파일
    ├── ko.json
    ├── ja.json
    ├── en-US.json
    └── fr.json
```

## 🛠 기술 스택

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite (dev) → PostgreSQL (prod)
- **ORM**: Prisma
- **i18n**: next-intl
- **State**: Zustand + TanStack Query
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts (A/B 테스트 결과)
- **Auth**: NextAuth.js (예정)
- **Payment**: Stripe + 토스페이먼츠 (예정)

## 📊 현재 구현 상태

### ✅ Phase 0: 준비 및 검증 (완료)
- [x] Next.js 14 + TypeScript 설정
- [x] Prisma 스키마 설계 (11개 모델)
- [x] 다국어 시스템 (ko, ja, en-US, fr)
- [x] 환경 변수 템플릿

### ✅ Phase 1: 핵심 인프라 (완료 65%)
- [x] DB 클라이언트 + Edition CRUD
- [x] API Routes (`/api/editions`)
- [x] Edition 목록/상세 페이지
- [x] Seed 데이터 (일본 에디션)
- [ ] A/B 테스트 시스템
- [ ] 설문 시스템

### 🔄 Phase 2: Co-creation 플랫폼 (진행 예정)
- [ ] A/B 테스트 투표 UI
- [ ] 설문 참여 페이지
- [ ] FGD 신청 시스템
- [ ] 커뮤니티 허브

### 📝 Phase 3: 일본 에디션 MVP (진행 예정)
- [ ] 일본어 완전 현지화
- [ ] CAMPFIRE API 연동
- [ ] 클린뷰티 철학 페이지
- [ ] 성분 투명성 페이지

## 🌐 다국어 지원

현재 지원 언어:
- 🇰🇷 한국어 (ko)
- 🇯🇵 일본어 (ja)
- 🇺🇸 영어 (en-US)
- 🇫🇷 프랑스어 (fr)

접속 URL:
- http://localhost:3000/ko
- http://localhost:3000/ja
- http://localhost:3000/en-US
- http://localhost:3000/fr

## 📦 데이터베이스 모델

### 핵심 모델
- `BaseProduct` - K-뷰티 베이스 제품
- `CulturalEdition` - 국가별 에디션
- `ABTest` - A/B 테스트
- `Survey` - 설문
- `FGDSession` - Focus Group Discussion
- `CrowdfundingCampaign` - 크라우드펀딩
- `ComplianceCheck` - 규제 체크리스트
- `Order` - 주문
- `Influencer` - 인플루언서 협업

## 🧪 API 엔드포인트

```bash
# Editions
GET    /api/editions              # 전체 목록
GET    /api/editions?country=JP   # 국가별 필터
POST   /api/editions              # 생성 (관리자)

# A/B Tests (예정)
GET    /api/ab-tests
POST   /api/ab-tests/:id/vote

# Surveys (예정)
GET    /api/surveys
POST   /api/surveys/:id/respond
```

## 🔐 환경 변수

`.env.local` 파일 생성:
```bash
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"

# 일본 시장
LINE_CLIENT_ID="..."
LINE_CLIENT_SECRET="..."

# 크라우드펀딩
CAMPFIRE_API_KEY="..."
```

## 📈 목표 시장

### 우선 출시국: 일본
- 시장 규모: 약 320억 달러 (2024)
- K-뷰티 호감도: 높음
- MVP: 일본 한정판 올인원 에센스
- 가격: 5,980 JPY (약 65,000원)

### 확장 계획
- 2025년: 일본 출시
- 2026년: 프랑스, 미국
- 2027년: 동남아 (SEA)

## 📞 문의

- **Email**: contact@kbeauty-cocreation.com
- **Website**: https://kbeauty-cocreation.com

---

**Last Updated**: 2025-11-14  
**Version**: 2.0.0  
**Status**: Phase 1 In Progress

