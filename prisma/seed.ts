import prisma from '@/lib/db/client';

async function main() {
  console.log('🌱 Seeding database...');

  // 1. 베이스 제품 생성
  const baseProduct = await prisma.baseProduct.create({
    data: {
      nameKo: 'K-뷰티 올인원 에센스',
      nameEn: 'K-Beauty All-in-One Essence',
      nameJa: 'K-ビューティーオールインワンエッセンス',
      nameFr: 'Essence Tout-en-Un K-Beauty',
      description: '검증된 K-뷰티 원료와 기술을 기반으로 한 올인원 에센스. 국가별 문화와 환경에 맞게 커스터마이징됩니다.',
      ingredients: JSON.stringify([
        '히알루론산',
        '나이아신아마이드',
        '센텔라 아시아티카 추출물',
        '펩타이드 복합체',
        '세라마이드',
      ]),
      technology: '다층 리포좀 캡슐화 기술, 피부 장벽 강화 포뮬러',
      category: 'SERUM',
    },
  });

  console.log('✅ Base Product created:', baseProduct.nameKo);

  // 2. 일본 에디션 생성
  const japanEdition = await prisma.culturalEdition.create({
    data: {
      baseProductId: baseProduct.id,
      country: 'JP',
      nameLocal: '日本限定版オールインワンエッセンス',
      slug: 'japan-all-in-one-essence',
      status: 'PROTOTYPE',
      
      scent: '桜 (Sakura Cherry Blossom)',
      scentDescription: '은은한 벚꽃 향으로 일본 전통미를 담았습니다.',
      packaging: '일본 전통 문양 (청해파)',
      culturalStory: '일본 고객의 미니멀리즘과 클린뷰티 철학을 반영한 제품입니다. 스킨케어 단계를 최소화하면서도 최고의 효과를 제공합니다.',
      designMotif: '청해파 (Seigaiha) - 무한한 평온을 상징',
      
      localIngredients: JSON.stringify([
        '유자 추출물',
        '녹차 추출물',
        '쌀 발효 추출물',
      ]),
      
      price: 65000,
      priceLocal: 5980,
      currency: 'JPY',
      
      step1FgdCompleted: true,
      step2PrototypeReady: true,
      step3AbTestCompleted: false,
      
      estimatedDelivery: new Date('2025-03-01'),
    },
  });

  console.log('✅ Japan Edition created:', japanEdition.nameLocal);

  // 3. A/B 테스트 생성 (일본 에디션)
  const abTest = await prisma.aBTest.create({
    data: {
      editionId: japanEdition.id,
      testType: 'PACKAGING',
      title: '용기 디자인 선택',
      description: '일본 에디션의 용기 디자인을 함께 선택해주세요!',
      variants: JSON.stringify([
        {
          id: 'variant-a',
          name: '미니멀 화이트',
          description: '순백색 용기 + 금박 로고',
          imageUrl: '/editions/japan/packaging-a.jpg',
        },
        {
          id: 'variant-b',
          name: '사쿠라 핑크',
          description: '연한 핑크 용기 + 청해파 문양',
          imageUrl: '/editions/japan/packaging-b.jpg',
        },
        {
          id: 'variant-c',
          name: '젠 그린',
          description: '차분한 녹색 + 대나무 캡',
          imageUrl: '/editions/japan/packaging-c.jpg',
        },
      ]),
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-01-31'),
      status: 'ACTIVE',
    },
  });

  console.log('✅ A/B Test created:', abTest.title);

  // 4. 설문 생성
  const survey = await prisma.survey.create({
    data: {
      editionId: japanEdition.id,
      title: '일본 에디션 향 선호도 조사',
      description: '어떤 향을 선호하시나요?',
      questions: JSON.stringify([
        {
          id: 'q1',
          type: 'single-choice',
          question: '선호하는 향은?',
          options: ['벚꽃', '유자', '녹차', '무향'],
        },
        {
          id: 'q2',
          type: 'scale',
          question: '향의 강도는? (1: 약함, 5: 강함)',
          min: 1,
          max: 5,
        },
      ]),
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-01-31'),
      status: 'ACTIVE',
    },
  });

  console.log('✅ Survey created:', survey.title);

  // 5. 컴플라이언스 체크 생성
  const compliance = await prisma.complianceCheck.create({
    data: {
      editionId: japanEdition.id,
      country: 'JP',
      checkType: 'INGREDIENTS',
      status: 'APPROVED',
      certifications: JSON.stringify(['FSC', 'ISO 22716']),
      regulatoryBody: 'MHLW (일본 후생노동성)',
      checklist: JSON.stringify([
        { item: '성분 표기 (일본어)', status: 'PASS' },
        { item: '알레르기 유발 물질 표시', status: 'PASS' },
        { item: 'FSC 인증', status: 'PASS' },
      ]),
      reviewedBy: 'Regulatory Team',
      reviewedAt: new Date(),
    },
  });

  console.log('✅ Compliance Check created');

  console.log('\n🎉 Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
