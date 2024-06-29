import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { homeSixHeroImages as banners } from "@framework/static/banner";
import { SwiperSlide } from "swiper/react";

const HeroSlider: React.FC = () => {
  return (
    <section className="px-0 sm:px-4 md:px-16 2xl:px-24">
      <div className="relative mb-5 md:mb-8">
        <Carousel
          autoplay={false}
          className="mx-0 w-full"
          buttonClassName="hidden"
          paginationPosition="left"
          pagination={{
            clickable: true,
          }}
        >
          {banners?.map((banner: any) => (
            <SwiperSlide
              className="carouselItem"
              key={`banner--key-${banner?.id}`}
            >
              <BannerCard banner={banner} href={`${banner.slug}`} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSlider;
