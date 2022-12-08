import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className='container'>{children}</div>
      <footer><span>Copyrightⓒ2023 KIMSUJEONG All rights reserved.</span></footer>
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

        .container {
          display: flex;
          flex-direction: column;
          margin: 5% auto 10% auto;
          align-items: center;
          justify-content: center;
        }

        .Box {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 5%;
          justify-content: center;
        }
        
        h1{
          font-size: 1.2rem;
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: 400;
          color: #515A5A;
        }
        h2{
          font-size: 1.1rem;
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: 400;
          color: #515A5A;
        }
        footer {
          display: flex;
          width: 100%;
          justify-content: center;
          color: #515A5A;
          font-family: 'Noto Sans KR', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          margin-bottom: 3%;
          position: fixed;
          bottom: 0;
        }
        `}
      </style>
    </>
  );
}