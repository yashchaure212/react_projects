import React, { useState } from "react";
import styled from "styled-components";

const ProductImage = ({ imgs = [{ url: "" }] }) => {
    const [coverImage, setCoverImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="photo-left">
        {imgs.map((img, index) => {
          return (
            <div key={index} className="box">
              <img onClick={() => {setCoverImage(img)}} src={img.url} alt={img.filename} />
            </div>
          );
        })}
      </div>
      <div className="photo-main">
        <div className="box">
          <img src={coverImage.url} alt={coverImage.filename} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  .photo-left {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .photo-left .box {
    border: 1px solid #354e51;
    height: 13rem;
    width: 20rem;
  }
  .photo-left .box:hover {
    scale: 1.02;
  }
  .photo-left .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .photo-main {
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .photo-main .box {
    border: 1px solid #354e51;
    height: 25rem;
    width: 40rem;
  }
  .photo-main .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 100%;
    width: 95%;
    flex-direction: column;
    gap: 3rem;

  .photo-left {
    width: 100%;
    flex-direction: row;
    gap: 1rem;
  }
  .photo-left .box {
    height: 8rem;
    width: 15rem;
  }
  }
`;
export default ProductImage;
