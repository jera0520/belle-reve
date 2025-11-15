# 테스트 가이드

## 🧪 수동 테스트 체크리스트

### 1. 홈페이지 (/)
- [ ] 페이지 로딩 확인
- [ ] 히어로 섹션 표시
- [ ] Co-creation 5단계 표시
- [ ] Cultural Editions 프리뷰 (일본, 프랑스, 미국)
- [ ] CTA 버튼 동작

### 2. 다국어 전환
- [ ] /ko - 한국어
- [ ] /ja - 일본어
- [ ] /en-US - 영어
- [ ] /fr - 프랑스어
- [ ] 모든 텍스트 번역 확인

### 3. 에디션 목록 (/editions)
- [ ] 에디션 카드 표시
- [ ] 국기 이모지 표시
- [ ] 진행률 바 동작
- [ ] 5단계 체크리스트
- [ ] 가격 정보 (현지 통화)
- [ ] 카드 클릭 → 상세 이동

### 4. 에디션 상세 (/editions/japan-all-in-one-essence)
- [ ] 히어로 섹션 (가격, 상태)
- [ ] Co-creation 진행 현황 (40%)
- [ ] 5단계 진행 표시
- [ ] 문화적 배경 스토리
- [ ] 성분 정보 (K-뷰티 + 일본 특화)
- [ ] 향 정보 (桜)
- [ ] 진행 중인 투표 링크
- [ ] 규제 인증 (FSC, ISO)
- [ ] CTA 버튼

### 5. 커뮤니티 허브 (/community)
- [ ] 히어로 섹션 통계
- [ ] Co-creation 5단계 아이콘
- [ ] 진행 중인 투표 목록
- [ ] 투표 카드 (제목, 설명, 참여자, 마감일)
- [ ] 참여 혜택 3종 (즉시/명예/추첨)
- [ ] CTA 버튼 → 투표 페이지

### 6. 투표 페이지 (/community/vote/[id])
- [ ] 에디션 정보 헤더
- [ ] 투표 폼 (3개 옵션)
- [ ] 라디오 버튼 선택
- [ ] 투표하기 버튼 활성화
- [ ] 투표 제출
- [ ] 결과 표시 (%)
- [ ] 승자 표시 (👑)
- [ ] 참여 혜택 안내

### 7. API 엔드포인트
```bash
# Editions
curl http://localhost:3000/api/editions

# A/B Tests
curl http://localhost:3000/api/ab-tests

# 투표 제출
curl -X POST http://localhost:3000/api/ab-tests/[id]/vote \
  -H "Content-Type: application/json" \
  -d '{"userId":"test-user","variantId":"variant-a"}'

# 결과 조회
curl http://localhost:3000/api/ab-tests/[id]/vote
```

---

## 🐛 알려진 이슈

### 1. 임시 userId
- **문제**: 랜덤 ID 사용으로 중복 투표 방지 안됨
- **해결**: NextAuth 구현 필요
- **우선순위**: High

### 2. 이미지 placeholder
- **문제**: 제품/에디션 이미지 없음
- **해결**: Cloudflare R2 + 실제 이미지 업로드
- **우선순위**: Medium

### 3. 일부 하드코딩된 텍스트
- **문제**: 모든 텍스트가 번역되지 않음
- **해결**: messages/*.json 보완
- **우선순위**: Medium

### 4. DB 환경 변수 에러
- **문제**: `npx prisma db push`시 DATABASE_URL 못 찾음
- **해결**: `export $(cat .env.local | xargs)` 먼저 실행
- **우선순위**: Low (개발 환경만)

---

## ✅ 테스트 통과 기준

### 기능 테스트
- [ ] 모든 페이지 로딩 (200 OK)
- [ ] 다국어 전환 정상 동작
- [ ] API 응답 정상 (JSON 포맷)
- [ ] 투표 제출/결과 정상

### 성능 테스트
- [ ] 페이지 로딩 < 2초
- [ ] API 응답 < 500ms
- [ ] 번들 크기 < 500KB

### 브라우저 호환성
- [ ] Chrome (최신)
- [ ] Safari (최신)
- [ ] Firefox (최신)
- [ ] Edge (최신)

### 반응형 테스트
- [ ] 모바일 (375px)
- [ ] 태블릿 (768px)
- [ ] 데스크톱 (1280px)

---

## 📊 테스트 결과 기록

### 2025-11-14 테스트

| 항목 | 상태 | 비고 |
|------|------|------|
| 홈페이지 | ✅ PASS | - |
| 다국어 | ✅ PASS | 일부 하드코딩 존재 |
| 에디션 목록 | ✅ PASS | - |
| 에디션 상세 | ✅ PASS | - |
| 커뮤니티 허브 | ✅ PASS | - |
| 투표 페이지 | ✅ PASS | - |
| 투표 제출 | ✅ PASS | 임시 userId 사용 |
| API | ✅ PASS | - |

**전체 통과율**: 100% (8/8)

---

**마지막 업데이트**: 2025-11-14  
**테스트 담당**: QA Team
