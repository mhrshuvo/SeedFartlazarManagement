import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import {
  FacebookShareButton,
  WhatsappShareButton,
  
  FacebookIcon,
  WhatsappIcon,

} from "react-share";

interface ProductShareModalProps {
  url: string;
  title: any;
}

const ProductShareModal: React.FC<ProductShareModalProps> = ({
  url,
  
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
   <div className=" flex justify-center"> <div className="p-8 bg-white rounded-lg  lg:w-[400px] md:w-[440px]  w-[500px]">
   <h2 className="text-lg font-semibold mb-4">
     Share this product to your friends
   </h2>
   {/* Social share buttons grid */}
   <div className="grid grid-cols-3 gap-4 mb-4">
     {/* Facebook share button */}
     <div>
       <FacebookShareButton url={url}>
         <FacebookIcon size={32} round />
       </FacebookShareButton>
     </div>
     {/* Whatsapp share button */}
     <div>
       <WhatsappShareButton url={url}>
         <WhatsappIcon size={32} round />
       </WhatsappShareButton>
     </div>
     {/* instragram share button */}
     <div>
  <a href={`https://www.instagram.com/`}>
    <IoLogoInstagram size={32} className=" text-pink-600" />
  </a>
 
</div>
     {/* Twitter share button
     <div>
       <TwitterShareButton url={url} title={title}>
         <TwitterIcon size={32} round />
       </TwitterShareButton>
     </div> */}
   </div>

   {/* Copy URL */}
   <div className="mt-4 flex items-center">
     <input
       type="text"
       className="flex-grow bg-gray-100 border border-gray-300 rounded px-3 py-1 mr-2"
       value={url}
       readOnly
     />
     <button
       onClick={handleCopyClick}
       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
     >
       {copied ? "Copied!" : "Copy"}
     </button>
   </div>
 </div></div>
  );
};

export default ProductShareModal;
