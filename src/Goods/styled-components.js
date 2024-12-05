import styled from 'styled-components';
//eyni faylda da yazmaq olardi bu daha seliqelidir!
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.4s ease;
  &:hover {
    transform: translateY(10px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 15px;
`;

export const ProductName = styled.h3`
  font-size: 19px;
  margin: 0;
  color: black;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #888;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

