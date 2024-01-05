"use client";

import { useSearchParams } from "next/navigation";

interface ProductDetailsProps {
  params:{
    id: string
  }
}

export default function ProductDetails({ params }: Readonly<ProductDetailsProps>) {
    const param = useSearchParams();
    console.log(param);  
  return <>Product Id: {params?.id}</>;
}
