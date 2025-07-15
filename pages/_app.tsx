import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/* 
app.tsx는 Next.js를 초기화 하는 파일
=> 경우에 따라 서버, 클라 모두에서 렌더링 가능
*/