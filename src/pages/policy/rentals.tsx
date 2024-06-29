import Layout from '@components/layout/layout';
import Container from '@components/ui/container'
import PageHeader from '@components/ui/page-header'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'


function RentalsPage() {
  return (
    <>
    <PageHeader pageHeader="Return & Refund / Policy" />
    <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
        <Container>
        <p><strong>Ki Porbo Fashion Wear Rental Policy</strong></p>
        <p>Welcome to Kiporbo, where we are dedicated to enhancing your lifestyle with our curated</p>
        <p>selection of products. We have introduced apparel rental community which is a approach towards making a sustainable environment. The policies for rental apparels for ki porbo are :</p>
        <p><strong>Item Quality and Selection</strong></p>
        <p> - Quality Control: Ensure all fashion wear meets high-quality standards, with thorough checks for any wear, damage, or defects.</p>
        <p> - Diverse Inventory: Maintain a diverse selection of fashion wears to cater to various styles, sizes, and occasions.</p>
        <p><strong>Rental Terms and Conditions</strong></p>
        <p> - Rental Duration: Clearly define the rental periods available and the terms for extending the rental.</p>
        <p> - Pricing Structure: Implement transparent pricing, including deposits, if applicable, and any late return fees.</p>
        <p><strong>Hygiene and Cleaning</strong></p>
        <p> - Sanitization: Guarantee that all items are professionally cleaned and sanitized before and after each rental.</p>
        <p> - Handling Instructions: Provide guidelines on how to care for the items during the rental period to maintain their condition.</p>
        <p><strong>Sizing and Fit Assistance</strong></p>
        <p> - Size Guides: Offer comprehensive size guides and measurements to help customers choose the right fit.</p>
        <p> - Virtual Fitting Assistance: Consider providing virtual fitting services or consultations to enhance customer satisfaction.</p>
        <p>Booking and Cancellation Policy</p>
        <p> - Reservation System: Implement an efficient booking system for customers to reserve fashion wears.</p>
        <p> - Cancellation Flexibility: Provide a fair cancellation policy, allowing customers to cancel or modify their bookings within a specified time frame.</p>
        <p><strong>Damage and Loss Policy</strong></p>
        <ul>
        <li>Damage Fees: Clearly outline the fees or penalties for damaged items.</li>
        <li>Loss Procedure: Define the procedure and charges in case of lost items to ensure accountability.</li>
        </ul>
        <p><br /></p>
        <p><strong>Delivery and Return Process</strong></p>
        <p> - Shipping Options: Offer reliable shipping options for delivery and return of fashion wears.</p>
        <p> - Return Packaging: Provide suitable packaging for easy and safe return of the items.</p>
        <p><br /><br /></p>
        <p><strong>Customer Support and Dispute Resolution</strong></p>
        <ul>
        <li>Feedback Mechanism: Encourage customer feedback to continuously improve the rental experience.</li>
        </ul>

            </Container>
            </div>
            </>
  )
}

RentalsPage.Layout = Layout; 

export default RentalsPage

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
