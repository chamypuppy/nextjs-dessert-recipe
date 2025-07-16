export default function Hello(){
  console.log(typeof window === 'undefined' ? '서버' : '클라이언트')

  return <>Hello</>
}

export const getServerSideProps = () => {
  return {
    props: {},
  }
}

// Nextjs가 SSR과 클라를 모두 수행 중 (cmd에선 서버, 개발자 콘솔은 클라)