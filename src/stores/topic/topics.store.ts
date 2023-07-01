import Topic, { Grade } from 'src/entities/Topic';

const topics: Topic[] = [
  {
    title: '프리토킹',
    idx: '476',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/09/13/20220913102424_631fdbc818b11.jpg',
    grade: '중급',
  },
  {
    title: 'Tutoring Times 2021 Vol.11',
    idx: '3278',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2021/08/17/20210817100243_611b0ab30848e.jpg',
    grade: '고급',
  },
  {
    title: 'Tutoring Times 2021 Vol.12',
    idx: '3279',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2021/08/17/20210817102454_611b0fe62c970.jpg',
    grade: '고급',
  },
  {
    title: 'Word Traveler (Book 1~2)',
    idx: '140',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/04/05/20170405181443_5f474cb8085dc.jpg',
    grade: '입문',
  },
  {
    title: 'Reading Master 4 (Book 1~2)',
    idx: '139',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/04/05/20170405181322_5f474cb6a117e.jpg',
    grade: '고급',
  },
  {
    title: 'Reading Master 3 (Book 1~2)',
    idx: '138',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/04/05/20170405180444_5f474cb65561a.jpg',
    grade: '중급',
  },
  {
    title: 'My Reading Rainbow (Rainbow 1~3)',
    idx: '137',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/04/05/20170405180359_5f474cb60b058.jpg',
    grade: '중고급',
  },
  {
    title: 'Joy the Tomboy (Book 1~2)',
    idx: '136',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/04/05/20170405180242_5f474cb556aa3.jpg',
    grade: '중급',
  },
  {
    title: 'Easy Grammar (Grammar 1~3)',
    idx: '135',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/04/05/20170405180133_5f474cb206b5d.jpg',
    grade: '입문',
  },
  {
    title: 'I love Stories (Story 1~3)',
    idx: '104',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102440_5f474cb514499.jpg',
    grade: '초급',
  },
  {
    title: 'My Day (Day 1~3)',
    idx: '107',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102638_5f474cb5b2dae.jpg',
    grade: '고급',
  },
  {
    title: "What's Up? (Book 1~2)",
    idx: '105',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102528_5f474cb848bc7.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Sight Words (Set 1)',
    idx: '99',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/16/20161216124803_5f474cb7518e0.jpg',
    grade: '초급',
  },
  {
    title: 'Reading Rookie 1 (Rookie 1~3)',
    idx: '103',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102339_5f474cb6dc337.jpg',
    grade: '고급',
  },
  {
    title: "School's Cool (School 1~3)",
    idx: '106',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102610_5f474cb7948c9.jpg',
    grade: '중고급',
  },
  {
    title: 'Little Dragon (Book 1~2)',
    idx: '109',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102847_5f474cb589cf6.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Rookie 2 (Rookie 1~3)',
    idx: '108',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/12/28/20161228102801_5f474cb70f797.jpg',
    grade: '초급',
  },
  {
    title: 'Common Mistakes',
    idx: '3113',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2021/06/22/20210622123219_60d159c3e6eb0.jpg',
    grade: '중고급',
  },
  {
    title: 'Joy the Tomboy 2 (Book 3, Review)',
    idx: '1406',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801103223_5f474cb55ec28.jpg',
    grade: '고급',
  },
  {
    title: 'Joy the Tomboy 3 (Book 4~5)',
    idx: '1407',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801104038_5f474cb567036.jpg',
    grade: '초급',
  },
  {
    title: 'Joy the Tomboy 4 (Book 6, Review)',
    idx: '1408',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801104442_5f474cb56fb35.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Sight Words 2 (Set 2)',
    idx: '1409',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801105810_5f474cb760f1c.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Sight Words 3 (Set 3)',
    idx: '1410',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801105929_5f474cb772c1a.jpg',
    grade: '고급',
  },
  {
    title: "What's Up? 2 (Book 3, Review)",
    idx: '1411',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110030_5f474cb855a4b.jpg',
    grade: '고급',
  },
  {
    title: "What's Up? 3 (Book 4~5)",
    idx: '1412',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110101_5f474cb85d65d.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Sight Words 4 (Review)',
    idx: '1413',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110108_5f474cb77cc09.jpg',
    grade: '중급',
  },
  {
    title: "What's Up? 4 (Book 6, Review)",
    idx: '1414',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110121_5f474cb8662bb.jpg',
    grade: '초급',
  },
  {
    title: 'Word Traveler 2 (Book 3, Review)',
    idx: '1415',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110242_5f474cb81554a.jpg',
    grade: '입문',
  },
  {
    title: 'Word Traveler 3 (Book 4~5)',
    idx: '1416',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110308_5f474cb823aae.jpg',
    grade: '초급',
  },
  {
    title: 'Word Traveler 4 (Book 6, Review)',
    idx: '1417',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110332_5f474cb83e91c.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Master 3 (Book 3, Review)',
    idx: '1418',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110400_5f474cb666412.jpg',
    grade: '중고급',
  },
  {
    title: 'Easy Grammar 2 (1~3 Review)',
    idx: '1419',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110422_5f474cb2128b8.jpg',
    grade: '고급',
  },
  {
    title: 'Easy Grammar 3 (Grammar 4~6)',
    idx: '1420',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110448_5f474cb222b7e.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Master 3 (Book 4~5)',
    idx: '1421',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110508_5f474cb676f38.jpg',
    grade: '초급',
  },
  {
    title: 'Easy Grammar 4 (4~6 Review)',
    idx: '1422',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110509_5f474cb2342af.jpg',
    grade: '중급',
  },
  {
    title: 'I love Stories 2 (1~3 Review)',
    idx: '1423',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110551_5f474cb52e857.jpg',
    grade: '중급',
  },
  {
    title: 'I love Stories 3 (Story 4~6)',
    idx: '1424',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110610_5f474cb540cae.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Master 3 (Book 6, Review)',
    idx: '1425',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110623_5f474cb68821c.jpg',
    grade: '중급',
  },
  {
    title: 'I love Stories 4 (4~6 Review)',
    idx: '1426',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801110627_5f474cb54961e.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Master 4 (Book 3, Review)',
    idx: '1427',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801111604_5f474cb6b28db.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Master 4 (Book 4~5)',
    idx: '1428',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801111704_5f474cb6be1cd.jpg',
    grade: '중급',
  },
  {
    title: 'Reading Master 4 (Book 6, Review)',
    idx: '1429',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801111821_5f474cb6d4115.jpg',
    grade: '중급',
  },
  {
    title: 'Little Dragon 2 (Book 3, Review)',
    idx: '1430',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801112200_5f474cb592145.jpg',
    grade: '중고급',
  },
  {
    title: 'Little Dragon 3  (Book 4~5)',
    idx: '1431',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801112341_5f474cb599036.jpg',
    grade: '중고급',
  },
  {
    title: 'Little Dragon 4 (Book 6, Review)',
    idx: '1432',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801112438_5f474cb5aa1a5.jpg',
    grade: '중고급',
  },
  {
    title: 'My Day 2 (1~3 Review)',
    idx: '1433',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801112826_5f474cb5cc5fc.jpg',
    grade: '중고급',
  },
  {
    title: 'My Day 3 (Day 4~6)',
    idx: '1434',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801112912_5f474cb5e5053.jpg',
    grade: '중고급',
  },
  {
    title: 'My Day 4 (4~6 Review)',
    idx: '1435',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801113000_5f474cb5edf4e.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Rookie 1 (1~3 Review)',
    idx: '1436',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801113936_5f474cb6e4029.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Rookie 1 (Rookie 4~6)',
    idx: '1437',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114018_5f474cb6ec247.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Rookie 1 (4~6 Review)',
    idx: '1438',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114105_5f474cb70109c.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Rookie 2 (1~3 Review)',
    idx: '1439',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114222_5f474cb71ad80.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Rookie 2 (Rookie 4~6)',
    idx: '1440',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114325_5f474cb72df04.jpg',
    grade: '중고급',
  },
  {
    title: 'Reading Rookie 2 (4~6 Review)',
    idx: '1441',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114418_5f474cb7407bf.jpg',
    grade: '중고급',
  },
  {
    title: "School's Cool 2 (1~3 Review)",
    idx: '1442',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114557_5f474cb7a0dc2.jpg',
    grade: '고급',
  },
  {
    title: "School's Cool 3 (School 4~6)",
    idx: '1443',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114643_5f474cb7a8f50.jpg',
    grade: '고급',
  },
  {
    title: "School's Cool 4 (4~6 Review)",
    idx: '1444',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114722_5f474cb7b9163.jpg',
    grade: '고급',
  },
  {
    title: 'My Reading Rainbow 2 (1~3 Review)',
    idx: '1445',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114829_5f474cb61cd45.jpg',
    grade: '고급',
  },
  {
    title: 'My Reading Rainbow 3 (Rainbow 4~6)',
    idx: '1446',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114915_5f474cb6307ff.jpg',
    grade: '고급',
  },
  {
    title: 'My Reading Rainbow 4 (4~6 Review)',
    idx: '1447',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/08/01/20190801114953_5f474cb63f703.jpg',
    grade: '고급',
  },
  {
    title: '숫자읽기!',
    idx: '3532',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/08/08/20220808163415_62f0bc77dd1ad.jpg',
    grade: '고급',
  },
  {
    title: '한 문장 게임 7',
    idx: '3537',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/08/10/20220810115610_62f31e4aea597.jpg',
    grade: '고급',
  },
  {
    title: "명언 따라읽기 : Who's the best?",
    idx: '405',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/11/03/20171103181830_5f474d3838e98.jpg',
    grade: '입문',
  },
  {
    title: '연상 게임 : 다섯 단어 2',
    idx: '369',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/10/23/20171023104019_5f474ce1c1b5f.jpg',
    grade: '입문',
  },
  {
    title: '명언 따라읽기 : 기회편',
    idx: '277',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/13/20170913195228_5f474d1b07ebf.jpg',
    grade: '입문',
  },
  {
    title: '명언 따라읽기 : 동기부여편',
    idx: '275',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/13/20170913194938_5f474d1af3415.jpg',
    grade: '입문',
  },
  {
    title: '명언 따라읽기 : 우정편',
    idx: '274',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/13/20170913141200_5f474d1ac914d.jpg',
    grade: '입문',
  },
  {
    title: '명언 따라읽기 : 긍정적인 마인드편',
    idx: '273',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/12/20170912173829_5f474d1b218fd.jpg',
    grade: '입문',
  },
  {
    title: '제대로 발음하자! : J & Z편',
    idx: '272',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/11/20170911183457_5f474ce4b6cbb.jpg',
    grade: '입문',
  },
  {
    title: '제대로 발음하자! : B & V편',
    idx: '271',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/11/20170911183111_5f474cbd19412.jpg',
    grade: '입문',
  },
  {
    title: '제대로 발음하자! : F & P편',
    idx: '270',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/05/20170905103445_5f474d183a3a1.jpg',
    grade: '입문',
  },
  {
    title: '제대로 발음하자! : L & R편',
    idx: '269',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/09/04/20170904164719_5f474ce5396fe.jpg',
    grade: '입문',
  },
  {
    title: '열 고개 게임 : 질문편',
    idx: '267',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/08/30/20170830161056_5f474d35320db.jpg',
    grade: '입문',
  },
  {
    title: '연상 게임 : 다섯 단어 1',
    idx: '266',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/08/28/20170828183209_5f474ce1b3ddb.jpg',
    grade: '입문',
  },
  {
    title: '열 고개 게임 : 대답편',
    idx: '265',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/08/28/20170828151751_5f474d3525489.jpg',
    grade: '입문',
  },
  {
    title: '명언 따라읽기 : 도전편',
    idx: '264',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/08/28/20170828135858_5f474d1aac7aa.jpg',
    grade: '입문',
  },
  {
    title: '튜달이의 하루',
    idx: '127',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/09/13/20220913102902_631fdcde48688.jpg',
    grade: '입문',
  },
  {
    title: '오늘의 날씨',
    idx: '125',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/02/13/20170213181834_5f474d36d522c.jpg',
    grade: '입문',
  },
  {
    title: '문장 완성 연습',
    idx: '122',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/02/09/20170209104120_5f474cdf81f59.jpg',
    grade: '입문',
  },
  {
    title: 'Guess What',
    idx: '120',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2017/02/08/20170208102519_5f474ce23fd66.jpg',
    grade: '입문',
  },
  {
    title: '발음 교정',
    idx: '41',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2016/08/01/20160801090000_5f474d1a664b7.jpg',
    grade: '입문',
  },
  {
    title: '이건 무슨 색깔인가요?',
    idx: '769',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2018/08/17/20180817184956_5f474cddb7f2d.jpg',
    grade: '입문',
  },
  {
    title: '이 문구류는 무엇인가요?',
    idx: '770',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2018/08/20/20180820120918_5f474d21ef6f4.jpg',
    grade: '입문',
  },
  {
    title: '현재 시제 배우기 : 현재 시제 vs 현재 진행형',
    idx: '2330',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2020/03/06/20200306154634_5f474d1c62378.jpg',
    grade: '입문',
  },
  {
    title: '당신은 어떤 기분이신가요?',
    idx: '1059',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2018/12/13/20181213165539_5f474ce09f49a.jpg',
    grade: '입문',
  },
  {
    title: 'Be동사 기초 마스터',
    idx: '1327',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/05/15/20190515111144_5f474cba44646.jpg',
    grade: '입문',
  },
  {
    title: '말해봐요, this or that!',
    idx: '1328',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/06/03/20220603124007_629982974fcc1.jpg',
    grade: '입문',
  },
  {
    title: 'Like & Want로 의사 표현하기',
    idx: '1329',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/05/15/20190515111320_5f474cdfaed3e.jpg',
    grade: '입문',
  },
  {
    title: '나, 너, 우리 : 대명사 배우기 1',
    idx: '1589',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210744_5f474d1b8b8ab.jpg',
    grade: '입문',
  },
  {
    title: '나, 너, 우리 : 대명사 배우기 2',
    idx: '1590',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210802_5f474d1b95f35.jpg',
    grade: '입문',
  },
  {
    title: 'I am happy! : be동사 배우기 1',
    idx: '1591',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210826_5f474d1b5a8bb.jpg',
    grade: '입문',
  },
  {
    title: '길 물어보기',
    idx: '1336',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/06/03/20220603123945_62998281e4c00.jpg',
    grade: '입문',
  },
  {
    title: '명사 기본기 정복하기 1',
    idx: '1592',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210843_5f474d1b63bd0.jpg',
    grade: '입문',
  },
  {
    title: '(입문) 자기소개',
    idx: '1337',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/05/16/20190516171856_5f474ce34dffe.jpg',
    grade: '입문',
  },
  {
    title: '명사 기본기 정복하기 2',
    idx: '1593',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210853_5f474d1b7b3ad.jpg',
    grade: '입문',
  },
  {
    title: '동사 기본기 정복하기 1',
    idx: '1594',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210905_5f474d1bbef78.jpg',
    grade: '입문',
  },
  {
    title: '동사 기본기 정복하기 2',
    idx: '1595',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127210916_5f474d1bd8806.jpg',
    grade: '입문',
  },
  {
    title: 'many, some : 형용사 배우기 1',
    idx: '1596',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127211017_5f474d1b33fe2.jpg',
    grade: '입문',
  },
  {
    title: 'hungry, healthy : 형용사 배우기 2',
    idx: '1597',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2019/11/27/20191127211029_5f474d1b3ce77.jpg',
    grade: '입문',
  },
  {
    title: 'very, actually : 부사 배우기',
    idx: '1598',
    imgPath:
      'https://cdn.tutoring.co.kr/uploads/topic_cover/2022/08/03/20220803173758_62ea33e65821c.jpg',
    grade: '입문',
  },
];

const readTopics = async (p: {
  page: number;
  per_page?: number;
  grade: Grade;
  query?: string;
}) => {
  return new Promise<Topic[]>((resolve, reject) => {
    setTimeout(() => {
      try {
        let _topics = topics.map((a) => ({ ...a }));

        if (p.query) {
          _topics = _topics.filter((t) =>
            t.title.match(new RegExp(p.query as string, 'gi'))
          );
        }

        resolve(
          _topics
            .filter((t) => t.grade === p.grade)
            .slice(0, (p.page ?? 1) * (p.per_page ?? 5))
        );
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};

export { readTopics };
