# mcs-userui
   
## node 확인
nodejs 있을 경우 불필요

nvm 설치(setup) https://github.com/coreybutler/nvm-windows/releases

* nvm install v14.15.4

* nvm use 14.15.4

node -v (노드 버전 확인)

npm -v (npm 버전 확인)

nvm ls (nvm에 설치된 nodejs 버전 목록 확인)
***
## 프로젝트 설정 방법
### npm 사용시
```
npm install
```
### yarn 사용시
```
yarn install
```
***
## 개발서버 실행 방법
### npm 사용시
```
npm run dev
```
### yarn 사용시
```
yarn dev
```
***
## App running at
http://localhost:8080
***
## VS Code ESLint 적용 방법
### ESLint Extension 설치
### settings.json 파일 수정
```
"eslint.validate": [
{
    "language": "vue",
    "autoFix": true
},
{
    "language": "javascript",
    "autoFix": true
},
],
"editor.codeActionsOnSave": {
    "source.fixAll": true,
},
"editor.formatOnSave": true
```
위 내용을 추가