# 배포 가이드

## 🚀 Vercel 배포 (권장)

### 1. GitHub에 푸시
```bash
git init
git add .
git commit -m "feat: Co-creation 글로벌 K-뷰티 플랫폼 v2.0"
git branch -M main
git remote add origin https://github.com/yourusername/kbeauty-cocreation.git
git push -u origin main
```

### 2. Vercel에서 Import
1. https://vercel.com 접속
2. "Import Project" 클릭
3. GitHub 저장소 선택
4. 환경 변수 설정:

```bash
# Vercel 환경 변수
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://yourdomain.vercel.app"
NEXTAUTH_SECRET="production-secret-key-here"
```

### 3. 배포
```bash
vercel --prod
```

---

## 🐘 PostgreSQL 설정 (Supabase)

### 1. Supabase 프로젝트 생성
1. https://supabase.com 접속
2. "New Project" 클릭
3. Database Password 설정

### 2. 연결 문자열 복사
```
Settings > Database > Connection string > URI
```

### 3. Prisma 마이그레이션
```bash
# .env.local 수정
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"

# 스키마 변경 (sqlite → postgresql)
# prisma/schema.prisma
datasource db {
  provider = "postgresql"  # sqlite에서 변경
  url      = env("DATABASE_URL")
}

# 마이그레이션
npx prisma migrate dev --name init
npx prisma db seed
```

---

## 🔐 환경 변수 전체 목록

### 필수
```bash
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-secret-key"
```

### 인증 (Phase 3+)
```bash
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
LINE_CLIENT_ID="..."
LINE_CLIENT_SECRET="..."
```

### 결제 (Phase 4+)
```bash
STRIPE_PUBLIC_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
TOSS_CLIENT_KEY="live_ck_..."
```

### 스토리지 (Phase 3+)
```bash
R2_ACCOUNT_ID="..."
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."
```

### 크라우드펀딩 (Phase 4+)
```bash
CAMPFIRE_API_KEY="..."
```

---

## 📊 성능 최적화

### 1. 이미지 최적화
```bash
# next.config.js
images: {
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 60,
}
```

### 2. 빌드 크기 확인
```bash
npm run build
# Check bundle size
```

### 3. Lighthouse 점수 확인
- Performance: 목표 90+
- Accessibility: 목표 95+
- Best Practices: 목표 95+
- SEO: 목표 90+

---

## 🔍 모니터링

### Vercel Analytics
```bash
npm install @vercel/analytics
```

### Sentry (에러 추적)
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## 🌐 도메인 설정

### 1. Vercel에서 도메인 추가
```
Settings > Domains > Add Domain
```

### 2. DNS 레코드 설정
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL 자동 활성화
Vercel이 자동으로 Let's Encrypt 인증서 발급

---

## 📝 배포 전 체크리스트

### 코드
- [ ] TypeScript 에러 없음 (`npm run build`)
- [ ] ESLint 경고 없음 (`npm run lint`)
- [ ] 환경 변수 모두 설정
- [ ] .env.local을 .gitignore에 추가

### 데이터베이스
- [ ] PostgreSQL 마이그레이션 완료
- [ ] Seed 데이터 실행
- [ ] 백업 설정

### 보안
- [ ] NEXTAUTH_SECRET 변경 (랜덤 문자열)
- [ ] API Rate Limiting 설정
- [ ] CORS 설정 확인

### SEO
- [ ] robots.txt 생성
- [ ] sitemap.xml 생성
- [ ] 메타 태그 확인
- [ ] Open Graph 이미지

---

## 🚨 롤백 방법

```bash
# Vercel에서 이전 배포로 롤백
vercel rollback [deployment-url]

# 또는 Vercel 대시보드에서
Deployments > [이전 버전] > Promote to Production
```

---

**마지막 업데이트**: 2025-11-14  
**작성자**: DevOps Team
