# Phase 0: 준비 및 검증 (Week 1-4)

## 📋 현황 분석 결과

### 기존 파일 구조 (2025-11-14 분석)
```
andong-esg-beauty/
├── app/
│   ├── layout.tsx              # 글로벌 레이아웃
│   ├── page.tsx                # 홈페이지 (한국어 단일)
│   ├── story/page.tsx          # ESG 스토리
│   ├── store/page.tsx          # 오프라인 매장
│   ├── products/               # 제품 관련 (미구현)
│   ├── checkout/               # 결제 (미구현)
│   └── admin/                  # 관리자 (미구현)
├── components/
│   ├── layout/Header.tsx       # 헤더
│   └── product/ProductCard.tsx # 제품 카드
├── lib/                        # 유틸리티 (비어있음)
├── public/                     # 정적 파일
└── docs/
    ├── PHASE_1_ANALYSIS.md
    └── MIGRATION_PLAN.md
```

### 재사용 가능 항목
✅ **유지**:
- Next.js 14 설정
- Tailwind CSS 설정
- TypeScript 설정
- 기본 컴포넌트 구조 (`Header.tsx`, `ProductCard.tsx`)

⚠️ **수정 필요**:
- `app/page.tsx` - 다국어 라우팅 구조로 변경
- `components/product/ProductCard.tsx` - Cultural Edition 지원
- Tailwind 색상 팔레트 - 브랜드 리뉴얼

❌ **제거 예정**:
- `app/store/page.tsx` - 월영교 매장 특화 내용 (글로벌 무관)
- 안동 지역 특화 콘텐츠

---

## 🎯 Week 1-2: 코드베이스 분석 및 재구조화

### Task 1.1: 디렉터리 구조 재설계
**목표**: 다국어 + Co-creation 지원 구조

**새 구조**:
```
andong-esg-beauty/  (프로젝트명 변경 예정)
├── app/
│   ├── [locale]/              # 다국어 라우팅
│   │   ├── layout.tsx
│   │   ├── page.tsx           # 국가별 홈
│   │   ├── editions/          # Cultural Editions
│   │   │   ├── [country]/
│   │   │   │   ├── page.tsx   # 에디션 상세
│   │   │   │   ├── development/
│   │   │   │   └── timeline/
│   │   ├── community/         # Co-creation 플랫폼
│   │   │   ├── page.tsx
│   │   │   ├── survey/
│   │   │   ├── vote/
│   │   │   └── fgd/
│   │   ├── crowdfunding/      # 크라우드펀딩
│   │   └── b2b/               # B2B 포털
│   ├── api/                   # API Routes
│   │   ├── cocreation/
│   │   ├── ab-tests/
│   │   └── crowdfunding/
│   └── middleware.ts          # locale 감지
├── components/
│   ├── cocreation/            # Co-creation 전용
│   ├── editions/              # 에디션 관련
│   ├── compliance/            # 규제 체크리스트
│   └── ...
├── lib/
│   ├── i18n/                  # 다국어 설정
│   ├── ab-testing/            # A/B 테스트 로직
│   ├── crowdfunding/          # 펀딩 API
│   └── compliance/            # 규제 관리
├── prisma/                    # DB 스키마
│   └── schema.prisma
├── messages/                  # 다국어 파일
│   ├── ja.json
│   ├── ko.json
│   ├── fr.json
│   └── en-US.json
└── public/
    ├── editions/              # 에디션별 이미지
    └── brands/                # 브랜드 자산
```

### Task 1.2: 기술 부채 식별
**발견된 문제**:
1. ❌ DB 연동 없음 (현재 하드코딩)
2. ❌ 인증 시스템 없음
3. ❌ API Routes 미구현
4. ❌ 테스트 코드 없음
5. ⚠️ 환경 변수 설정 부재

**해결 계획**:
- Prisma ORM 도입
- NextAuth.js 추가 (일본 소셜 로그인 지원)
- API Routes 구현
- Vitest + Playwright 테스트 환경 구축

---

## 🎯 Week 3-4: 아키텍처 설계

### Task 3.1: DB 스키마 설계 (Prisma)

**생성 파일**: `prisma/schema.prisma`

