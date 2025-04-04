# sinilfood_homepage
신일푸드 홈페이지

# 목차
1. [버전정보](#버전정보)  
2. [설정가이드](#설정가이드)  
3. [실행](#실행)  
4. [개발가이드](#개발가이드)  
5. [배포](#배포)  


## 버전정보

  <필수설치>
- React: 18.3.1  
- React Router: 6.28.0  
- react-app-rewired: 2.2.1  
- Swiper: 11.2.4  

- 기타 라이브러리: `package.json` 참고  

---

## 설정가이드

### 별칭(Alias) 설정
`config-overrides.js`를 통해 웹팩 설정을 수정해 다음과 같은 경로 별칭을 지정해야함 : 

```js
'@'           → src  
'@assets'     → src/assets  
'@components' → src/components  
'@pages'      → src/pages  
```

해당 설정을 위해 [react-app-rewired](https://github.com/timarney/react-app-rewired)를 사용

`config-overrides.js`는 프로젝트 루트에 위치

### 브라우저 지원
- `browserslist`는 최신 크롬/파이어폭스/사파리를 지원





## 실행

### 로컬 개발 서버 실행

```bash
npm install
npm start
```

`react-app-rewired`를 사용하므로, 내부적으로는 `react-scripts` 대신 수정된 설정으로 실행됨

---

## 개발가이드

### 라우팅 구조

`routes.js`에서 라우팅을 관리하며, 모든 페이지는 `BaseLayout` 컴포넌트 하위에 위치


```js
<Route path="/" element={<BaseLayout />}>
  <Route index element={<Home />} />
  <Route path="/about" element={<AboutCompany />} />
  <Route path="/business" element={<FCProducts />} />
  <Route path="/customer-service" element={<CustomerSupport />} />
  <Route path="/products" element={<OilProducts />} />
</Route>
```
### Scroll To Top

페이지 이동 시 스크롤이 상단으로 자동 이동되도록 `App.js` 내에서 `ScrollToTop` 컴포넌트를 사용

## 페이지 구조
```
프로젝트
├── .gitignore
├── config-overrides.js //웹팩 설정
├── package.json 
├── package-lock.json
├── README.md
├── App.css
├── App.js
├── App.test.js
├── fonts.css
├── index.css
├── index.js
├── reportWebVitals.js
├── routes.js
├── setupTests.js
└── src
    ├── assets
    │   ├── fonts
    │   │   ├── AppleSDGothicNeoB.ttf
    │   │   ├── AppleSDGothicNeoEB.ttf
    │   │   ├── AppleSDGothicNeoL.ttf
    │   │   ├── AppleSDGothicNeoM.ttf
    │   │   └── … (기타 폰트 파일들)
    │   └── img
    │       ├── about //about 페이지의 이미지들
    │       ├── business //business 페이지의 이미지들
    │       ├── customer //customer 페이지의 이미지들
    │       ├── franchise //franchise 페이지의 이미지들
    │       ├── oilproduct //oilproduct 페이지의 이미지들
    │       ├── arrow.png
    │       ├── banner_image.png
    │       ├── mainbanner1.png
    │       ├── mainbanner2.png
    │       ├── mainbanner3.png
    │       └── … (기타 이미지들)
    ├── components
    │   ├── baseLayout
    │   ├── business
    │   ├── customer
    │   ├── footer
    │   ├── header
    │   ├── mobile
    │   ├── oilproduct
    │   ├── KakaoMap.jsx
    │   └── map.css
    └── pages
        ├── About // 회사소개 페이지
        ├── Business //사업소개 페이지
        ├── CustomerService //고객상담 페이지 *제거 예정
        ├── Home //홈(메인) 패이지
        └── Products // 제품 소개 페이지

---

- src/assets/fonts : 폰트 파일 모음

- src/assets/img : 이미지 파일(폴더별로 섹션 구분)

- src/components : 재사용 가능한 컴포넌트(레이아웃, 헤더/푸터, 섹션, 모바일 컴포넌트)

- src/pages : 실제 페이지 단위 (About, Business, CustomerService, Home, Products)

---

## 각 페이지 별 구조
```
Home
├── Home.js                  // 홈 페이지의 메인 엔트리 컴포넌트
└── components
    ├── CenterContents.js    // 전국 센터 운영, 물류 네트워크 소개 트럭이미지 슬라이드 되는 섹션
    ├── CS.js                // 고객 센터(고객 문의/연락처 등) 섹션
    ├── MainBanner.js        // 메인 배너(슬라이드) 섹션
    ├── News.js              // 새소식(공지사항/뉴스) 섹션
    ├── OilSection.js        // 주력 제품(식용유) 관련 소개 섹션
    ├── Partners.js          // 협력사/파트너 로고 소개 섹션
    ├── Slider.js            // 프랜차이즈 로고 슬라이더 섹션
    └── Slogan.js            // 슬로건(타이틀 문구) 섹션

```
- Home.js

- CenterContents.js / center.css

“전국 직영센터 운영” 등 물류 네트워크와 강점을 소개하는 섹션
트럭 이미지 슬라이더, 버튼 클릭 시 정보가 전환되는 UI를 포함

- CS.js / cs.css

고객 상담/문의 섹션

상담 전화번호, 운영 시간, 파트너 문의 등을 표시하며

- MainBanner.js / mainbanner.css

홈 페이지 최상단에 위치하는 대형 슬라이드 배너 영역
Swiper 라이브러리를 사용해 여러 장의 배너 이미지를 순환하고, 
현재 슬라이드 인덱스 등을 표시

- News.js / news.css

“새소식”이나 “공지사항” 등 최신 정보를 보여주는 섹션입니다.
Swiper나 리스트 형식으로 여러 개의 뉴스/공지 항목을 슬라이드하거나 나열

- OilSection.js / oil.css

신일푸드의 식용유(자사 전용유, 업소용 등)에 대한 소개 섹션
메인이미지, 설명, 버튼 등을 통해 제품 특장점을 홍보합니다

- Partners.js / partners.css

협력사/제조사 로고들을 모아 보여주는 섹션
대표적인 협력사 로고를 Grid 형태나 슬라이드 형태로 표시

- Slider.js / slider.css

프랜차이즈 로고 등 특정 항목을 가로 슬라이드 형태로 보여주는 컴포넌트
Swiper로 여러 로고를 자동 재생(Autoplay)으로 스크롤하거나, 사용자가 직접 넘길 수 있음

- Slogan.js / slogan.css

“안전하고 품질 높은 제품” 등 홈 페이지 중간의 핵심 메시지를 강조하는 슬로건 영역
추가 배너 이미지나 문구를 함께 배치함
    

---
### 회사소개 페이지
```
About
├── AboutCompany.js          // About 페이지의 메인 엔트리 컴포넌트
├── AboutBanner.jsx          // 상단 배너 컴포넌트
├── AboutNavbar.jsx          // About 페이지 내 네비게이션(탭/메뉴) 컴포넌트
└── components
    ├── CI.js                // CI(브랜드 아이덴티티) 관련 섹션
    ├── Certifications.js    // 인증/특허(회사 보유 인증) 섹션
    ├── CertificationsMobile.js // 위 인증 섹션의 모바일 전용 버전
    ├── History.js           // 회사 연혁(히스토리) 섹션
    ├── HistoryMobile.js     // 연혁의 모바일 전용 버전
    ├── Introduction.js      // 회사 개요/소개 섹션
    ├── Location.js          // 회사 위치 안내 섹션
    ├── Organization.js      // 회사 조직도 섹션
    ├── about-banner.css     // AboutBanner 스타일
    ├── about-cert.css       // Certifications 스타일
    ├── about-cert-mobile.css // CertificationsMobile 스타일
    ├── about-company.css    // AboutCompany 전체 스타일
    ├── about-history.css    // History 스타일
    ├── about-history-mobile.css // HistoryMobile 스타일
    ├── about-location.css   // Location 스타일
    ├── about-organization.css // Organization 스타일
    └── about-nav.css        // AboutNavbar 스타일
```

- AboutCompany.js

회사 소개 페이지의 최상위 컴포넌트  
내부에서 AboutBanner, AboutNavbar, 그리고 components 폴더의 여러 섹션을 조합하여 전체 레이아웃 구성

- AboutBanner.jsx / about-banner.css

About 페이지 상단에 표시되는 배너 컴포넌트  
배경 이미지와 주요 문구를 활용해 회사 브랜드 이미지 전달

- AboutNavbar.jsx / about-nav.css

About 페이지 내 탭/메뉴 역할 수행  
“연혁”, “조직도”, “인증” 등 섹션 간 이동을 탭 또는 서브 네비게이션 형식으로 제공

- CI.js

회사의 로고, 컬러, 슬로건 등 브랜드 아이덴티티(CI) 소개

- Certifications.js / about-cert.css

회사가 보유한 인증 및 특허 목록 나열 및 설명  
모바일 전용 UI는 CertificationsMobile.js와 about-cert-mobile.css로 별도 관리

- History.js / about-history.css

회사의 연혁을 타임라인 형태로 표시  
모바일 대응은 HistoryMobile.js, about-history-mobile.css로 별도 구성

- Introduction.js / (스타일이 about-company.css에 포함될 수 있음)

회사 소개(개요, 비전, 핵심 가치 등) 내용 설명

- Location.js / about-location.css

회사 위치(주소, 지도, 교통편 등) 안내

- Organization.js / about-organization.css

회사 조직도를 시각화해 부서별 역할과 인원 구성을 도식화

### business페이지 - /src/components/business 폴더에 존재
```
business
├── mobile
│   ├── BusinessMobile.css
│   ├── LogisticsMobile.js
│   ├── ManufacturersMobile.js
│   ├── ManufacturingMobile.js
│   ├── OilTypesMobile.js
│   └── RenewableEnergyMobile.js
├── Business.css
├── BusinessNavbar.js
├── Logistics.js
├── Manufacturers.js
├── OilTypes.js
└── RenewableEnergy.js
```
- mobile/BusinessMobile.css
비즈니스(사업소개) 페이지(모바일 전용)의 전체 스타일 시트

- mobile/LogisticsMobile.js
전국 직영센터에 관한 정보 섹션의 모바일 전용 컴포넌트

- mobile/ManufacturersMobile.js
제조사/협력사 관련 정보(로고)를 모바일로 표시하는 컴포넌트

- mobile/ManufacturingMobile.js
전용유 제작에 관한 프로세스를 설명하는 모바일 전용 컴포넌트

- mobile/OilTypesMobile.js
식용유 종류, 대두유 카놀라유 등을 모바일 UI로 소개하는 컴포넌트

- mobile/RenewableEnergyMobile.js
신재생 에너지 esg 경영에 대한 회사 사업 소개 섹션을 모바일에 최적화해 보여주는 컴포넌트

- Business.css
비즈니스(사업소개) 페이지 데스크톱 스타일 시트

- BusinessNavbar.js
물류, 제조사, 식용유 종류, 신재생 에너지 등 비즈니스 관련 섹션 간 네비게이션을 담당

- Logistics.js
전국 직영센터에 관한 정보 섹션의 데스크톱 전용 컴포넌트

- Manufacturers.js
전용유 제작에 관한 프로세스를 설명하는 데스크톱 컴포넌트

- OilTypes.js
식용유 종류, 대두유 카놀라유 등을 데스크톱 UI로 보여주는 컴포넌트

- RenewableEnergy.js
신재생 에너지 esg 경영에 대한 회사 사업 소개 섹션



## 배포


```bash
npm run build
```

- 빌드 시 `react-app-rewired`의 설정이 반영 
- `static/js`, `static/media` 등의 경로 규칙은 `config-overrides.js`에서 지정됨

<config-overrides.js>

```js
  const path = require('path');

  module.exports = function override(config) {
    // 이미지 출력 경로 수정
    config.output = {
      ...config.output,
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
      assetModuleFilename: 'static/media/[name].[hash][ext]'
    };
    
    // 별칭 추가
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages')
    };
    
    return config;
  };
```

> 배포 전 확인사항:

> - 브라우저 호환성 체크
> - 설치 라이브러리 확인
> - 경로 alias 문제 확인
> - 기존 s3버킷에 데이터 확인
