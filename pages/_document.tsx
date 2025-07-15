import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


/* 
document.tsx는 서버에서 시작되는 파일 
=> 이벤트 핸들러 추가 불가
*/