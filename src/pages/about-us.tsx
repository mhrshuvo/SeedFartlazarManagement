import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
// import ContactForm from "@components/common/form/contact-form";
// import ContactInfoBlock from "@containers/contact-info";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function AboutUsPage() {
	const { t } = useTranslation("common");
	return (
		<>
			<PageHeader pageHeader="text-page-about-us" />
			<Container>
				<div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
					{/* <div className="md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
						<ContactInfoBlock />
					</div> */}
					<div className="md:w-full lg:w-5/5 2xl:w-6/6 flex h-full md:ms-6 flex-col lg:ps-6">
						<div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
							<h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
								{t("text-about-us")}
							</h4>
						</div>
						<div className="  font-medium text-[15px] bg-gray-200 p-5 text-gray-600">
							<p>Welcome to Kiporbo,</p>
							<p>
								your ultimate destination for a seamless and delightful shopping
								experience in the world of fashion. At Kiporbo, we pride
								ourselves on being more than just an ordinary clothing ecommerce
								platform; we are a passionate advocate for quality,
								authenticity, and sustainability in fashion. Our mission at
								Kiporbo is to offer a hassle-free and enjoyable shopping journey
								where budgets meet quality.{" "}
							</p>
							<p>
								We curate a diverse collection of brands that embody our values,
								ensuring that every product showcased on our platform is
								authentic, stylish, and built to last. But we don't stop there.
								In our commitment to promoting sustainable fashion practices, we
								offer a unique selection of pre-loved products alongside our
								brand-new offerings.{" "}
							</p>
							<p>
								By embracing pre-loved fashion, we contribute to reducing waste
								and encouraging a circular economy within the industry. At
								Kiporbo, we believe that fashion should be both accessible and
								ethical.{" "}
							</p>
							<p>
								Whether you're looking for the latest trends or timeless
								classics, you can trust Kiporbo to deliver excellence without
								compromise. Join us on our journey to redefine the way you shop
								for clothing online. Experience the Kiporbo difference today and
								indulge in fashion that not only looks good but also does good
								for the planet.
							</p>
						</div>
					</div>
				</div>
				{/* <Subscription /> */}
			</Container>
		</>
	);
}

AboutUsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
