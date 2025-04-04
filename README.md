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
