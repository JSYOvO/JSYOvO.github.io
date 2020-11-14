---
title: 토이 프로젝트 - 아마존 클론
date: "2020-10-07T22:12:03.284Z"
description: "ReactJS를 활용한 토이 프로젝트입니다."
---

#### 회원가입, 로그인 그리고 제품 구매 및 결제 기능을 React JS SPA로 구현하였습니다.

##### 사용 기술 - FrontEnd
    > ReactJS + Hooks
    > React Context Api
    > Material UI
    > Firebase - FireStore, Authentication, Hosting
    > Payment - stripe

##### 사용 기술 - BackEnd
    > NodeJS + Express Server
    > Firebase Functions

##### 회원가입 및 로그인

Firebase의 Authentication을 활용해 회원가입 및 로그인 기능 구현하였습니다.

![login](./Demo-Login.gif)

##### 제품 구매 및 결제
제품 구매 장바구니는 Firestore 및 Context_Api로 관리하였고, 결제는 Strpie로 진행하였으며,
Express Server를 Firebase Functions Hosting하여 사용하였습니다.

![cart](./Demo-Cart.gif)
![buy](./Demo-Buy.gif)





##### 후기
ReactJS를 활용하여 아마존을 만들어보았습니다. 간단한 빌드였지만 Node Express Server를 Firebase Functions으로 Hosting 하는 방식과 이를 통해 Stripe 결제 시스템을 직접 구현해보는 좋은 경험이었습니다.