```prisma
// Prisma Schema v2.0 - Co-creation Platform

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 사용자
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  country       String?  // JP, FR, US, KR
  locale        String   @default("ko")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  votes         Vote[]
  surveyResponses SurveyResponse[]
  fgdParticipations FGDParticipation[]
  orders        Order[]
}

// 베이스 제품 (K-뷰티 원료/기술)
model BaseProduct {
  id            String   @id @default(cuid())
  nameKo        String
  nameEn        String
  description   String
  ingredients   String   // JSON
  technology    String   // 핵심 기술
  createdAt     DateTime @default(now())
  
  editions      CulturalEdition[]
}

// 국가별 Cultural Edition
model CulturalEdition {
  id                String   @id @default(cuid())
  baseProductId     String
  country           String   // JP, FR, US, SEA
  nameLocal         String   // 현지어 이름
  status            String   // RESEARCH, PROTOTYPE, TESTING, FUNDING, LAUNCHED
  
  // Cultural Elements
  scent             String?  // 국가별 선호 향
  packaging         String?  // 용기 디자인
  localIngredients  String?  // JSON array
  culturalStory     String?  // 문화적 배경
  
  // 가격 정보
  price             Int      // 원화 기준
  priceLocal        Int?     // 현지 통화
  currency          String   @default("KRW")
  
  // Co-creation 데이터
  fgdCompleted      Boolean  @default(false)
  prototypeReady    Boolean  @default(false)
  abTestCompleted   Boolean  @default(false)
  
  launchDate        DateTime?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  baseProduct       BaseProduct @relation(fields: [baseProductId], references: [id])
  abTests           ABTest[]
  surveys           Survey[]
  crowdfunding      CrowdfundingCampaign?
  complianceChecks  ComplianceCheck[]
}

// A/B 테스트
model ABTest {
  id          String   @id @default(cuid())
  editionId   String
  testType    String   // SCENT, PACKAGING, DESIGN, NAME
  title       String
  description String
  variants    String   // JSON array of variants
  startDate   DateTime
  endDate     DateTime
  winner      String?  // 승자 variant ID
  status      String   @default("ACTIVE") // ACTIVE, COMPLETED, CANCELLED
  
  createdAt   DateTime @default(now())
  
  edition     CulturalEdition @relation(fields: [editionId], references: [id])
  votes       Vote[]
}

// 투표
model Vote {
  id          String   @id @default(cuid())
  abTestId    String
  userId      String
  variantId   String
  comment     String?
  votedAt     DateTime @default(now())
  
  abTest      ABTest   @relation(fields: [abTestId], references: [id])
  user        User     @relation(fields: [userId], references: [id])
  
  @@unique([abTestId, userId]) // 1인 1투표
}

// 설문
model Survey {
  id          String   @id @default(cuid())
  editionId   String
  title       String
  questions   String   // JSON array
  startDate   DateTime
  endDate     DateTime
  status      String   @default("ACTIVE")
  
  createdAt   DateTime @default(now())
  
  edition     CulturalEdition @relation(fields: [editionId], references: [id])
  responses   SurveyResponse[]
}

model SurveyResponse {
  id          String   @id @default(cuid())
  surveyId    String
  userId      String
  answers     String   // JSON
  submittedAt DateTime @default(now())
  
  survey      Survey   @relation(fields: [surveyId], references: [id])
  user        User     @relation(fields: [userId], references: [id])
}

// FGD (Focus Group Discussion)
model FGDSession {
  id          String   @id @default(cuid())
  title       String
  country     String
  scheduledAt DateTime
  duration    Int      // 분
  maxParticipants Int
  status      String   @default("SCHEDULED") // SCHEDULED, COMPLETED, CANCELLED
  notes       String?
  
  createdAt   DateTime @default(now())
  
  participants FGDParticipation[]
}

model FGDParticipation {
  id          String   @id @default(cuid())
  fgdId       String
  userId      String
  status      String   @default("REGISTERED") // REGISTERED, ATTENDED, NO_SHOW
  feedback    String?
  
  joinedAt    DateTime @default(now())
  
  fgd         FGDSession @relation(fields: [fgdId], references: [id])
  user        User     @relation(fields: [userId], references: [id])
}

// 크라우드펀딩
model CrowdfundingCampaign {
  id          String   @id @default(cuid())
  editionId   String   @unique
  platform    String   // CAMPFIRE, KICKSTARTER
  platformUrl String?
  goal        Int      // 목표 금액
  raised      Int      @default(0)
  backers     Int      @default(0)
  startDate   DateTime
  endDate     DateTime
  status      String   @default("UPCOMING") // UPCOMING, ACTIVE, FUNDED, FAILED
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  edition     CulturalEdition @relation(fields: [editionId], references: [id])
}

// 규제 컴플라이언스 체크리스트
model ComplianceCheck {
  id          String   @id @default(cuid())
  editionId   String
  country     String
  checkType   String   // INGREDIENTS, LABELING, CERTIFICATION
  status      String   @default("PENDING") // PENDING, IN_REVIEW, APPROVED, REJECTED
  certifications String? // JSON array (FSC, FDA, CPNP)
  notes       String?
  reviewedBy  String?
  reviewedAt  DateTime?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  edition     CulturalEdition @relation(fields: [editionId], references: [id])
}

// 주문 (간소화)
model Order {
  id          String   @id @default(cuid())
  userId      String
  items       String   // JSON
  total       Int
  currency    String
  status      String   @default("PENDING")
  
  createdAt   DateTime @default(now())
  
  user        User     @relation(fields: [userId], references: [id])
}
```

