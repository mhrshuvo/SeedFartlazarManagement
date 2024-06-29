import React, { useState, useEffect } from "react";
import Image from "next/image";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";


const MyPrelovedPage: React.FC = () => {
  // State to store the API data
  const [myPreloved, setMyPreloved] = useState<any>(null);

  console.log(myPreloved);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(API_ENDPOINTS.MY_PRE_LOVED);
        setMyPreloved(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" p-10">
			<div>
				<Image
					src="/assets/images/We’re working on it!.gif"
					alt={"error-heading"}
					width={370}
					height={370}
				/>

				{/* <Text variant="mediumHeading">{t("error-heading")}</Text> */}
				
        
				
			</div>
		</div>
  );
};

export default MyPrelovedPage;
