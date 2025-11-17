# 🔍 웹사이트 현황 분석 및 개선 계획

**작성일**: 2025-11-15  
**현재 상태**: Phase 2 완료 (60%)  
**목표**: 전문적인 브랜드 이미지 확립 + 기능 완성도 향상

---

## 📊 현황 분석

### ✅ 구현 완료된 부분
1. **핵심 인프라**
   - ✅ Prisma DB (13개 모델)
   - ✅ next-intl 다국어 시스템 (ko, ja, en-US, fr)
   - ✅ REST API (editions, ab-tests)
   - ✅ 기본 페이지 구조 (home, editions, community)

2. **Co-creation 플랫폼**
   - ✅ A/B 테스트 투표 시스템
   - ✅ 커뮤니티 허브
   - ✅ Edition 상세 페이지
   - ✅ 진행 현황 표시 (5단계)

3. **브랜드 정체성**
   - ✅ Belle Rêve 브랜드명 적용
   - ✅ 프랑스풍 디자인 (Cormorant Garamond 폰트)
   - ✅ 고급스러운 색상 팔레트 (Navy, Gold, Cream)

### ❌ 부족한 점 (개선 필요)

#### 1. 시각적 완성도 ★★★ (최우선)
- ❌ **제품 이미지 없음** - placeholder만 존재
- ❌ **브랜드 로고 없음** - 텍스트만 사용
- ❌ **히어로 이미지 부재** - 첫 인상이 약함
- ❌ **에디션별 대표 이미지 없음** - 일본/프랑스/미국 구분 어려움
- ❌ **팀 프로필 사진 없음** - 신뢰도 하락
- ❌ **Co-creation 프로세스 아이콘 없음** - 이해도 낮음

#### 2. 기능적 완성도 ★★☆
- ❌ **언어 전환 작동 안 함** - 한국어만 표시됨
- ❌ **설문 시스템 미구현** - "준비 중" 메시지만
- ❌ **FGD 신청 미구현**
- ❌ **사용자 인증 없음** - 투표 중복 가능
- ❌ **관리자 대시보드 없음**
- ❌ **실시간 데이터 업데이트 없음**

#### 3. 콘텐츠 충실도 ★☆☆
- ❌ **일본어/영어/프랑스어 번역 미완성** - 하드코딩된 한국어 다수
- ❌ **제품 상세 정보 부족** - 스펙, 사용법, 리뷰 등
- ❌ **크라우드펀딩 연동 없음** - CAMPFIRE API 미구현
- ❌ **SEO 메타데이터 부족** - 검색 노출 어려움

#### 4. 전문성 ★★☆
- ⚠️ **프로젝트명 불일치** - 디렉터리(`andong-esg-beauty`) vs package.json(`kbeauty-cocreation`)
- ⚠️ **임시 userId 사용** - 실제 인증 필요
- ⚠️ **에러 핸들링 부족** - 500 에러 시 백화면
- ⚠️ **로딩 상태 부재** - 사용자 경험 저하

---

## 🎯 개선 계획 (우선순위별)

### 🚀 Phase A: 시각적 전문성 확보 (1주)
**목표**: "실제 브랜드처럼 보이게"

#### A1. 이미지 에셋 추가 ★★★
- [ ] **브랜드 로고 제작**
  - SVG 파일 (다크/라이트 모드)
  - 사이즈: 200x60px, 400x120px
  - 위치: `public/logo/` 
  
- [ ] **히어로 섹션 배경 이미지**
  - 고급스러운 화장품 이미지
  - 크기: 1920x1080px
  - Unsplash/Pexels에서 무료 이미지 활용
  
- [ ] **에디션별 대표 이미지**
  ```
  public/images/editions/
  ├── japan-hero.jpg       # 벚꽃, 전통 문양
  ├── france-hero.jpg      # 라벤더, 파리 감성
  └── usa-hero.jpg         # 모던, 미니멀
  ```

- [ ] **제품 이미지**
  - 용기 mockup (3D 또는 2D)
  - 성분 close-up
  - 사용 시연 이미지

- [ ] **팀 프로필 사진**
  - 이세라: `public/images/team/sera-lee.jpg`
  - 김진현: `public/images/team/jinhyeon-kim.jpg`

- [ ] **Co-creation 아이콘**
  ```
  public/icons/cocreation/
  ├── research.svg         # 1단계
  ├── prototype.svg        # 2단계
  ├── testing.svg          # 3단계
  ├── design.svg           # 4단계
  └── launch.svg           # 5단계
  ```

