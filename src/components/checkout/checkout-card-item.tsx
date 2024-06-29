import { Item } from "@contexts/cart/cart.utils";
import { generateCartItemName } from "@utils/generate-cart-item-name";
import usePrice from "@framework/product/use-price";

export const CheckoutItem: React.FC<{ item: Item }> = ({ item }) => {
  const { price } = usePrice({
    amount: item.itemTotal,
  });

  return (
    <div className="flex py-4 items-center lg:px-3 border-b border-gray-300">
      <div className="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0">
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_API_ENDPOINT}${item?.image}`}
          width="64"
          height="64"
          className="object-cover"
        />
      </div>
      <h6 className="text-sm ps-3 font-regular text-heading">
        {generateCartItemName(item.name, item.attributes)}
      </h6>
      <div className="flex ms-auto text-heading text-sm ps-2 flex-shrink-0">
        {price} TK
      </div>
    </div>
  );
};
