import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ProductPrice from "./product-price";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>

        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock <= 0 && (
            <p className="text-destructive">Out Of Stock</p>
          )}
          {product.stock > 0 && <ProductPrice value={Number(product.price)} />}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
