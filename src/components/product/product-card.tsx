import cn from "classnames";
import type { FC } from "react";
import { Product } from "@framework/types";
import Link from "next/link";
// import { getVariations } from "@framework/utils/get-variations";

// import { ProductAttributes2 } from "./product-attributes2";

interface ProductProps {
  product: Product;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?: "grid" | "gridSlim" | "list" | "listSmall";
  imgWidth?: number | string;
  imgHeight?: number | string;
  imgLoading?: "eager" | "lazy";
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = "",
  contactClassName = "",
  imageContentClassName = "",
  variant = "list",
  imgLoading,
}) => {
  const placeholderImage = `${process.env.NEXT_PUBLIC_IMAGE_API_ENDPOINT}${product?.image?.thumbnail}`;
  // const variations = getVariations(product?.variations);
  // console.log(variations);

  return (
    <Link href={`/products/${product.slug}`}>
      <div
        className={cn(
          "group box-border overflow-hidden flex rounded-md cursor-pointer",
          {
            "pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1  hover:shadow-product":
              variant === "grid",
            "pe-0 md:pb-1 flex-col items-start bg-white":
              variant === "gridSlim",
            "items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct":
              variant === "listSmall",
            "flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4":
              variant === "list",
          },
          className
        )}
        role="button"
        title={product?.name}
      >
        <div
          className={cn(
            "flex",
            {
              "mb-3 md:mb-3.5": variant === "grid",
              "mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
              "flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44":
                variant === "listSmall",
            },
            imageContentClassName
          )}
        >
          <img
            src={placeholderImage}
            loading={imgLoading}
            alt={product?.name || "Product Image"}
            className={cn("bg-gray-300 object-cover rounded-s-md", {
              "w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none":
                variant === "grid",
              "rounded-md transition duration-150 ease-linear transform group-hover:scale-105":
                variant === "gridSlim",
              "rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105":
                variant === "list",
            })}
          />
        </div>

        <div
          className={cn(
            "w-full overflow-hidden",
            {
              "ps-0 lg:ps-2.5 xl:ps-4 pe-2.5 xl:pe-4": variant === "grid",
              "ps-0": variant === "gridSlim",
              "px-4 lg:px-5 2xl:px-4": variant === "listSmall",
            },
            contactClassName
          )}
        >
          <h2
            className={cn(" text-gray-600 text-sm font-normal truncate mb-1", {
              "text-xs md:text-base": variant === "grid",
              "md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg":
                variant === "gridSlim",
              "text-sm sm:text-base md:mb-1.5 pb-0": variant === "listSmall",
              "text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5":
                variant === "list",
            })}
          >
            {product?.name}
          </h2>
          {/* {Object.keys(variations).map((variation) => {
					if (variation === "color") {
						return (
							<ProductAttributes2
              className=" "
								key=""
								title={variation}
								attributes={variations[variation]}
								active={variations[variation][0]}
								onClick={() => {}}
							/>
						);
					}
				})} */}
          <h2 className="  font-normal text-xs md:text-xs lg:text-xs xl:text-xs truncate mb-1.5 text-gray-800">
            {product?.company}
          </h2>

          <div className="text-heading font-semibold text-sm flex">
            {product?.sell_price && product.sell_price === product.price && (
              <div className="font-bold text-sm">{product.sell_price} TK</div>
            )}
            {product?.sell_price && product.sell_price !== product.price && (
              <>
                <div className="font-bold text-sm">{product.sell_price} TK</div>
                <del className="font-semibold text-red-600 ps-2 text-xs mt-[2px]">
                  {product.price} TK
                </del>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
