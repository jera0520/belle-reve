# Phase 1: 핵심 인프라 전환 (1~2개월)

## 목표
- 다국어 시스템 완전 구축
- 제품 데이터 모델 구현
- 기본 Co-creation 컴포넌트 개발

## 작업 목록

### 1.1 Prisma 클라이언트 래퍼 생성
- [x] Prisma 스키마 완성
- [ ] DB 클라이언트 싱글톤 패턴
- [ ] 타입 안전 쿼리 헬퍼

### 1.2 Cultural Edition 기본 CRUD
- [ ] `lib/db/editions.ts` - Edition 쿼리 함수
- [ ] `app/api/editions/route.ts` - API 엔드포인트
- [ ] Edition 목록 페이지
- [ ] Edition 상세 페이지

### 1.3 A/B 테스트 시스템
- [ ] `lib/ab-testing/manager.ts` - 테스트 관리
- [ ] `components/cocreation/ABTestVoting.tsx` - 투표 UI
- [ ] `app/api/ab-tests/route.ts` - API

### 1.4 일본 에디션 MVP
- [ ] 일본 에디션 seed 데이터
- [ ] `/ja/editions/japan-all-in-one` 페이지
- [ ] 클린뷰티 철학 페이지
- [ ] 성분 투명성 페이지

---

**시작 날짜**: 2025-11-14
**예상 완료**: Phase 1.1-1.2 (이번 세션)
