import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo title="About" />
      <span className='header'>김수정 Sujeong Kim </span>
      <div className='contact'>
        <h2>contact</h2>
        <span>
          <p>E-mail/ sujeong0908@gmail.com</p>
          <p>instagram/ @_kimsujeong_</p>
        </span>
      </div>

      <div className='contact'>
        <span>
          <p>예술가</p>
          <p>대한민국 부산에서 활동</p>
          <p>예술공간 영주맨션 운영</p>
        </span>

        <span className='text'>
          <p>시각예술작업을 한다. 부산에서 태어나 부산을 기반으로 활동하며 부산의 예술공간 영주맨션의 관리인으로 있다.</p>
          <p>
            삶을 관통하는 서사인 ‘사랑’이 개인들을 뒤흔드는 과정, 이유, 목적, 희생에 집중해 작업을 진행하고 있다.</p>
        </span>
      </div>

      <div className='contact'>
        <span>
          <p>Artist</p>
          <p>based in Busan, South Korea.</p>
          <p>manage of Artspace Youngjumansion</p>
        </span>
        <span className='text'><p>I work on visual arts. Born in Busan, he is based in Busan and is the manager of Yeongju Mansion, an art space in Busan.</p>
          <p> Love, a narrative that penetrates life, is focusing on the process, reason, purpose, and sacrifice that shakes individuals.</p></span>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            width: 60vw;
            flex-direction: column;       
            justify-content:center;
          }
          .header {
            margin: 50px 0 100px 0;
            font-weight: 300;
            font-size: 1.2rem;
          }
          h2 {
            margin-bottom: 10px;
          }
          .contact {
            margin-bottom: 50px;
          }
          .text {
            font-weight: 300;
            font-size: 1rem;
            word-spacing: 0.5px;
            line-height: 1.3;
          }
          span {
            text-decoration: none; 
            color: #515A5A;
            font-family: 'Noto Sans KR', sans-serif;
            margin-bottom: 2%;
            font-size: 1.0rem;
            font-weight: 300;
            word-spacing: 0.6px;
            line-height: 1.3;
          }
          `}
      </style>
    </>
  );
}