**구현 방법**:
```typescript
// components/ui/Image.tsx
import Image from 'next/image'

export function EditionHero({ edition }: { edition: string }) {
  return (
    <Image
      src={`/images/editions/${edition}-hero.jpg`}
      alt={`${edition} edition`}
      width={1920}
      height={1080}
      priority
      className="object-cover"
    />
  )
}
```

#### A2. 시각 디자인 개선 ★★☆
- [ ] **애니메이션 추가**
  - Framer Motion 설치
  - 스크롤 시 fade-in 효과
  - 호버 시 부드러운 트랜지션
  
- [ ] **그래디언트 배경**
  ```css
  background: linear-gradient(135deg, 
    var(--french-cream) 0%, 
    #f8f6f3 100%
  );
  ```

- [ ] **카드 디자인 고급화**
  - Glass morphism 효과
  - Subtle shadow
  - Border radius 일관성

- [ ] **타이포그래피 계층 강화**
  ```css
  h1: 48px / 64px (Cormorant Garamond)
  h2: 36px / 48px
  h3: 24px / 32px
  body: 16px / 24px (Noto Sans)
  ```

#### A3. 반응형 디자인 검증 ★★☆
- [ ] 모바일 (375px)
- [ ] 태블릿 (768px)
- [ ] 데스크탑 (1440px)
- [ ] 4K (2560px)

---

### 🔧 Phase B: 기능 완성도 향상 (2주)

#### B1. 다국어 시스템 완전 작동 ★★★
**문제**: 언어 전환 시 번역 안 됨

**해결 방법**:
1. **모든 하드코딩 텍스트 제거**
   ```typescript
   // ❌ Before
   <h1>Belle Rêve</h1>
   
   // ✅ After
   <h1>{t('brand.name')}</h1>
   ```

2. **번역 파일 완성**
   - `messages/ko.json` (100%)
   - `messages/ja.json` (현재 30% → 100%)
   - `messages/en-US.json` (현재 20% → 100%)
   - `messages/fr.json` (현재 20% → 100%)

3. **언어별 날짜/통화 포맷**
   ```typescript
   // lib/i18n/formatters.ts
   export function formatPrice(amount: number, locale: string) {
     const currencies = {
       ko: 'KRW',
       ja: 'JPY',
       'en-US': 'USD',
       fr: 'EUR'
     }
     
     return new Intl.NumberFormat(locale, {
       style: 'currency',
       currency: currencies[locale]
     }).format(amount)
   }
   ```

4. **SEO 메타데이터 현지화**
   ```typescript
   // app/[locale]/layout.tsx
   export async function generateMetadata({ params }) {
     const t = await getTranslations('metadata')
     
     return {
       title: t('title'),
       description: t('description'),
       openGraph: {
         locale: params.locale,
         images: [t('ogImage')]
       }
     }
   }
   ```

#### B2. 사용자 인증 (NextAuth) ★★★
**필요성**: 투표 중복 방지, 사용자 대시보드

**구현 단계**:
1. NextAuth 설정
   ```bash
   npm install next-auth @auth/prisma-adapter
   ```

2. 프로바이더 추가
   - Google OAuth
   - Email (Magic Link)
   - 일본: LINE Login
   - 프랑스: Email

3. Prisma 스키마 업데이트
   ```prisma
   model Account {
     // NextAuth 기본 스키마
   }
   
   model Session {
     // NextAuth 기본 스키마
   }
   ```

4. 투표 시 userId 검증
   ```typescript
   // app/api/ab-tests/[id]/vote/route.ts
   const session = await getServerSession(authOptions)
   if (!session) {
     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
   }
   
   // 중복 투표 확인
   const existingVote = await prisma.vote.findFirst({
     where: { userId: session.user.id, abTestId }
   })
   ```

#### B3. 설문 시스템 구현 ★★☆
**현재**: "준비 중" 페이지만

**구현 내용**:
1. **설문 생성 API**
   ```typescript
   // app/api/surveys/route.ts
   POST /api/surveys
   {
     "title": "향 선호도 조사",
     "questions": [
       {
         "type": "MULTIPLE_CHOICE",
         "text": "선호하는 향은?",
         "options": ["플로럴", "시트러스", "우디"]
       }
     ]
   }
   ```

2. **설문 응답 API**
   ```typescript
   POST /api/surveys/[id]/responses
   {
     "answers": [
       { "questionId": "1", "value": "플로럴" }
     ]
   }
   ```