### Task 3.2: API 명세서 작성

**생성 파일**: `docs/API_SPEC_v2.md`

**핵심 엔드포인트**:
```
POST   /api/cocreation/surveys          # 설문 생성
POST   /api/cocreation/surveys/[id]/respond  # 설문 응답
GET    /api/cocreation/surveys/[id]/results  # 결과 조회

POST   /api/ab-tests                    # A/B 테스트 생성
POST   /api/ab-tests/[id]/vote          # 투표
GET    /api/ab-tests/[id]/results       # 결과 조회

POST   /api/fgd/sessions                # FGD 세션 생성
POST   /api/fgd/sessions/[id]/register  # 참여 신청

GET    /api/editions                    # 에디션 목록
GET    /api/editions/[country]          # 국가별 에디션
POST   /api/editions/[id]/launch        # 출시

POST   /api/crowdfunding/campaigns      # 캠페인 생성
GET    /api/crowdfunding/[id]/progress  # 진행 현황

GET    /api/compliance/checklists       # 체크리스트 조회
POST   /api/compliance/check            # 규제 검토
```

### Task 3.3: 인프라 계획

**필요 서비스**:
1. **DB**: Supabase PostgreSQL (무료 티어 시작)
2. **파일 스토리지**: Cloudflare R2 (이미지)
3. **CDN**: Cloudflare (일본 엣지 서버)
4. **인증**: NextAuth.js + 일본 소셜 로그인
5. **결제**: Stripe (국제 결제) + 토스페이먼츠 (국내)
6. **메일**: Resend (트랜잭션 메일)

**환경 변수** (`.env.local`):
```bash
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Japan Social Login
LINE_CLIENT_ID="..."
LINE_CLIENT_SECRET="..."

# Payment
STRIPE_SECRET_KEY="..."
TOSS_CLIENT_KEY="..."

# Storage
R2_ACCOUNT_ID="..."
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."

# Crowdfunding
CAMPFIRE_API_KEY="..."

# Email
RESEND_API_KEY="..."
```

---

## ✅ Phase 0 완료 기준

### Week 1-2 체크리스트
- [ ] 기존 코드 전체 감사 완료
- [ ] 재사용/수정/제거 항목 분류
- [ ] 새 디렉터리 구조 설계 문서화
- [ ] 기술 부채 해결 계획 수립

### Week 3-4 체크리스트
- [ ] Prisma 스키마 작성 완료
- [ ] API 명세서 v2.0 작성
- [ ] 인프라 서비스 선정 및 계정 생성
- [ ] 환경 변수 템플릿 작성
- [ ] Phase 1 킥오프 준비 완료

### 산출물
1. `docs/PHASE_0_PREPARATION.md` (이 문서)
2. `prisma/schema.prisma` (DB 스키마)
3. `docs/API_SPEC_v2.md` (API 명세)
4. `.env.example` (환경 변수 템플릿)
5. `docs/INFRASTRUCTURE.md` (인프라 계획)

---

## 🚀 다음 단계: Phase 1

Phase 0 완료 후 진행:
1. Prisma 마이그레이션 실행
2. 다국어 라우팅 구조 생성
3. 기본 Co-creation 컴포넌트 개발
4. 일본어 번역 시작

---

**작성일**: 2025-11-14  
**상태**: 진행 중  
**담당**: 개발팀
