import Seo from "../components/Seo";
import Image from 'next/image';

export default function Home() {
  return (
    <>

      <Seo title="Exhibition" />
      <div className='Box'>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
      </div>

      <style jsx>
        {`
        .image-box {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 5%;
          justify-content: center;
        }

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