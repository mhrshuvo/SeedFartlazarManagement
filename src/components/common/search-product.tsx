import Link from "@components/ui/link";
import Image from "next/image";
import { ROUTES } from "@utils/routes";

type SearchProductProps = {
  item: any;
};

const SearchProduct: React.FC<SearchProductProps> = ({ item }) => {
  const searchImg = `${process.env.NEXT_PUBLIC_IMAGE_API_ENDPOINT}${item?.image?.thumbnail}`;

  return (
    <Link
      href={`${ROUTES.PRODUCT}/${item?.slug}`}
      className="group w-full h-auto flex justify-start items-center"
    >
      <div className="relative flex w-24 h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
        <Image
          src={searchImg}
          width={96}
          height={96}
          loading="eager"
          alt={item.name || "Product Image"}
          className="bg-gray-200 object-cover"
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <h3 className="truncate text-sm text-heading mb-2">{item.name}</h3>
        <div className="flex items-center mt-2">
            {item?.sell_price && item.sell_price === item.price && (
              <div className="font-bold text-sm">{item.sell_price} TK</div>
            )}
            {item?.sell_price && item.sell_price !== item.price && (
              <>
                <div className="font-bold text-xl">{item.sell_price} TK</div>
                <del className="font-semibold text-red-600 ps-2 text-xs mt-[2px]">
                  {item.price} TK
                </del>
              </>
            )}
          </div>
      </div>
    </Link>
  );
};

export default SearchProduct;
