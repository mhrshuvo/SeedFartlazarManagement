import React, { createContext, useContext, useState } from "react";

interface DeliveryContextProps {
  deliveryCharge: string;
  setDeliveryCharge: React.Dispatch<React.SetStateAction<string>>;
}

const DeliveryContext = createContext<DeliveryContextProps>({
  deliveryCharge: "",
  setDeliveryCharge: () => {},
});

export const useDelivery = () => useContext(DeliveryContext);

export const DeliveryProvider: React.FC = ({ children }) => {
  const [deliveryCharge, setDeliveryCharge] = useState("");

  return (
    <DeliveryContext.Provider value={{ deliveryCharge, setDeliveryCharge }}>
      {children}
    </DeliveryContext.Provider>
  );
};
