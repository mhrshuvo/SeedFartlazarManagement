import { OrderItem } from "@framework/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const OrderItemCard = ({ product }: { product: OrderItem }) => {
  return (
    <tr
      className="border-b font-normal border-gray-300 last:border-b-0"
      key={product.id}
    >
      <td className="p-4">
        {product.product_name} * {product.qty}
      </td>
      <td className="p-4">{product?.total_price}</td>
    </tr>
  );
};
const OrderDetails: React.FC<{ className?: string; order: any }> = ({
  className = "p-0 pt-10 lg:pt-12",
  order,
}) => {
  const { t } = useTranslation("common");

  const router = useRouter();

  const handleBkash = () => {
    if (order?.bkash_url) {
      window.location.href = order?.bkash_url;
    }
  };

  const handlePay = () => {
    toast.success(
      "Order placed sucessfully. Our representative will contact you asap!!"
    );

    router.push("/");
  };

  return (
    <div className={className}>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("text-order-details")}:
      </h2>
      <table className="w-full text-heading font-semibold text-sm lg:text-base">
        <thead>
          <tr>
            <th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2">
              {t("text-product")}
            </th>
            <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/2">
              {t("text-total")}
            </th>
          </tr>
        </thead>
        <tbody>
          {order?.order_products?.map((product: any, index: any) => (
            <OrderItemCard key={index} product={product} />
          ))}
        </tbody>
        <tfoot>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("text-sub-total")}:</td>
            <td className="p-4">{order?.sub_total} TK</td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("discount")}:</td>
            <td className="p-4">{order?.coupon_discount} TK</td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("text-shipping")}:</td>
            <td className="p-4">
              {order?.delivery_charge}
              <span className="text-[13px] font-normal ps-1.5 inline-block">
                TK via Flat rate
              </span>
            </td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("vat")}:</td>
            <td className="p-4">{order?.vat} TK</td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("text-payment-method")}:</td>
            <td className="p-4">{"Cash on delivery"}</td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("text-total")}:</td>
            <td className="p-4">{order?.total_price} TK</td>
          </tr>
          <tr className="odd:bg-gray-150">
            <td className="p-4 italic">{t("text-note")}:</td>
            <td className="p-4">new order</td>
          </tr>
        </tfoot>
      </table>

      {order?.bkash_url && (
        <div className="flex gap-4 justify-center items-center mt-4">
          <div>
            <button
              onClick={() => handlePay()}
              className="bg-green-600 px-6 py-2 rounded-lg text-white"
            >
              buy now pay later
            </button>
          </div>

          <div>
            <button
              onClick={() => handleBkash()}
              className="bg-pink-700 px-6 py-2 rounded-lg text-white"
            >
              Pay with Bkash
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
