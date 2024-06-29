import ProductCard from "@components/product/product-card";
// import Button from "@components/ui/button";
import type { FC } from "react";
import { useProductsQuery } from "@framework/product/get-all-products";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import Link from "next/link";

interface ProductGridProps {
  className?: string;
}

export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
  const { query } = useRouter();
  const {
    isFetching: isLoading,
    // isFetchingNextPage: loadingMore,
    // fetchNextPage,
    // hasNextPage,
    data,
    error,
  } = useProductsQuery({ limit: 30, ...query });

  if (error) return <p>{error.message}</p>;

  // Display "Coming Soon" message if data.pages does not exist or contains no products
  if (
    !isLoading &&
    (!data ||
      !data.pages ||
      data.pages.length === 0 ||
      data.pages[0].data.length === 0)
  ) {
    return (
      <div>
        <p className="text-center pt-8 xl:pt-14 lg:text-4xl md:text-3xl">
          The product you are looking for is coming soon!!
          <span className="underline">
            <Link href={"/products"}> Explore shop</Link>
          </span>
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
      >
        {isLoading ? (
          <ProductFeedLoader limit={20} uniqueKey="search-product" />
        ) : (
          data?.pages?.map((page) => {
            return page?.data?.map((product) => (
              <ProductCard
                key={`product--key${product.id}`}
                product={product}
                variant="grid"
              />
            ));
          })
        )}
      </div>
      <div className="text-center pt-8 xl:pt-14">
        {/* {hasNextPage && (
          <Button
            loading={loadingMore}
            disabled={loadingMore}
            onClick={() => fetchNextPage()}
            variant="slim"
          >
            {t("button-load-more")}
          </Button>
        )} */}
      </div>
    </>
  );
};
