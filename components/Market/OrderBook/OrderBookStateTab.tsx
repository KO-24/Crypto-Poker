import { useAtom } from "jotai";
import React from "react";
import {
  OrderBookStateTabsType,
  orderBookStateAtom,
} from "./OrderBookContainer";

interface OrderBookStateTabProps {
  value: OrderBookStateTabsType;
}

export const OrderBookStateTab = ({ value }: OrderBookStateTabProps) => {
  const [orderBookState, setOrderBookState] = useAtom(orderBookStateAtom);
  const isActive = orderBookState === value;
  return (
    <button
      className={` rounded-lg flex items-center justify-center text-[13px] font-semibold py-2 px-4 ${
        isActive ? "bg-[#444650]" : "bg-[#23252E] text-tetriary"
      }`}
      onClick={() => setOrderBookState(value)}
    >
      <p className="capitalize">{value}</p>
    </button>
  );
};
