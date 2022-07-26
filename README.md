<h1 align="center"> 다량 데이터 설계 및 구현 과제 </h1>

<h3 align="center"> 서비스 링크 : https://vigilant-rosalind-e05fcd.netlify.app/</h3>

## 👏 프로젝트 소개

> 최대한 많은 양의 데이터 중 자신이 원하는 데이터를 선택하여, 효율적으로 이용할 수 있는 기능을 가진 물류 정보 처리 웹 구현하였습니다.


## 🚀 스택

`React` `javascript` `styled-components` `redux toolkit`

## 🗒 프로젝트 진행 과정 및 구현 사항

[위키 링크](https://github.com/console-lo9/coloseum_sheet/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A7%84%ED%96%89-%EA%B3%BC%EC%A0%95-%EB%B0%8F-%EA%B5%AC%ED%98%84-%EC%82%AC%ED%95%AD)

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/coloseum_sheet.git

# install modules
$ cd coloseum_sheet
$ npm install || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "@reduxjs/toolkit": "^1.7.2",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.26.0",
    "nanoid": "^3.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.0"
  },
```

## 📂 프로젝트 구조

    ├── public
    └── src
        ├── assets
        ├── components
        │   ├── Cards
        │   ├── ItemSheet
        │   └── SelectView
        ├── constants
        ├── layout
        ├── store
        └── style

## ✨ 구현 사항

데이터 정렬 기능, 스크롤 포탈 기능, 가상 MOCK_DATA 관리 등을 주로 맡아 구현하였습니다.

## 🗺 한 눈으로 보는 구현 기능

1. 데이터 정렬 기능

  <img width="500" src="https://user-images.githubusercontent.com/87363422/181039268-d0d952f8-d5b4-4b76-a574-d9db6e085780.gif" />

2. 스크롤 포탈 기능

  <img width="500" src="https://user-images.githubusercontent.com/87363422/181040666-26864f2c-d565-4d2c-8ae3-f5dc85480af6.gif" />
