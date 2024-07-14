import MinusIcon from "@components/icons/minus-icon";
import PlusIcon from "@components/icons/plus-icon";
import cn from "classnames";

type CounterProps = {
  quantity: number;
  setQuantity: any;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
  variant?: "default" | "dark";
  className?: string;
};

const Counter: React.FC<CounterProps> = ({
  setQuantity,
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = "default",
}) => {
  const size = variant !== "dark" ? "12px" : "10px";
  const inputDisabled = disableIncrement;

  return (
    <>
      <div>
        <div
          className={cn(
            "group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0",
            {
              "border h-11 md:h-12 border-gray-300": variant === "default",
              "h-8 md:h-9 shadow-navigation bg-heading": variant === "dark",
            }
          )}
        >
          <button
            onClick={onDecrement}
            className={cn(
              "flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none",
              {
                "w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading":
                  variant === "default",
                "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none":
                  variant === "dark",
              }
            )}
            disabled={disableDecrement}
          >
            <MinusIcon width={size} />
          </button>

          <input
            type="number"
            className={cn(
              "border-gray-300 border rounded-md h-12 px-4 w-24 text-center focus:outline-none",
              { "bg-gray-200 cursor-not-allowed": inputDisabled }
            )}
            value={quantity}
            onChange={(e) => {
              setQuantity(parseInt(e.target.value));
            }}
            min={1}
          />

          <button
            onClick={onIncrement}
            className={cn(
              "flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none",
              {
                "w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading":
                  variant === "default",
                "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none":
                  variant === "dark",
              }
            )}
            disabled={disableIncrement}
          >
            <PlusIcon width={size} height={size} />
          </button>
        </div>
        <div>
          {inputDisabled && (
            <p className="text-red-500 text-sm mt-1">Stock limit reached</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Counter;
