import Layout from '@components/layout/layout';
import Container from '@components/ui/container'
import PageHeader from '@components/ui/page-header'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'


function CustomerSatisfaction() {
  return (
    <>
    <PageHeader pageHeader="Customer Satisfaction / Policy" />
    <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
        <Container>
        <p><strong><span className='text-xl'>Kiporbo Lifestyle E-Commerce Store Customer Satisfaction Policy</span></strong></p>
<p><br/></p>
<p><span >Welcome to Kiporbo, where we are dedicated to enhancing your lifestyle with our curated selection of products. Our commitment to your satisfaction is paramount, and we believe in not just meeting but exceeding your expectations. The following customer satisfaction policy outlines our approach to ensuring that every interaction you have with us is delightful and satisfying.</span></p>
<p><br/></p>
<p><strong><span >1. 30-Day Return Policy</span></strong></p>
<p><span >We offer a hassle-free 30-day return policy from the date of purchase. If you are not completely satisfied with your purchase for any reason, return it within this period for an exchange or full refund. Please ensure the item is in its original condition, unused, and with all tags attached.</span></p>
<p><br/></p>
<p><strong><span >2. Quality Assurance</span></strong></p>
<p><span >Each product is thoroughly inspected for quality before shipment. Should you receive an item that is not up to our promised standards, we will take swift action to address the issue, which may include a replacement, repair, or refund.</span></p>
<p><br/></p>
<p><strong><span >3. Responsive Customer Support</span></strong></p>
<p><span >Our customer support team is at your service seven days a week. We promise to address your queries and concerns within 24 hours. You can reach us via email, phone, or live chat on our website.</span></p>
<p><br/></p>
<p><strong><span >4. Free Shipping and Easy Tracking</span></strong></p>
<p><span >We offer free standard shipping on orders over a certain value. After your order is dispatched, we will provide you with a tracking number so you can follow your purchase all the way to your doorstep.</span></p>
<p><br/></p>
<p><strong><span >5. Secure Payment Gateway</span></strong></p>
<p><span >Shop with confidence knowing that your financial data is secure. Our payment system uses the latest encryption technologies to ensure that your transaction is private and protected.</span></p>
<p><br/></p>
<p><strong><span >6. Transparent Communication</span></strong></p>
<p><span >We believe in keeping you informed every step of the way. From order confirmation to shipping updates, we will communicate with you regularly through your preferred method of contact.</span></p>
<p><br/></p>
<p><strong><span >7. Feedback and Continuous Improvement</span></strong></p>
<p><span >Your feedback is invaluable to us. We encourage you to share your experiences, as we continually strive to improve our products and services. We take all feedback seriously and will use it to make your Kiporbo experience even better.</span></p>
<p><br/></p>
<p><strong><span >8. Loyalty Rewards</span></strong></p>
<p><span >As a token of our appreciation, we offer a loyalty rewards program. Earn points with every purchase, which can be redeemed for discounts on future orders.</span></p>
<p><br/></p>
<p><strong><span >9. Price Match Guarantee</span></strong></p>
<p><span >We are committed to offering you the best value for your money. If you find a lower price for an identical product at another online retailer, we will match it. Terms and conditions apply.</span></p>
<p><br/></p>
<p><strong><span >10. Privacy Policy</span></strong></p>
<p><span >Your privacy is important to us. Our privacy policy ensures that your personal information is kept confidential and is not shared with third parties without your consent.</span></p>
<p><br/></p>
<p><strong><span >Dispute Resolution</span></strong></p>
<p><span >In the unlikely event that a dispute arises, we will work diligently to find a fair and timely resolution. We are committed to resolving all customer issues in a professional and amicable manner.</span></p>
<p><br/></p>
<p><span >By shopping with Kiporbo, you are agreeing to our customer satisfaction policy. We thank you for choosing us and look forward to serving you with the utmost care and respect. If you have any questions regarding this policy, please do not hesitate to contact our customer service team.</span></p>
<p><br/></p>
<p><span >Together, let&rsquo;s make your lifestyle extraordinary!</span></p>
<p><br/></p>
<p><span >Sincerely,</span></p>
<p><span >The Kiporbo Team</span></p>
            </Container>
            </div>
            </>
  )
}

CustomerSatisfaction.Layout = Layout; 

export default CustomerSatisfaction

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"privacy",
				"footer",
			])),
		},
	};
};