3. **설문 UI 컴포넌트**
   - React Hook Form 활용
   - 진행률 표시
   - 즉시 저장 (auto-save)

4. **결과 대시보드**
   - Recharts로 차트 표시
   - 필터링 (국가별, 기간별)

#### B4. 실시간 업데이트 (WebSocket) ★☆☆
**사용 사례**: 
- 투표 결과 실시간 변경
- 크라우드펀딩 달성률
- 커뮤니티 활동 피드

**구현 방법**:
```bash
npm install socket.io socket.io-client
```

```typescript
// lib/socket/server.ts
export function setupSocketIO(io: Server) {
  io.on('connection', (socket) => {
    socket.on('vote:submit', async (data) => {
      // 투표 처리
      io.emit('vote:updated', results)
    })
  })
}
```

---

### 📝 Phase C: 콘텐츠 충실도 (1주)

#### C1. 제품 상세 정보 확충 ★★★
- [ ] **성분표 (Ingredients)**
  - 전성분 리스트
  - 농도 (%)
  - 효능 설명
  - 알레르기 유발 물질 표시

- [ ] **사용법 (How to Use)**
  - 단계별 가이드
  - 사진/영상
  - 팁 & 주의사항

- [ ] **제품 스펙**
  - 용량 (ml)
  - 유통기한
  - 보관 방법
  - 제조국

- [ ] **리뷰 시스템**
  ```prisma
  model Review {
    id        String   @id @default(cuid())
    productId String
    userId    String
    rating    Int      // 1-5
    comment   String?
    images    String[] // 리뷰 사진
    verified  Boolean  @default(false) // 구매 확인
    createdAt DateTime @default(now())
  }
  ```

#### C2. 번역 품질 향상 ★★★
**현재 문제**: 
- 기계 번역 티 남
- 문화적 뉘앙스 부족
- 일본어 존댓말 오류

**개선 방법**:
1. **네이티브 검수**
   - 일본어: Upwork에서 일본인 번역가 고용
   - 프랑스어: Fiverr 프리랜서
   - 예산: 20-30만원

2. **문화 적합성 검토**
   - 일본: 敬語(경어) 사용
   - 프랑스: Vous vs Tu 구분
   - 미국: Casual tone

3. **용어 통일**
   - 용어집(Glossary) 작성
   - Co-creation → 共創 (일본어)
   - Cultural Identity → Identité culturelle (프랑스어)

#### C3. SEO 최적화 ★★☆
- [ ] **메타 태그**
  ```tsx
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:image" content="..." />
  <meta name="twitter:card" content="summary_large_image" />
  ```

