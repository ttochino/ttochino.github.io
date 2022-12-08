import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <span>KIMSUJEONG</span>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>EXHIBITION</a>
        </Link>

        <Link href="/artworks">
          <a className={router.pathname === "/artworks" ? "active" : ""}>ARTWORKS</a>
        </Link>
        <Link href="/project">
          <a className={router.pathname === "/project" ? "active" : ""}>PROJECTS</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
        </Link>
      </div>
      <style jsx>
        {`
        nav {
          margin: 3% 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10%;
        }

        span {
          font-size: 1.3rem;
          color: #424949;
          font-family: 'Nanum Myeongjo', serif;
          font-weight: 800;
          margin-left: 20%;
          position: fixed;
        }
        div {
          display: flex;
          justify-content: flex-end;
          margin-right: 20%;
          gap: 5%;
          font-weight: 300;
          position: fixed;
          right: 0;
        }
        a {
          text-decoration: none; 
          color: #515A5A;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 0.9rem;
        }
        a:hover {
          color: #CD6155;
        }
        .active {
          color: #CD6155;
        }
        `}
      </style>
    </nav>
  );
}