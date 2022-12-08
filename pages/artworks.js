import Seo from "../components/Seo";

export default function Artwork() {
  return (
    <>

      <Seo title="Artworks" />
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