- [ ] **구조화된 데이터 (JSON-LD)**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Belle Rêve Japan Edition",
    "image": "https://...",
    "offers": {
      "@type": "Offer",
      "price": "5980",
      "priceCurrency": "JPY"
    }
  }
  ```

- [ ] **Sitemap & Robots.txt**
  ```typescript
  // app/sitemap.ts
  export default function sitemap() {
    return [
      { url: 'https://bellereve.com/ko', lastModified: new Date() },
      { url: 'https://bellereve.com/ja', lastModified: new Date() },
      // ...
    ]
  }
  ```

---

### 🎨 Phase D: 브랜드 전문성 강화 (지속)

#### D1. 프로젝트 정리 ★★★
- [ ] **디렉터리명 변경**
  ```bash
  mv andong-esg-beauty belle-reve
  ```

- [ ] **package.json 업데이트**
  ```json
  {
    "name": "belle-reve",
    "description": "Co-creation based global K-beauty brand",
    "version": "2.0.0"
  }
  ```

- [ ] **Git 정리**
  - 불필요한 파일 제거
  - .gitignore 업데이트
  - 커밋 히스토리 정리 (squash)

#### D2. 에러 핸들링 ★★☆
- [ ] **전역 에러 페이지**
  ```tsx
  // app/error.tsx
  export default function Error({ error, reset }) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1>Oops! Something went wrong</h1>
          <button onClick={reset}>Try again</button>
        </div>
      </div>
    )
  }
  ```

- [ ] **로딩 상태**
  ```tsx
  // app/loading.tsx
  export default function Loading() {
    return <Spinner />
  }
  ```

- [ ] **API 에러 핸들링**
  ```typescript
  try {
    const data = await fetch('/api/...')
  } catch (error) {
    toast.error(t('errors.networkError'))
    Sentry.captureException(error) // 에러 추적
  }
  ```

#### D3. 성능 최적화 ★★☆
- [ ] **이미지 최적화**
  - Next.js Image 컴포넌트 활용
  - WebP 포맷 변환
  - Lazy loading

- [ ] **코드 스플리팅**
  ```typescript
  const ABTestVoting = dynamic(() => import('@/components/cocreation/ABTestVoting'), {
    loading: () => <Skeleton />
  })
  ```

- [ ] **캐싱 전략**
  ```typescript
  export const revalidate = 3600 // 1시간마다 재검증
  ```

- [ ] **번들 사이즈 최적화**
  ```bash
  npm run build
  npx @next/bundle-analyzer
  ```

#### D4. 테스트 코드 작성 ★☆☆
- [ ] **단위 테스트 (Vitest)**
  ```typescript
  // lib/db/editions.test.ts
  describe('getEditionBySlug', () => {
    it('should return edition', async () => {
      const edition = await getEditionBySlug('japan-all-in-one-essence')
      expect(edition).toBeDefined()
    })
  })
  ```

- [ ] **E2E 테스트 (Playwright)**
  ```typescript
  // tests/vote.spec.ts
  test('should submit vote', async ({ page }) => {
    await page.goto('/ko/community/vote/1')
    await page.click('input[value="variant-1"]')
    await page.click('button[type="submit"]')
    await expect(page.locator('.success-message')).toBeVisible()
  })
  ```

---

## 📅 실행 일정 (4주)

### Week 1: 시각적 완성도
- Day 1-2: 이미지 에셋 수집/제작
- Day 3-4: 브랜드 로고 + 히어로 이미지 적용
- Day 5-7: 디자인 개선 + 애니메이션

### Week 2: 기능 구현
- Day 1-3: NextAuth 인증 시스템
- Day 4-5: 다국어 시스템 완전 작동
- Day 6-7: 설문 시스템 기초 구현

### Week 3: 콘텐츠 & 번역
- Day 1-3: 제품 상세 정보 작성
- Day 4-5: 일본어/프랑스어 번역 완료
- Day 6-7: SEO 최적화

### Week 4: 최종 점검
- Day 1-2: 프로젝트 정리 + 에러 핸들링
- Day 3-4: 성능 최적화
- Day 5: 테스트 코드 작성
- Day 6-7: 배포 준비 + 최종 검수

---

## 🎯 목표 완성도

### 현재 (Phase 2 완료)
```
[████████████░░░░░░░░] 60%
```

### 목표 (Phase D 완료)
```
[███████████████████░] 95%
```

**남은 5%**: 
- CAMPFIRE API 연동 (외부 승인 필요)
- 실제 크라우드펀딩 캠페인 운영
- 인플루언서 네트워크 구축

---

## 💰 예상 비용

| 항목 | 비용 | 비고 |
|------|------|------|
| 번역 (일본어/프랑스어) | 30만원 | Upwork/Fiverr |
| 이미지/로고 디자인 | 20만원 | 99designs / Fiverr |
| 도메인 (1년) | 2만원 | bellereve.com |
| Vercel Pro (1년) | 24만원 | 선택사항 |
| **합계** | **76만원** | 최소 52만원 |

---

## 📊 성공 지표 (KPI)

### 기술적 지표
- [ ] Lighthouse 점수 90+ (Performance, Accessibility, SEO)
- [ ] 번들 사이즈 < 500KB
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s

### 사용자 경험
- [ ] 모든 언어 100% 번역 완료
- [ ] 이미지 로딩 시간 < 2s
- [ ] 모바일 반응형 100%
- [ ] 에러율 < 1%

### 비즈니스
- [ ] 커뮤니티 가입 500명
- [ ] 투표 참여율 30%
- [ ] 설문 응답 200건
- [ ] 일본 에디션 Pre-order 50건

---

## 🚀 즉시 실행 항목 (오늘)

1. **이미지 수집 시작**
   - Unsplash에서 화장품 이미지 10장 다운로드
   - Canva에서 임시 로고 제작

2. **프로젝트명 변경**
   ```bash
   cd /Users/kimjinhyeon
   mv andong-esg-beauty belle-reve
   cd belle-reve
   ```

3. **번역 파일 우선순위 정리**
   - `messages/ja.json`에서 가장 중요한 20개 키 식별
   - DeepL API로 1차 번역

4. **이미지 경로 설정**
   ```bash
   mkdir -p public/images/{editions,team,products}
   mkdir -p public/icons/cocreation
   ```

---

**다음 보고**: Phase A 완료 후 (1주 후)
