# 프로젝트 전환 계획: 안동 ESG → Co-creation 글로벌 K-뷰티

## 📋 전환 개요

### 현재 상태 (AS-IS)
- **브랜드**: 안동 ESG 뷰티 (Andong ESG Beauty)
- **컨셉**: 지역 순환경제 기여 로컬 뷰티
- **제품**: 안동 햄프씨 세럼(3만원), 지게미 팩(2.8만원)
- **타겟**: 트위터 20대 여성, 외국인 관광객
- **채널**: 온라인(자사몰) + 오프라인(월영교 기념품샵)
- **특징**: 단일 언어 중심, 지역 특화

### 전환 목표 (TO-BE)
- **브랜드**: Co-creation 기반 글로벌 로컬라이징 K-뷰티
- **컨셉**: 국가별 Cultural Identity 반영 프리미엄 에디션
- **제품**: 일본 한정판 올인원 에센스(6~7만원) → 국가별 확장
- **타겟**: 일본(1순위) → 프랑스, 미국, 동남아
- **채널**: 크라우드펀딩(CAMPFIRE) + 자사몰 + 현지 편집숍
- **특징**: Co-creation 플랫폼, 국가별 현지화, A/B 테스트

---

## 🎯 핵심 변경 사항

### 1. 비즈니스 모델 전환
| 구분 | AS-IS | TO-BE |
|------|-------|-------|
| **포지셔닝** | 지역 ESG 로컬 브랜드 | 글로벌 로컬라이징 K-뷰티 |
| **차별화** | 안동 지역 순환경제 | 국가별 Cultural Identity + Co-creation |
| **제품 개발** | 내부 기획 | 고객 참여형 5단계 프로세스 |
| **가격대** | 3만원 | 6~7만원 (프리미엄) |
| **출시 전략** | 동시 출시 | 국가별 순차 출시(일본 먼저) |

### 2. 기술 스택 변경 필요성
| 기능 | AS-IS | TO-BE | 우선순위 |
|------|-------|-------|----------|
| **다국어** | next-intl 설정만 | 일본어 완전 현지화 필수 | P0 |
| **커뮤니티** | 없음 | Co-creation 플랫폼 (설문/투표/FGD) | P0 |
| **A/B 테스트** | 없음 | 디자인/향/용기 선택 시스템 | P0 |
| **크라우드펀딩** | 없음 | CAMPFIRE API 연동 | P1 |
| **국가별 컴플라이언스** | 없음 | 규제 체크리스트 시스템 | P1 |
| **인플루언서 관리** | 없음 | KOL 협업 대시보드 | P2 |

---

## 📅 단계별 실행 계획 (12개월)

### Phase 0: 준비 및 검증 (1개월)
**목표**: 현재 프로젝트 분석 및 마이그레이션 계획 확정

#### Week 1-2: 현황 분석
- [ ] 기존 코드베이스 전체 감사
- [ ] 재사용 가능 컴포넌트/로직 분류
- [ ] DB 스키마 재설계 (국가별 에디션 지원)
- [ ] 기술 부채 식별 및 해결 계획

#### Week 3-4: 아키텍처 설계
- [ ] Co-creation 플랫폼 아키텍처 설계
- [ ] 국가별 데이터 모델 설계
- [ ] API 명세서 작성 (v2.0)
- [ ] 인프라 계획 (일본 CDN, DB 샤딩 등)

**완료 기준**: 
- 마이그레이션 상세 계획서 승인
- 기술 스택 확정
- DB 스키마 v2.0 완성

---

### Phase 1: 핵심 인프라 전환 (1~2개월)

#### 1.1 다국어 시스템 구축 (P0)
**작업 항목**:
```typescript
// AS-IS: 단순 객체 기반
name: { ko: '...', en: '...', zh: '...', ja: '...' }

// TO-BE: next-intl 완전 통합 + 동적 로딩
- messages/ja.json (일본어 전체 번역)
- messages/fr.json (프랑스어)
- messages/en-US.json (미국 영어)
- 국가별 통화/날짜/숫자 포맷
- SEO 메타데이터 현지화
```

**변경 파일**:
- `app/[locale]/layout.tsx` (국가별 라우팅)
- `middleware.ts` (locale 감지)
- `lib/i18n.ts` (설정)

#### 1.2 제품 데이터 모델 재설계 (P0)
```typescript
// TO-BE Schema
interface CulturalEdition {
  id: string
  baseProduct: Product // K-뷰티 베이스 제품
  country: 'JP' | 'FR' | 'US' | 'SEA'
  culturalElements: {
    scent: string // 국가별 선호 향
    packaging: string // 문화 요소 반영 용기
    localIngredients: string[] // 현지 소재
  }
  cocreationData: {
    fgdResults: FGDResult[]
    abTestResults: ABTestResult[]
    surveyResults: SurveyResult[]
  }
  complianceChecklist: {
    country: string
    certifications: string[] // FSC, FDA, CPNP
    ingredients: IngredientCompliance[]
    labeling: LabelingRequirement[]
  }
}
```

