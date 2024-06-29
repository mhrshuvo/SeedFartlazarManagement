import Link from "@components/ui/link";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Multicolor Shirt & Solid Pant",
    slug: "co-ord-set-multicolor-shirt-and-solid-pant",
    img: "/assets/images/category/floral.png",
  },
  {
    id: 2,
    title: "Matching",
    slug: "co-ord-set-matching",
    img: "/assets/images/category/matching.png",
  },
  {
    id: 7,
    title: "Stone Work In Pant",
    slug: "co-ord-set-stone-work-in-pant",
    img: "/assets/images/category/stone-work-in-pant.png",
  },
  {
    id: 8,
    title: "Stone Work In Shirt",
    slug: "co-ord-set-stone-work-in-shirt",
    img: "/assets/images/category/stone-work-in-shirt.png",
  },
  // {
  //   id: 11,
  //   title: "Brands",
  //   slug: "brands",
  //   img: "/assets/images/category/brands.jpg",
  // },
  // {
  //   id: 12,
  //   title: "Sale",
  //   slug: "sale",
  //   img: "/assets/images/category/sale.png",
  // },
];

function StaticCategory() {
  return (
    <div className="x-0 sm:px-4 md:px-16 2xl:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-16 my-20 text-center">
      {categories &&
        categories.map((category) => (
          <div key={category.id}>
            <Link href={`/search?category=${category.slug}`}>
              <div>
                <Image
                  src={category.img}
                  alt={category.title}
                  height={300}
                  width={300}
                  className="object-cover rounded-md"
                />
                <div>
                  <h2 className="mt-2 mb-5 font-bold text-center">
                    {category.title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default StaticCategory;
