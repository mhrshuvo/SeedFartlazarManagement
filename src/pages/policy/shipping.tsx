import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

function ShippingPolicyPage() {
	return (
		<>
			<PageHeader pageHeader="Shipping / Policy" />
			<div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
				<Container>
					<p>
						<strong>Kiporbo E-Commerce Shipping Policy</strong>
					</p>

					<p>
						This is our go-to destination for all the selling products on
						Kiporbo. We are committed to delivering your purchases in a timely
						and efficient manner. Below is our Shipping Policy, which outlines
						the terms and conditions of the shipping services we provide.
					</p>
					<p>
						<strong>General Shipping Information</strong>
					</p>
					<p>
						- Kiporbo ships products to all over Bangladesh.
						<br />
						- Shipping charges are inside Dhaka BDT 60 and outside Dhaka BDT
						120.
						<br />- The estimated delivery time will depend on the delivery
						location and the shipping option chosen.
					</p>

					<p>
						<br />
					</p>
					<p>
						<strong>Inside Dhaka Delivery</strong>
					</p>
					<p>
						- For customers within Dhaka city, Orders are typically processed
						within 1-2 business days. Delivery times may vary but are generally
						expected within 3-4 business days for standard shipping.
					</p>

					<p>
						<br />
					</p>
					<p>
						<strong>Outside Dhaka Delivery</strong>
					</p>
					<p>
						- For customers outside Dhaka, Orders are typically processed within
						3-4 business days. Delivery times may vary but are generally
						expected within 5-7 business days for standard shipping.
					</p>

					<p>
						<br />
					</p>
					<p>
						<strong>Order Tracking</strong>
					</p>
					<p>
						- Once your order is shipped, you will receive a confirmation email
						containing the tracking number
					</p>
					<p>
						- You can track your shipment using the tracking number provided on
						the carrier’s website.
					</p>

					<p>
						<br />
					</p>

					<p>
						<br />
					</p>
					<p>
						<strong>Shipping Address</strong>
					</p>
					<p>
						- Ensure that the shipping address is correct at checkout as we are
						not responsible for orders shipped to an incorrect address if
						provided by the customer.
					</p>
					<p>
						- If an order is returned due to an incorrect address, the customer
						will be responsible for the additional shipping costs to resend the
						order.
					</p>
					<p>
						<br />
					</p>
					<p>
						<strong>Delivery</strong>
					</p>
					<p>
					- Our delivery partners will attempt to deliver your package to the provided address.

					</p>
					<p>
						- If a package cannot be delivered successfully after multiple
						attempts, it may be returned to Kiporbo, and additional charges may
						apply for redelivery.
					</p>
					<p>
						<br />
					</p>
					<p>
						<strong>Shipping Delays</strong>
					</p>
					<p>
						- Our delivery partners will attempt to deliver your package to the
						provided address.
					</p>
					<p>
						- If a delay occurs, we will work with the shipping carrier to
						expedite the delivery process, but we cannot guarantee a specific
						delivery date.
					</p>
					<p>
						<br />
					</p>
					<p>
						<strong>Damaged or Lost Packages</strong>
					</p>
					<p>
						- If you receive a damaged package, contact us immediately at
						hello@kiporbo.com.
					</p>
					<p>
						- In the case of a lost package, we will work with the shipping
						carrier to locate the package. If it cannot be found, we will file a
						claim and provide a replacement or refund as necessary.
					</p>
					<p>
						<br />
					</p>
					<p>
						<strong>Changes to Shipping Policy</strong>
					</p>
					<p>
						- Kiporbo reserves the right to modify this Shipping Policy at any
						time. Any changes will be effective immediately upon posting on our
						website.
					</p>
					<p>
						<br />
					</p>
					<p>
						<strong>Contact Us</strong>
					</p>
					<p>
						For any questions or concerns regarding our Shipping Policy, please
						contact our Customer Service team at https://kiporbo.com/contact.
					</p>
					<p>
						By using the services of Kiporbo, you agree to the terms and
						conditions outlined in this Shipping Policy.
					</p>
					<p>
						Thank you for choosing Kiporbo for your online shopping needs. We
						look forward to serving you!
					</p>
				</Container>
			</div>
		</>
	);
}

ShippingPolicyPage.Layout = Layout;

export default ShippingPolicyPage;

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
