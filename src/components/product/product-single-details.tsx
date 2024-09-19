import React, { useState } from "react";
import Button from "@components/ui/button";
import { useRouter } from "next/router";
import { useProductQuery } from "@framework/product/get-product";
import { getVariations } from "@framework/utils/get-variations";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";
import { ProductAttributes } from "./product-attributes";
import isEmpty from "lodash/isEmpty";
import Link from "@components/ui/link";
import { useWindowSize } from "@utils/use-window-size";
import { RiArrowDropDownLine } from "react-icons/ri";
import Modal from "@components/common/modal/modal";
import ProductShareModal from "./product-share-modal";
import { IoShareSocialOutline } from "react-icons/io5";
import ProductFlashSaleGridLoader from "@components/ui/loaders/product-flash-sale-grid-loader";
import SizeChart from "./product-size-chart";
import Counter from "@components/common/counter";

const ProductSingleDetails: React.FC = () => {
  const {
    query: { slug }, // Access current path
  } = useRouter();
  const { width } = useWindowSize();
  const { data, isLoading } = useProductQuery(slug as string);
  const { addItemToCart } = useCart();
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState<number>(1); // State for quantity
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(data);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Product zoom in

  const [hoverPosition] = useState({ x: 0, y: 0 });

  const transformStyle = {
    transformOrigin: `${hoverPosition.x * 100}% ${hoverPosition.y * 100}%`,
  };

  if (isLoading)
    return (
      <div className="m-10">
        <ProductFlashSaleGridLoader />
      </div>
    );
  const variations = getVariations(data?.variations);

  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;

  function addToCart() {
    if (!isSelected) return;
    // Show button feedback while adding to cart
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 600);

    const item = generateCartItem(data!, attributes);
    addItemToCart(item, quantity);
  }

  function handleAttribute(attribute: any) {
    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  // Function to toggle modal
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Function to copy URL to clipboard
  const handleDropdown = () => {
    const x = document.getElementById("productDetails");
    if (x!.style.display === "none") {
      x!.style.display = "block";
    } else {
      x!.style.display = "none";
    }
  };

  const placeholderImage = `${process.env.NEXT_PUBLIC_IMAGE_API_ENDPOINT}${data?.image?.thumbnail}`;
  console.log(placeholderImage);

  return (
    <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
      {width < 1025 ? (
        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
          <img src={placeholderImage} className="object-cover w-full" />
        </div>
      ) : (
        // Product zoom in
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          <div className="relative overflow-hidden">
            <img src={placeholderImage} style={transformStyle} />
          </div>
        </div>
      )}

      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="pb-7 mb-7 border-b border-gray-300">
          <div className=" flex justify-between ">
            <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
              {data?.name}
            </h2>
            <button onClick={toggleModal}>
              <IoShareSocialOutline size={24} className=" text-black" />
            </button>
          </div>

          <div className="flex items-center mt-2">
            {data?.sell_price && data.sell_price === data.price && (
              <div className="font-bold text-xl">{data.sell_price} TK</div>
            )}
            {data?.sell_price && data.sell_price !== data.price && (
              <>
                <div className="font-bold text-xl">{data.sell_price} TK</div>
                <del className="font-semibold text-red-600 ps-2 text-xs mt-[2px]">
                  {data.price} TK
                </del>
              </>
            )}
          </div>
        </div>

        <div className="pb-3 border-b border-gray-300 flex justify-between">
          <div>
            {Object.keys(variations).map((variation) => {
              return (
                <ProductAttributes
                  key={variation}
                  title={variation}
                  attributes={variations[variation]}
                  active={attributes[variation]}
                  onClick={handleAttribute}
                />
              );
            })}
          </div>

          <div>
            <SizeChart isOpen={isSidebarOpen} onClose={toggleSidebar} />
          </div>
        </div>

        <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
          <Counter
            setQuantity={setQuantity}
            quantity={quantity}
            onIncrement={() => setQuantity((prev) => prev + 1)}
            onDecrement={() =>
              setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
            }
            disableDecrement={quantity === 1}
            disableIncrement={quantity >= data?.stock}
          />
          <Button
            onClick={addToCart}
            variant="slim"
            className={`w-full md:w-6/12 xl:w-full ${
              !isSelected && "bg-gray-400 hover:bg-gray-400"
            }`}
            disabled={!isSelected}
            loading={addToCartLoader}
          >
            <span className="py-2 3xl:px-8">Add to cart</span>
          </Button>
        </div>

        <div
          onClick={handleDropdown}
          className="text-heading cursor-pointer flex justify-between ml-1 text-sm md:text-sm lg:text-sm 2xl:text-base font-bold mt-8 mb-3"
        >
          <p> Product Details and Overview</p>

          <p>
            <RiArrowDropDownLine size={30} />
          </p>
        </div>

        <div id="productDetails" className="hidden p-5 bg-gray-100">
          <p
            dangerouslySetInnerHTML={{
              __html: data?.description ? data.description : "",
            }}
          ></p>
        </div>

        <div className="py-6">
          <ul className="text-sm space-y-5 pb-1">
            <li>
              <span className="font-semibold text-heading inline-block pe-2">
                SKU:
              </span>
              {data?.id}
            </li>

            {data?.tags && Array.isArray(data.tags) && (
              <li className="productTags">
                <span className="font-semibold text-heading inline-block pe-2">
                  Tags:
                </span>
                {data.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={tag.slug}
                    className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                  >
                    {tag.name}
                    <span className="text-heading">,</span>
                  </Link>
                ))}
              </li>
            )}
          </ul>
        </div>
        <div className="  font-normal text-xs md:text-xs lg:text-xs xl:text-xs truncate mb-1.5 text-gray-800">
          {data?.company}
        </div>
      </div>

      {/* Modal component */}
      <Modal open={showModal} onClose={toggleModal}>
        <ProductShareModal url={window.location.href} title={data?.name} />
      </Modal>
    </div>
  );
};

export default ProductSingleDetails;
