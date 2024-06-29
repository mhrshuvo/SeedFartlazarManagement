import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

function ReturnPolicyPage() {
	return (
		<>
			<PageHeader pageHeader="Return & Refund / Policy" />
			<div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
				<Container>
					<p>
						<strong>Return Refund Policy - Ki porbo</strong>
					</p>
					<ol>
						<li>
							<strong> Returns</strong>
						</li>
					</ol>
					<p>
						<strong>1.1 Eligibility:</strong>
					</p>
					<p>
						{" "}
						- You are eligible for a return within 3 days from the date of
						delivery.
					</p>
					<p>
						{" "}
						- To be eligible for a return, the product must be unused, in its
						original condition, and with all original packaging and tags.
					</p>
					<p>
						<strong>1.2 Return process:</strong>
					</p>
					<p>
						{" "}
						- To initiate a return, please contact our Customer Support Team
						through email at{" "}
						<a href="mailto:hello@kiporbo.com">hello@kiporbo.com</a> or by
						calling +881810098953.
					</p>
					<p>
						{" "}
						- You will be required to provide the order number, product details,
						and the reason for the return.
					</p>
					<p>
						{" "}
						- Our Customer Support Team will guide you through the return process.
					</p>
					<p>
						{" "}
						- Please securely pack the product in its original packaging.

					</p>
					<p>
						<strong>1.3 Shipping Costs:</strong>
					</p>
					<p>
						{" "}
						- The cost of shipping the product back to us is your responsibility
						unless the return is due to our error or a defective product.
					</p>
					<p>
						<strong>1.4 Inspection and Approval:</strong>
					</p>
					<p>
						{" "}
						- Once we receive the returned product, our team will inspect it for
						compliance with our return policy.
					</p>
					<p>
						{" "}
						- If the product meets the eligibility criteria, we will process the
						return.
					</p>
					<p>
						<strong>1.5 Refunds:</strong>
					</p>
					<p>
						{" "}
						- We will issue a refund to your original payment method within [X]
						business days of approving the return.
					</p>
					<p>
						{" "}
						- Please note that shipping and handling charges are non-refundable.
					</p>
					<ol>
						<li>
							<strong> Refunds</strong>
						</li>
					</ol>
					<p>
						<strong>2.1 Eligibility:</strong>
					</p>
					<p>
						{" "}
						- You are eligible for a refund if you have received a defective
						product or if there was an error in the order.
					</p>
					<p>Note :&nbsp;</p>
					<p>
						Refunds from canceled orders - Refund is automatically triggered
						once cancellation is successfully processed.
					</p>
					<p>
						Refunds from failed deliveries - Refund process starts when the item
						has returned to our stockhouse. Please take note that this may take
						more time depending on the area of your shipping address.
					</p>
					<p>
						About voucher : The Voucher discount code can only be applied once.
						The leftover amount will not be refunded or used for the next
						purchase even if the value of the order is smaller than the voucher
						value.. In case of any refund, the received cash back amount, if
						any, will be adjusted with the refund amount.
					</p>
					<p>
						<br />
						<br />
					</p>
					<p>
						<strong>2.2 Process:</strong>
					</p>
					<p>
						{" "}
						- To request a refund, please contact our Customer Support Team
						through email at [email address] or by calling [phone number].
					</p>
					<p>
						{" "}
						- Provide the order number, details of the issue, and any relevant
						photographs, if applicable.
					</p>
					<p>
						{" "}
						- Our team will assess your request and, if approved, provide you
						with a Return Authorization Number (RAN).
					</p>
					<p> - Follow the return process as described in section 1.2 above.</p>
					<p>
						<strong>2.3 Replacement Option:</strong>
					</p>
					<p>
						{" "}
						- In case of a defective product, we may offer a replacement if
						available.
					</p>
					<p>
						<strong>2.4 Refund Processing:</strong>
					</p>
					<p>
						{" "}
						- We will process the refund to your original payment method within
						7 business days after receiving the defective or incorrect product.
					</p>
					<p>
						{" "}
						- Shipping and handling charges for the returned product will be
						reimbursed if the return is due to our error.
					</p>
					<ol>
						<li>
							<strong> Contact Information</strong>
						</li>
					</ol>
					<p>
						If you have any questions or concerns about our Return and Refund
						Policy, please contact our Customer Support Team:
					</p>
					<p>Email: hello@kiporbo.com</p>
					<p>Phone: +881810098953</p>
					<ol>
						<li>
							<strong> Policy Changes</strong>
						</li>
					</ol>
					<p>
						Kiporbo reserves the right to update or modify this Return and
						Refund Policy at any time. Any changes will be posted on our
						website, and the revised policy will apply to all orders placed
						after the effective date.
					</p>
					<p>
						By shopping with Kiporbo, you acknowledge and agree to this Return
						and Refund Policy. We are dedicated to ensuring your satisfaction,
						and we appreciate your trust in us as your preferred Bangladeshi
						ecommerce lifestyle brand.
					</p>
				</Container>
			</div>
		</>
	);
}

ReturnPolicyPage.Layout = Layout;

export default ReturnPolicyPage;

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
