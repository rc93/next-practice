"use client";

interface ProductDetailsProps {
  params: {
    segments: string[];
  };
}

export default function ProductDetails({
  params,
}: Readonly<ProductDetailsProps>) {
  return (
    <>
      Product Ids:
      {params?.segments?.map((segment,index) => (
        <div key={index}>{segment}</div>
      ))}
    </>
  );
}
