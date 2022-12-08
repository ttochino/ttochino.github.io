import Seo from "../components/Seo";

export default function Project() {
  return (
    <>
      <Seo title="Projects" />
      <div className='Box'>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
      </div>

      <style jsx>
        {`


        .img {
          width: 60vw;
          height: 19vw;
          background-color: gray;
        }

        .img:hover {
          opacity: 80%;
        }
        `}
      </style>
    </>
  );
}