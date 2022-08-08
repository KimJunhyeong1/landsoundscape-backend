# LandSoundScape

![maskable_icon_x384](https://user-images.githubusercontent.com/41819129/180457566-7ab10012-f7b5-4223-b0e0-3ed289bb3e3c.png)

[LandSoundScape - Fall into the beautiful landscape and the sound of your imagination](https://www.landsoundscape.co/)

## 🙇‍♂️ ****Intro****

“**Fall into the beautiful landscape and the sound of your imagination.”**

LandSoundScape는 사용자가 사진을 업로드했을 때 딥러닝 모델을 이용하여 사진에 가장 어울리는 소리와 태그를 자동으로 설정해주어 더 몰입도 있게 다른 사람과 풍경 사진을 공유할 수 있습니다.

 

세계 곳곳의 풍경 사진을 소리와 함께 즐기고, 지도를 통해 원하는 나라의 리스트를 확인할 수 있습니다.
마음에 드는 사진을 저장하고, 태그를 이용하여 원하는 주제에 맞는 사진을 찾을 수 있습니다.
  
  
자신의 추억이 담긴 풍경 사진을 상상의 소리와 함께 공유해보세요.

## 💡 Motivation

![sean-oulashin-KMn4VEeEPR8-unsplash (1)](https://user-images.githubusercontent.com/41819129/180457919-130fd12d-0b52-47e8-9b2f-563ae76c1a7d.jpg)


여행을 잘 가지 못하는 지금 예전에 갔던 해외, 국내 사진을 자주 찾아보곤 했습니다. 해변의 풍경 사진을 보았을 때 부서지는 파도 소리를 떠올리듯이 **소리를 상상할 수** 있었습니다.

**상상의 소리**를 사용자가 직접 설정하지 않아도, 풍경과 함께 제공할 수 있다면 사진을 볼 때, 마치 그 장소에 있는 것처럼 **몰입도**를 더 높여줄 수 있을 거로 생각했습니다.

또한, 이러한 사진을 다른 사람과 쉽게 공유할 수 있다면 내가 가지고 있는 **추억을 다른 사람에게 더 공감받을** 수 있을 거로 생각했습니다.

마지막으로, **접근성이 좋은 웹**을 활용하여 사용자가 쉽게 서비스를 이용하고 복잡한 과정은 최대한 사용자에게 드러내지 않도록 하여 **누구나 쉽게** 서비스를 사용할 수 있으면 좋겠다고 생각했습니다.

이러한 생각이 담겨 사용자는 단순히 사진을 업로드하는 것만으로도 풍경에 더 몰입하고, 공유할 수 있는 **‘LandSoundScape’** 개발하게 되었습니다.

## 💿 Feature  

![Group 25](https://user-images.githubusercontent.com/41819129/180470262-950252ea-1e8f-4228-b7bb-50a74771e5e2.png)

### [기능 소개 페이지](https://living-rosehip-25b.notion.site/Feature-9462286ae3384a90b058a7bc543e859a)
  
  
 
## 🎖 Keyword

### `TensorFlow.js`

**핵심적인 기능 중 하나인 이미지를 분석하여 사운드를 예측하고, 태그를 예측하는 기능이 있습니다**.

특히, 이미지를 분석하여 사운드를 예측하는 ‘SoundNet’의 경우 TensorFlow.js에서 기본적으로 지원하지 않는 모델이었고 결국 Kears 모델을 Json, Binary 파일로 변환하여 모델을 사용하여야 했습니다.

구글에서 제공해주는 레퍼런스를 참고하여 해당 모델과 이미지의 ‘feature vector’를 이용하는 코드를 JS 문법과 TensorFlow.js를 통해 ‘predict’ 로직을 작성하였습니다.

하지만, 모델 자체가 Python 환경 및 라이브러리에 최적화 되어 있어 예측한 결과의 정확도가 매우 떨어지는 것을 확인하였습니다. 

결국 정확도를 극적으로 올리기 위해서는 다른 대안을 찾아야 했고, NodeJS에서 제공하는 ‘Child Process’를 사용하여 문제를 해결하였습니다.

NodeJS 내부에서 자식 프로세스를 생성하고 독립된 환경에서 이미지에 ‘feature vector’를 추출하여 적합한 사운드를 예측하는 파이썬 코드를 실행하고 그 결과를 받아올 수 있도록 하였습니다.

이 과정은 프로젝트를 진행하면서 가장 시간을 많이 투자하고, 끊임없이 고민한 부분입니다. 이 고민을 통해 프론트 단에서 이미지에 더 적합한 사운드를 제공해 줄 수 있었습니다.
  
### `GraphQL`
  
**이번 프로젝트에서는 기존의 ‘REST API’ 대신 GraphQL을 도입하였습니다.**

도입한 이유는 프로젝트 측면에서는 프론트 각 페이지에서 필요한 데이터만 서버에서 받아올 수 있도록 하고 적절한 쿼리를 날려 다시 재가공하지 않고 받아온 데이터를 그대로 사용할 수 있도록 하여 API 관련 프론트에 부담을 덜고 싶었습니다. 학습적인 측면에서는 GraphQL이 기존의 REST API의 단점을 보완하고자 도입되었다고 하는데 과연 어떤 점이 다르고, 장단점은 무엇일까를 몸소 경험해보고 싶었습니다.

GraphQL을 처음 도입해보았지만 제대로 설계해 보고 싶어 개발 전 조사를 많이 진행하였습니다.
파일 업로드와 확장성 있는 서버를 구축하기 위해 ‘apollo-server-express’를 사용하였습니다. 또한, 각 데이터 모델을 기준(DataSoucrce)으로 Query, Muation, Resolver, Type을 모듈화하여 관심사를 분리하고 유지보수에 용이하도록 개발하였습니다.
‘Context’를 이용하여 JWT Authorization 로직을 구현하였습니다.
 
  

GraphQL을 도입하고 가장 크게 느낀 장점은 ‘따로 문서화하지 않고 각 Query, Muation을 테스트하고 명세를 확인할 수 있는 점' 이였습니다.

‘**Apollo Studio’를** 이용하여 개발 중인 백엔드의 Query 들을 누구나 테스트할 수 있는 점이 개발 만족도를 높여주었습니다.
  
![apollo](https://user-images.githubusercontent.com/41819129/180460881-c2809308-a961-4545-8ecb-1eedd2ba5785.png)

GraphQL을 큰 단점은 파일 업로드였습니다. 하지만, ‘apollo-server-express’, ‘graphql-upload’를 적극적으로 활용하였고 ‘apollo-server’, ‘node’ 버전을 낮추지 않고 이 문제를 해결할 수 있었습니다.

직접 경험하고 느낀 점은 'GraphQL이 REST API보다 우세한 것이 아니라 상황에 맞게 사용해야 한다’라고 느꼈습니다. GraphQL이 효율적으로 ‘Fetching’하고, 테스팅이 용이한 장점이 가지고 있지만 파일 업로드 부분에서 특히 느낀 긴 세월 동안 진화한 ‘REST API’의 안정성과 범용성을 따라가지는 못한다고 생각했습니다. 

‘apollo-server-express’를 사용하면 기존의 Express(REST) 환경에서 특정 엔드포인트에 GraphQL을 사용할 수 있습니다. 이렇게 두 가지를 적절하게 섞어 팀, 개인, 진행하고 있는 프로젝트의 특성에 맞게 사용하는 것이 올바른 방향이지 않을까 생각하게 되었습니다.
  
### `PWA, 반응형 디자인`

이번 프로젝트에서 **PWA(Progressive Web App)** 를 적용하여 **모바일 환경에서 웹이지만 네이티브 앱처럼** 사용할 수 있도록 하였습니다. **또한 다양한 플랫폼에서 서비스를 사용할 수 있도록 반응형 디자인을 도입하였습니다.**

PWA 적용을 위하여 핵심인 ‘Manifest’ 파일을 작성하고 'ServiceWoker’를 사용하였습니다.

PWA 정책에서 강조하는 부분을 최대한 맞추기 위해 ‘Lighthouse’를 통해 저의 웹페이지 점수를 분석하고, 부족한 부분을 지속해서 보안하였습니다.

그 결과 모바일 앱, 크롬 앱으로 설치가 가능하게 되었고 사용자에게 네이티브 앱을 사용하는 것과 같은 경험을 줄 수 있었습니다.

또한, ‘WorkBox’를 이용하여 GraphQL 쿼리들을 문자열로 변환시킨 후 해시키를 이용하여 요청과 응답을 캐싱하였습니다. 이미지, 사운드 파일 또한 ‘ServiceWoker’에 캐싱하여 오프라인에서도 동작할 수 있도록 하였습니다.

오프라인 환경이 아닐 때는 ‘networkFirst’전략을 이용하여 실제 데이터와 Sync를 맞추는 데 초점을 두었습니다.

다양한 플랫폼에서 달라지는 화면 크기에 대응하기 위해서는 반응형 디자인이 필수적입니다.

이번 프로젝트 서비스의 특성상 많은 기기를 지원해야 했고, ‘Media Query’, 스타일 컴포넌트에 ‘Global Style’을 이용하여 대응하였습니다. 또한, 기존의 ‘px’을 사용하여 단위를 정했지만, 반응형 디자인에서 필수적인 ‘rem’을 사용하였습니다. 

마지막으로 사진을 보여주는 화면에서는 모바일과 데스크탑의 화면 크기를 고려하여 각 화면에 맞는 레이아웃 배치를 적용하였습니다.
  

## 💎 **Foundation**
#### 'landSoundScape' 프로젝트에서 적용한 프로그래밍 개념을 글로 정리하였습니다.
- [React 객체지향 5원칙 (SOLID)](https://velog.io/@khm11904/React-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-5%EC%9B%90%EC%B9%99-SOLID)
- [React Design Pattern](https://velog.io/@khm11904/React-Design-Pattern)
- [함수형 프로그래밍](https://living-rosehip-25b.notion.site/54d730b2b73c49a1809cc36c2802f7ef)

## 🗓 Schedule

### 1주차 (22.06.27 ~ 07.01) `기획`

- [아이디어 뱅크](https://living-rosehip-25b.notion.site/2427bf023ab34261bd57a3842093f14f)
- [LandSoundScape](https://living-rosehip-25b.notion.site/LandSoundScape-5f742031af1f465f8cc6fb2a5072d2f8)
- [DB schema modeling](https://living-rosehip-25b.notion.site/DB-schema-modeling-7014923dd4324b5ebe0eacf7d496dcb1)
- [목업 및 프로토타입](https://living-rosehip-25b.notion.site/bb0bd4770d88433d8e6c89ecf447448c)
- [PoC (Proof of Concept)](https://living-rosehip-25b.notion.site/PoC-Proof-of-Concept-bdeb19706d554f59b4b2d1aac20ee482)

### 2주차 (22.07.02 ~ 07.10) `개발`

- 메인 기능(TensorFlow) 작업
- 프론트, 백엔드 설계 및 개발
- AWS S3를 이용한 정적파일 업로드

### 3주차 (22.07.11 ~ 07.15) `개발` `배포`

- 메인 기능 업그레이드
- Netlify를 이용한 프론트 환경 배포
- AWS Elastic Beanstalk를 이용한 백엔드 환경 (Node, Python) 환경 배포

## 📁 ****Installation****

### Frontend (React)

1. 프로젝트를 다운 받은 후 프로젝트 디렉토리 내부에서 다음 명령어 입력

```jsx
yarn

yarn start
```

2. 환경설정 (.env file)을 아래와 같이 입력해야 합니다.

```bash
REACT_APP_GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
REACT_APP_API_SERVER_URL=<YOUR_SERVER_URL>

```

### Backend (apollo-server-express)

1. 프로젝트를 다운 받은 후 프로젝트 디렉토리 내부에서 다음 명령어 입력

```jsx
yarn

yarn start
```

2. 환경설정 (.env file)을 아래와 같이 입력해야 합니다.

```bash
MONGODB_URI=<YOUR_MONGODB_DATABASE_URL>

JWT_SECRET=<YOUR_JWT_TOKEN_SECRET>

AWS_ACCESS_KEY=<YOUR_AWS_ACCESS_KEY>
AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
AWS_S3_REGION=<YOUR_S3_REGION>
AWS_S3_BUCKET_NAME=<YOUR_S3_BUCKET_NAME>

PYTHON_PATH=<YOUR_PYTHON_INSTALL_PATH>
```

## 📚 Stack

### **Frontend**

- PWA
    - ServiceWorker
    - WorkBox
- React
    - VAC Pattern
- React Query (Sever state)
- Recoil (Client state)
- GraphQL Request
- D3.js
- Styled Compontent
- Jest

### **Backend**

- Node.js
- Apollo Server Express
- TensorFlow.js
- JWT authorization
- MongoDB - Atlas
- AWS S3
- Jest
- Python 3.7
    - Numpy
    - Scipy

#### API: GraphQL
#### Depoly: Netlify, AWS Elastic Beanstalk
#### 패키지 관리: Yarn

## 🔗  **Github Repositories**

### Frontend

[GitHub - KimJunhyeong1/landsoundscape-frontend](https://github.com/KimJunhyeong1/landsoundscape-frontend)

### Backend

[GitHub - KimJunhyeong1/landsoundscape-backend](https://github.com/KimJunhyeong1/landsoundscape-backend)


## 🚀 Outro

매주 진행했던 과제, 2번의 테스트, 팀 프로젝트를 거쳐 마지막 지금의 개인 프로젝트까지 어느 하나 쉬운 것이 없었고 매번 고비가 찾아왔습니다.

하지만, 고비를 넘어가기 위해 조사하고 삽질했던 무수히 많은 시간을 통해 개발자로써 성장하고 개발을 진행할 때 매 순간 결정하는 대안의 ‘증거'를 만들 수 있었습니다.

이번 개인 프로젝트 또한 마찬가지였었습니다. 기획하는 단계에서부터 ‘TensorFlow’ 관련 PoC에서 어려움을 겪었고, 실제 개발 단계에서도 제가 원하는 결과가 나오지 않아 그 결과를 얻기 위해 많은 시간을 투자하였습니다.

이미지에 적합한 사운드를 예측하는 정확도를 올리기 위해 NodeJS에서 처음 사용해 보는 ‘Child Process’를 이용하여 문제를 해결할 수 있었습니다. 제게 주어진 도구를 잘 활용하여 원하는 결과를 얻을 수 있는 자신감을 주었습니다.

또, 백엔드를 AWS EB에 배포하는 과정에서 NodeJS에서 ‘Child Process’를 통해 Python 환경과 라이브러리가 필요하였습니다. 기존의 백엔드 배포 과정으로는 이 문제를 해결할 수 없었습니다.

이전에 직장에서 ‘Linux’를 사용했던 경험을 살려 EB(Linux) 환경에 필요로 하는 Python 환경과 라이브러리를 직접 Extensions Command를 작성하여 설치하였습니다. 이 과정에서 레퍼런스가 존재하지 않아 막막했지만 제가 머릿속으로 생각한 방법을 통해 해결하였을 때 이루말할 수 없는 성취감을 느꼈습니다.

GraphQL을 처음 도입하였고 많은 시행착오를 겪었습니다. 특히, GraphQL의 단점인 파일업로드를 개발하는 과정에서는 “왜 내가 기존의 잘 쓰던 REST API를 쓰지 않았을까.. 그렇게 했다면 수월하게 개발하였을 텐데…”라고수도없이 후회하였습니다. 하지만, 공식문서를 참고하여 기존의 사용하던 ‘apollo-server’에서 ‘apollo-server-express’ 로 마이그레이션 후 ‘graphql-upload’를 이용하여 파일업로드 문제를 해결하였습니다. 문서로만 접했던 두 가지 기술 스택의 장단점을 직접 경험해보는 것이 얼마나 중요한지 깨우치게 하였습니다.

PWA 발전 가능성과 반응형 디자인에 중요성을 경험하였습니다. 이전에 제가 개인적으로 만들고 싶어 했던 서비스가 하이브리드 방식으로 모바일 대응이 필요하였는데 PWA, 반응형 디자인을 도입하는데 두려움이 있어 적용하지 못했던 경험이 있습니다.

이번에 PWA와 반응형 디자인을 도입하여 저에게 존재했던 그런 두려움을 떨쳐내고 개발자로서 한 발짝 나아갈 수 있는 경험이 되었습니다.

프로젝트 내내 느꼈던 부분은 개발자에게 있어서 기본기는 가장 중요하다 입니다. 예를 들어 리액트를 사용하여도 JS 기초 문법 기반이 얼마나 단단한지에 따라 코드의 질이 달라진다고 생각합니다. 

그래서 저는 그 기본기를 가지기 위해 모든 과정에서 신경 썼고, 앞으로도 더 단단한 기본기를 갖추고 싶습니다.

**마지막으로, 이번 프로젝트는 제가 지금까지 배운 지식과 기본기에 대한 ‘증명’이었고, 앞으로 끊임없이 성장하고 싶은 계기가 되었습니다.**
