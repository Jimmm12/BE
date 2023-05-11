import React from "react";
import Product from "../Product/Product";

const ProductList = ({products,onViewProductDetail }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ gap: "15px" }}
    >
      {
        products.map((product) => {
          return (
            <Product
              onViewProductDetail={onViewProductDetail}
              product={product}
              key={product.id}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
