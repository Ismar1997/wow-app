import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";
const Products = ({ heading, data }) => {
  return (
    <>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((products, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={products.img} alt={products.alt} />
                <ProductInfo>
                  <ProductTitle>{products.name}</ProductTitle>
                  <ProductDesc>{products.desc}</ProductDesc>
                  <ProductPrice>{products.price}</ProductPrice>
                  <ProductButton>{products.button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </>
  );
};

export default Products;
