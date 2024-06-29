import { FC } from "react";
import { IoLocationSharp, IoMail, IoCallSharp } from "react-icons/io5";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";

const data = [
    {
        id: 1,
        slug: "/",
        icon: <IoLocationSharp />,
        name: "text-address",
        description: "text-address-details",
    },
    {
        id: 2,
        slug: "/",
        icon: <IoMail />,
        name: "text-email",
        description: "text-email-details",
    },
    {
        id: 3,
        slug: "/",
        icon: <IoCallSharp />,
        name: "text-phone",
        description: "text-phone-details",
    },
];

interface Props {
    image?: HTMLImageElement;
}

const ContactInfoBlock: FC<Props> = () => {
    const { t } = useTranslation("common");

    return (
        <div className="mb-6 lg:border lg:rounded-md border-gray-300 lg:p-7">
            <h4 className="text-2xl md:text-lg font-bold text-heading pb-7 md:pb-10 lg:pb-6 -mt-1">
                {t("text-find-us-here")}
            </h4>
            {data?.map((item: any) => (
                <div key={`contact--key${item.id}`} className="flex pb-7">
                    <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
                        {item.icon}
                    </div>
                    <div className="flex flex-col ps-3 2xl:ps-4">
                        <h5 className="text-sm font-bold text-heading">
                            {t(`${item.name}`)}
                        </h5>
                        {
                            item.id === 3 ? (
                                <Link href="tel:01810098953" className="text-sm text-body mt-1">
                                    {t(`${item.description}`)}
                                </Link>
                            ) : item.id === 2 ? (
                                <a href="mailto:hello@kiporbo.com" className="text-sm text-body mt-1">
                                    {t(`${item.description}`)}
                                </a>
                            ) : (
                                <p className="text-sm text-body mt-1">
                                    {t(`${item.description}`)}
                                </p>
                            )
                        }
                    </div>
                </div>
            ))}
            {/* <img src={mapImage} alt={t("text-map")} className="rounded-md" /> */}
            {/* here map show */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.41365607511!2d90.4194813760453!3d23.803885286719577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ec9814cbcd%3A0x819da46f7e61fac4!2sKiPorbo!5e0!3m2!1sbn!2sbd!4v1709452504237!5m2!1sbn!2sbd" width="370" height="250" loading="lazy"></iframe>
        </div>
    );
};

export default ContactInfoBlock;