**새 테이블**:
- `cultural_editions`
- `cocreation_sessions`
- `ab_tests`
- `compliance_checklists`
- `influencer_partnerships`

#### 1.3 브랜드 리브랜딩 (P0)
- 브랜드명 변경: "Andong ESG Beauty" → 신규 브랜드명 결정
- 로고/CI 교체
- 색상 팔레트 업데이트 (국가별 버전)
- 폰트 시스템 (한/영/일/중 지원)

**변경 파일**:
- `tailwind.config.js` (색상 재정의)
- `public/` (로고 파일)
- `app/layout.tsx` (메타데이터)

---

### Phase 2: Co-creation 플랫폼 개발 (3~4개월)

#### 2.1 커뮤니티 기능 (P0)
**새 페이지**:
- `/community` - 국가별 커뮤니티 허브
- `/community/survey` - 설문 참여
- `/community/vote` - A/B 테스트 투표
- `/community/fgd` - 온라인 FGD 신청

**핵심 컴포넌트**:
```typescript
// components/cocreation/SurveyForm.tsx
// components/cocreation/ABTestVoting.tsx
// components/cocreation/FGDScheduler.tsx
// components/cocreation/RewardTracker.tsx (참여 리워드)
```

#### 2.2 제품 개발 5단계 프로세스 시각화 (P0)
```
┌─────────────────────────────────────────────┐
│ 1. 유저 리서치 (설문 + FGD + 온라인 커뮤니티) │
│ 2. 프로토타입 개발 (샘플 3종)                │
│ 3. A/B 테스트 (국가별 소비자 테스트)         │
│ 4. 공동 제작 (디자인/용기 투표)              │
│ 5. 크라우드펀딩 + 론칭                       │
└─────────────────────────────────────────────┘
```

**새 페이지**:
- `/products/[edition]/development` - 개발 진행 상황
- `/products/[edition]/timeline` - 타임라인
- `/products/[edition]/contributors` - 참여자 명단

#### 2.3 A/B 테스트 시스템 (P0)
```typescript
// lib/ab-testing/manager.ts
export class ABTestManager {
  createTest(options: {
    country: string
    variants: ProductVariant[]
    duration: number
  }): ABTest
  
  recordVote(userId: string, variantId: string): void
  getResults(): ABTestResults
}
```

---

### Phase 3: 국가별 현지화 (5~6개월)

#### 3.1 일본 에디션 (우선순위 1)
**요구사항 반영**:
- ✅ 스킨케어 단계 최소화 → "올인원 에센스"
- ✅ 클린뷰티 강조 → 성분 투명성 페이지
- ✅ 미니멀 디자인 → 일본 전통 문양 활용

**새 페이지**:
- `/ja/editions/japan-all-in-one` - 일본 한정판 상세
- `/ja/about/clean-beauty` - 클린뷰티 철학
- `/ja/ingredients` - 성분 상세 (일본어)

**컴플라이언스 체크리스트**:
- [ ] FSC (일본 화장품 기준) 확인
- [ ] 성분 라벨링 일본어 표기
- [ ] 알레르기 유발 물질 표시

#### 3.2 프랑스 에디션 (우선순위 2)
**요구사항 반영**:
- 향(香) 선호도 → 프랑스 지역 향수 소재 활용
- 디자인 감성 → 프랑스 아트 모티프

#### 3.3 미국 에디션 (우선순위 3)
**요구사항 반영**:
- 건조한 환경 → 고보습 포뮬러
- 대용량 선호 → 100ml / 200ml 옵션
- FDA 규제 준수

---

### Phase 4: 크라우드펀딩 연동 (7~8개월)

#### 4.1 CAMPFIRE API 연동 (일본)
```typescript
// lib/crowdfunding/campfire.ts
export class CampfireAPI {
  createProject(data: ProjectData): Promise<Project>
  updateProgress(projectId: string): Promise<void>
  getBackers(): Promise<Backer[]>
}
```

**새 페이지**:
- `/ja/crowdfunding/japan-edition` - 펀딩 페이지
- `/ja/crowdfunding/progress` - 실시간 진행 현황
- `/ja/crowdfunding/rewards` - 리워드 설명

#### 4.2 Pre-order 시스템
- 선주문 결제 (토스페이먼츠)
- 펀딩 실패 시 자동 환불
- 목표 달성률 실시간 표시

---

### Phase 5: 인플루언서 & 마케팅 (9~10개월)

#### 5.1 인플루언서 협업 시스템 (P2)
**새 페이지**:
- `/admin/influencers` - KOL 관리 대시보드
- `/influencers/apply` - 인플루언서 신청

**기능**:
- 국가별 마이크로 KOL 데이터베이스
- 협업 계약 관리
- SNS 성과 추적 (도달률, 전환율)

#### 5.2 SNS 콘텐츠 관리
- 국가별 언어·문화 기반 콘텐츠 캘린더
- 현지 트렌드 모니터링
- UGC(User Generated Content) 수집

