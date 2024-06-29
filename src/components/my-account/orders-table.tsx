import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import { useTranslation } from "next-i18next";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useEffect, useState } from "react";

const OrdersTable: React.FC = () => {
  const { t } = useTranslation("common");
  const [myOrder, setMyOrder] = useState([]);

  // Get my orders
  useEffect(() => {
    const fetchMyOrders = async () => {
      const data = await http.get(API_ENDPOINTS.MY_ORDERS);
      const orderData = data?.data;
      setMyOrder(orderData);
    };

    fetchMyOrders();
  }, []);

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("text-orders")}
      </h2>
      <motion.div
        layout
        initial="from"
        animate="to"
        exit="from"
        //@ts-ignore
        variants={fadeInTop(0.35)}
        className={`w-full flex flex-col`}
      >
        <table>
          <thead className="text-sm lg:text-base">
            <tr>
              <th className="bg-gray-100 p-4 text-heading font-semibold text-start first:rounded-ts-md">
                {t("text-order")}
              </th>
              <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                {t("text-date")}
              </th>
              <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                {t("text-status")}
              </th>
              <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                {t("text-total")}
              </th>
            </tr>
          </thead>

          {myOrder.map((order: any) => {
            const dateString: string = order.created_at;
            const formattedDateTime: string = new Date(
              dateString
            ).toLocaleString();
            return (
              <tbody className="text-sm lg:text-base w-full">
                <tr className="border-b border-gray-300 last:border-b-0">
                  <td className="px-4 py-5 text-start">
                    <div className="underline hover:no-underline text-body">
                      {order?.tracking_id}
                    </div>
                  </td>
                  <td className="text-start lg:text-center px-4 py-5 text-heading">
                    {formattedDateTime}
                  </td>
                  <td className="text-start lg:text-center px-4 py-5 text-heading">
                    {order?.status}
                  </td>
                  <td className="text-start lg:text-center px-4 py-5 text-heading">
                    {order?.total_price} TK
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </motion.div>
    </>
  );
};

export default OrdersTable;
