# 🚀 실행 방법 (Quick Start)

## ⚡ 빠른 시작 (5분)

### 1️⃣ 터미널 열기
```bash
# 프로젝트 디렉터리로 이동
cd /Users/kimjinhyeon/andong-esg-beauty
```

### 2️⃣ 환경 변수 설정
```bash
# .env.local 파일이 있는지 확인
ls -la .env.local

# 없으면 생성
cat > .env.local << 'ENVEOF'
DATABASE_URL="file:./dev.db"
ENVEOF
```

### 3️⃣ 의존성 설치 (처음 한번만)
```bash
npm install
```

### 4️⃣ 데이터베이스 초기화 (처음 한번만)
```bash
# DB 스키마 생성
npx prisma db push

# 초기 데이터 입력
npx prisma db seed
```

### 5️⃣ 개발 서버 실행
```bash
npm run dev
```

### 6️⃣ 브라우저에서 접속
```
http://localhost:3000/ko
```

**✅ 완료! 이제 사용 가능합니다.**

---

## 📋 단계별 상세 가이드

### Step 1: 프로젝트 열기

**VS Code 사용 시:**
```bash
cd /Users/kimjinhyeon/andong-esg-beauty
code .
```

**터미널만 사용 시:**
```bash
cd /Users/kimjinhyeon/andong-esg-beauty
```

---

### Step 2: 환경 변수 확인

```bash
# .env.local 파일 확인
cat .env.local

# 내용이 아래와 같아야 함:
# DATABASE_URL="file:./dev.db"
```

**파일이 없다면:**
```bash
echo 'DATABASE_URL="file:./dev.db"' > .env.local
```

---

### Step 3: Node.js 패키지 설치

```bash
# package.json의 모든 의존성 설치
npm install

# 또는 (더 빠름)
npm ci
```

**예상 소요 시간:** 1-2분

---

### Step 4: 데이터베이스 설정

```bash
# 1. Prisma 클라이언트 생성
npx prisma generate

# 2. DB 스키마를 SQLite에 적용
npx prisma db push

# 3. 초기 데이터 입력 (일본 에디션)
npx prisma db seed
```

**성공 메시지:**
```
✔ Generated Prisma Client
✔ Database synchronized
✔ Running seed command
🌱  Seed data created successfully!
```

---

### Step 5: 개발 서버 실행

```bash
npm run dev
```

**성공 메시지:**
```
  ▲ Next.js 14.2.18
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

**⚠️ 주의:** 서버가 시작되면 터미널이 멈춘 것처럼 보이지만 정상입니다.

---

### Step 6: 브라우저에서 접속

#### 메인 페이지들
1. **홈** (한국어)
   ```
   http://localhost:3000/ko
   ```

2. **홈** (일본어)
   ```
   http://localhost:3000/ja
   ```

3. **에디션 목록**
   ```
   http://localhost:3000/ko/editions
   ```

4. **일본 에디션 상세**
   ```
   http://localhost:3000/ko/editions/japan-all-in-one-essence
   ```

5. **성분 투명성**
   ```
   http://localhost:3000/ko/editions/japan-all-in-one-essence/ingredients
   ```

6. **커뮤니티 허브**
   ```
   http://localhost:3000/ko/community
   ```

---

## 🛠️ 추가 도구

### Prisma Studio (DB 관리 GUI)

```bash
# 새 터미널 창에서 실행
npx prisma studio
```

**접속:**
```
http://localhost:5555
```

**기능:**
- DB 데이터 조회/수정
- 테이블 구조 확인
- 직접 쿼리 실행

---

## 🔧 자주 사용하는 명령어

### 개발 서버
```bash
npm run dev          # 개발 서버 시작
```

### 데이터베이스
```bash
npx prisma studio    # DB GUI 열기
npx prisma db push   # 스키마 동기화
npx prisma db seed   # 초기 데이터 재생성
npx prisma generate  # 클라이언트 재생성
```

### 빌드
```bash
npm run build        # 프로덕션 빌드
npm start            # 프로덕션 서버 실행
```

### 린트
```bash
npm run lint         # ESLint 실행
```

---

## 🐛 문제 해결

### 1. "Cannot find module" 에러
```bash
# 해결: node_modules 재설치
rm -rf node_modules package-lock.json
npm install
```

### 2. "Port 3000 is already in use" 에러
```bash
# 해결: 다른 포트 사용
PORT=3001 npm run dev

# 또는 3000 포트 프로세스 종료
lsof -ti:3000 | xargs kill -9
```

### 3. "Prisma Client is not generated" 에러
```bash
# 해결: Prisma 클라이언트 재생성
npx prisma generate
```

### 4. DB 초기화 필요 시
```bash
# DB 파일 삭제 후 재생성
rm prisma/dev.db
npx prisma db push
npx prisma db seed
```

### 5. 캐시 문제
```bash
# Next.js 캐시 삭제
rm -rf .next
npm run dev
```

---

## 📱 테스트 시나리오

### 기본 플로우
1. **홈페이지 접속**
   - http://localhost:3000/ko
   - 5단계 프로세스 확인

2. **에디션 둘러보기**
   - http://localhost:3000/ko/editions
   - 일본 에디션 카드 클릭

3. **상세 페이지**
   - 진행 현황 40% 확인
   - 문화적 배경 읽기
   - 성분 정보 확인

4. **성분 투명성 페이지**
   - 클린뷰티 철학 확인
   - K-뷰티 + 일본 특화 성분 비교

5. **커뮤니티 참여**
   - http://localhost:3000/ko/community
   - 진행 중인 투표 확인

6. **투표 참여** (DB에서 A/B 테스트 ID 확인 필요)
   - Prisma Studio에서 ABTest 테이블 확인
   - ID 복사
   - http://localhost:3000/ko/community/vote/[ID]
   - 옵션 선택 후 투표
   - 결과 확인

---

## 🎬 데모 영상 촬영용 순서

1. 홈 (ko) → 스크롤
2. 언어 전환 (ja)
3. Editions 목록
4. Japan Edition 상세
5. Ingredients 페이지
6. Community 허브
7. 투표 참여
8. Prisma Studio (DB 확인)

---

## 🔐 보안 주의사항

**절대 Git에 커밋하지 말 것:**
- `.env.local` (환경 변수)
- `prisma/dev.db` (개발 DB)
- `.next/` (빌드 결과)
- `node_modules/` (의존성)

**이미 .gitignore에 포함됨** ✅

---

## 📞 도움말

### 공식 문서
- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- next-intl: https://next-intl-docs.vercel.app

### 프로젝트 문서
- README.md - 프로젝트 소개
- DEPLOYMENT.md - 배포 가이드
- TESTING.md - 테스트 가이드
- docs/FINAL_SUMMARY.md - 완료 보고서

---

**마지막 업데이트:** 2025-11-14  
**작성자:** Development Team