---

### Phase 6: B2C 확장 & 편집숍 입점 (11~12개월)

#### 6.1 현지 편집숍 B2B 포털
**새 페이지**:
- `/b2b/wholesale` - 도매 신청
- `/b2b/retailers` - 파트너 매장 목록

#### 6.2 글로벌 배송 시스템
- 국가별 배송비 자동 계산
- 관세 사전 안내
- 국제 송장 자동 생성

---

## 🔧 기술 스택 업데이트

### 추가 필요 라이브러리
```json
{
  "dependencies": {
    // 기존 유지
    "next": "14.2.3",
    "next-intl": "^3.15.0",
    
    // 신규 추가
    "@prisma/client": "^5.0.0",           // DB ORM
    "react-query": "^5.0.0",              // 서버 상태 관리
    "recharts": "^2.0.0",                 // A/B 테스트 결과 차트
    "react-hook-form": "^7.0.0",          // 설문 폼
    "zod": "^3.0.0",                      // 스키마 검증
    "stripe": "^14.0.0",                  // Pre-order 결제
    "aws-sdk": "^2.0.0",                  // S3 (이미지 업로드)
    "socket.io-client": "^4.0.0",         // 실시간 펀딩 현황
    
    // 일본 시장 특화
    "japanese-holidays": "^1.0.0",        // 일본 공휴일
    "kuroshiro": "^1.0.0",                // 일본어 후리가나
  },
  "devDependencies": {
    "prisma": "^5.0.0",
    "@playwright/test": "^1.40.0",        // E2E 테스트
    "vitest": "^1.0.0"                    // 단위 테스트
  }
}
```

### DB 마이그레이션
```prisma
// prisma/schema.prisma
model CulturalEdition {
  id                String   @id @default(cuid())
  country           String   // JP, FR, US, SEA
  baseProductId     String
  culturalElements  Json
  cocreationData    Json
  complianceData    Json
  status            String   // RESEARCH, PROTOTYPE, TESTING, FUNDING, LAUNCHED
  launchDate        DateTime?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  baseProduct       Product  @relation(fields: [baseProductId], references: [id])
  abTests           ABTest[]
  surveys           Survey[]
  crowdfunding      CrowdfundingCampaign?
}

model ABTest {
  id          String   @id @default(cuid())
  editionId   String
  testType    String   // SCENT, PACKAGING, DESIGN
  variants    Json
  votes       Vote[]
  startDate   DateTime
  endDate     DateTime
  winner      String?
  
  edition     CulturalEdition @relation(fields: [editionId], references: [id])
}

model Vote {
  id          String   @id @default(cuid())
  abTestId    String
  userId      String
  variantId   String
  votedAt     DateTime @default(now())
  
  abTest      ABTest   @relation(fields: [abTestId], references: [id])
  user        User     @relation(fields: [userId], references: [id])
}
```

---

## 📊 성공 지표 (KPI)

### Phase 1-2 (1~4개월)
- [ ] 일본어 현지화 완료율 100%
- [ ] Co-creation 플랫폼 베타 오픈
- [ ] 초기 커뮤니티 회원 500명 확보

### Phase 3-4 (5~8개월)
- [ ] 일본 에디션 MVP 출시
- [ ] 크라우드펀딩 목표 달성 (일본 CAMPFIRE)
- [ ] A/B 테스트 참여율 30% 이상

### Phase 5-6 (9~12개월)
- [ ] 인플루언서 협업 10건 이상
- [ ] 현지 편집숍 입점 5곳
- [ ] 연 매출 3억원 달성

---

## ⚠️ 리스크 관리

### 기술 리스크
| 리스크 | 대응 전략 |
|--------|-----------|
| DB 마이그레이션 실패 | 단계별 백업, 롤백 계획 수립 |
| 국가별 규제 미준수 | 전문가 자문, Compliance 체크리스트 자동화 |
| 성능 저하 (다국어) | CDN 활용, 서버 사이드 번역 캐싱 |

### 비즈니스 리스크
| 리스크 | 대응 전략 |
|--------|-----------|
| 커뮤니티 참여율 저조 | 리워드 프로그램 강화 (시제품 제공) |
| 크라우드펀딩 실패 | 최소 MOQ로 시작, Pre-order 병행 |
| 현지화 품질 문제 | 네이티브 검수자 고용 |

---

## 📝 다음 단계

**즉시 실행 항목** (이번 주):
1. [ ] 브랜드명 확정 (팀 회의)
2. [ ] DB 스키마 v2.0 리뷰
3. [ ] 일본어 번역 외주 업체 선정
4. [ ] Phase 0 킥오프 미팅

**이번 달 목표**:
- [ ] Phase 0 완료 (준비 및 검증)
- [ ] 기술 스택 확정 및 초기 설정
- [ ] 프로젝트 타임라인 확정

---

**작성일**: 2025-11-14  
**버전**: 1.0  
**승인 대기 중**
