export const siteSettings = {
  name: "Ki Porbo",
  description: "Where budget meets quality",
  author: {
    name: "Kiporbo.",
    websiteUrl: "https://kiporbo.com",
    address: "",
  },
  logo: {
    url: "/assets/images/logo.png.png",
    alt: "kiporbo",
    href: "/",
    width: 95,
    height: 44,
  },
  defaultLanguage: "en",
  currencyCode: "TK",
  site_header: {
    menu: [
      // WOMEN
      // {
      //   id: 1,
      //   path: "/search?category=women-co-ords-set",
      //   label: "menu-women-wear",
      //   columns: [
      //     {
      //       id: 1,
      //       className: "grid-cols-3",
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "search?category=co-ord-set-multicolor-shirt-and-solid-pant",
      //           label: "Co-ord Set (Multicolor Shirt & Solid Pant)",
      //           // columnItemItems: [
      //           //   {
      //           //     id: 5,
      //           //     path: "/search?category=women-co-ords-set",
      //           //     label: "Co-ords set",
      //           //   },
      //           //   // {
      //           //   //   id: 1,
      //           //   //   path: "/search?category=women-kp-originals",
      //           //   //   label: "KP Originals",
      //           //   // },

      //           //   // {
      //           //   //   id: 2,
      //           //   //   path: "/search?category=women-kp-regular",
      //           //   //   label: "KP Regular",
      //           //   // },
      //           //   // {
      //           //   //   id: 3,
      //           //   //   path: "/search?category=women-new-arrival",
      //           //   //   label: "New Arrivals",
      //           //   // },
      //           //   // {
      //           //   //   id: 3,
      //           //   //   path: "/search?category=women-suits-jackets",
      //           //   //   label: "Suits & Jackets",
      //           //   // },
      //           //   // {
      //           //   //   id: 4,
      //           //   //   path: "/search?category=women-pants",
      //           //   //   label: "Pants",
      //           //   // },
      //           //   // {
      //           //   //   id: 5,
      //           //   //   path: "/search?category=women-tops",
      //           //   //   label: "Tops",
      //           //   // },
      //           //   // {
      //           //   //   id: 6,
      //           //   //   path: "/search?category=women-breeze-pant",
      //           //   //   label: "Breeze Pant",
      //           //   // },
      //           // ],
      //         },
      //         {
      //           id: 2,
      //           path: "search?category=co-ord-set-matching",
      //           label: "Co-ord Set (Matching)",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=co-ord-set-stone-work-in-shirt",
      //           label: "Co-ord Set (Stone Work In Shirt)",
      //         },
      //         {
      //           id: 4,
      //           path: "/search?category=co-ord-set-stone-work-in-pant",
      //           label: "Co-ord Set (Stone Work In Pant)",
      //         },
      //       ],
      //     },
      //     // {
      //     //   id: 4,
      //     //   columnItems: [
      //     //     {
      //     //       id: 1,
      //     //       path: "/search?category=women-western-wear",
      //     //       label: "Dresses",
      //     //       columnItemItems: [
      //     //         {
      //     //           id: 1,
      //     //           path: "/search?category=women-jump-suits",
      //     //           label: "Jump Suits",
      //     //         },
      //     //         {
      //     //           id: 2,
      //     //           path: "/search?category=women-tops",
      //     //           label: "Tops",
      //     //         },
      //     //         {
      //     //           id: 3,
      //     //           path: "/search?category=women-tees",
      //     //           label: "Tees",
      //     //         },
      //     //         {
      //     //           id: 4,
      //     //           path: "/search?category=women-shirts",
      //     //           label: "Shirts",
      //     //         },
      //     //       ],
      //     //     },
      //     //   ],
      //     // },
      //     // {
      //     //   id: 5,
      //     //   columnItems: [
      //     //     {
      //     //       id: 1,
      //     //       path: "/search?category=women-cosmetics-skincare",
      //     //       label: "Cosmetics & Skincare",
      //     //       columnItemItems: [
      //     //         {
      //     //           id: 1,
      //     //           path: "/search?category=women-foundation",
      //     //           label: "Foundation",
      //     //         },
      //     //         {
      //     //           id: 2,
      //     //           path: "/search?category=women-eye-liner",
      //     //           label: "Eye liner",
      //     //         },
      //     //         {
      //     //           id: 3,
      //     //           path: "/search?category=womens-lipstick",
      //     //           label: "Lipstick",
      //     //         },
      //     //       ],
      //     //     },
      //     //     {
      //     //       id: 2,
      //     //       path: "/search?category=women-sales-clearance",
      //     //       className: "text-red-500",
      //     //       label: "Sale & Clearance",
      //     //       columnItemItems: [
      //     //         {
      //     //           id: 1,
      //     //           path: "/search?category=women-makeup",
      //     //           label: "Make up",
      //     //         },
      //     //         {
      //     //           id: 2,
      //     //           path: "/search?category=women-skincare",
      //     //           label: "Skincare",
      //     //         },
      //     //         {
      //     //           id: 3,
      //     //           path: "/search?category=women-premium-beauty",
      //     //           label: "Premium beauty",
      //     //         },
      //     //         {
      //     //           id: 4,
      //     //           path: "/search?category=women-lipsticks",
      //     //           label: "Lipsticks",
      //     //         },
      //     //       ],
      //     //     },
      //     //   ],
      //     // },
      //   ],
      // },

      // // MEN
      // {
      //   id: 2,
      //   path: "/search?category=men-wear",
      //   label: "menu-men-wear",
      //   columns: [
      //     {
      //       className: "grid-cols-2",
      //       id: 1,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=men-all-clothings",
      //           label: "All Clothings",
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: "/search?category=men-kp-originals",
      //               label: "KP Originals",
      //             },
      //             {
      //               id: 2,
      //               path: "/search?category=men-kp-regular",
      //               label: "KP Regular",
      //             },
      //             {
      //               id: 2,
      //               path: "/search?category=men-new-arrival",
      //               label: "New Arrivals",
      //             },
      //             {
      //               id: 3,
      //               path: "/search?category=men-suits-jackets",
      //               label: "Suits & Jackets",
      //             },
      //             {
      //               id: 4,
      //               path: "/search?category=men-pants",
      //               label: "Pants",
      //             },
      //             {
      //               id: 5,
      //               path: "/search?category=men-breeze-pant",
      //               label: "Breeze Pant",
      //             },
      //           ],
      //         },
      //       ],
      //     },

      //     {
      //       id: 4,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=men-sales-clearance",
      //           className: "text-red-500",
      //           label: "Sale & Clearance",
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: "/search?category=men-shirts",
      //               label: "Shirts",
      //             },
      //             {
      //               id: 2,
      //               path: "/search?category=men-pants",
      //               label: "Pants",
      //             },
      //             {
      //               id: 3,
      //               path: "/search?category=men-suits",
      //               label: "Suits",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },

      // // Skincare & Cosmetics
      // {
      //   id: 4,
      //   path: "/search?category=skincare",
      //   label: "Skincare & Cosmetics",
      //   columns: [
      //     {
      //       className: "grid-cols-3",
      //       id: 1,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=all-skincare",
      //           label: "All Items",
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: "/search?category=skincare-new-arrival",
      //               label: "New Arrivals",
      //             },
      //             {
      //               id: 2,
      //               path: "/search?category=skincare-featured-items",
      //               label: "Featured Items",
      //             },
      //             {
      //               id: 3,
      //               path: "/search?category=skincare-cleansing-oil",
      //               label: "Cleansing Oil",
      //             },
      //             {
      //               id: 4,
      //               path: "/search?category=skincare-foaming-facial-cleanser",
      //               label: "Foaming Facial Cleanser",
      //             },
      //             {
      //               id: 5,
      //               path: "/search?category=skincare-toner",
      //               label: "Toner",
      //             },
      //             {
      //               id: 6,
      //               path: "/search?category=skincare-scrub",
      //               label: "Scrub",
      //             },
      //             {
      //               id: 7,
      //               path: "/search?category=skincare-face-mask",
      //               label: "Face Mask",
      //             },
      //             {
      //               id: 8,
      //               path: "/search?category=skincare-serum",
      //               label: "Serum",
      //             },
      //             {
      //               id: 9,
      //               path: "/search?category=skincare-sunscreen",
      //               label: "Sunscreen",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=skincare-women",
      //           label: "Women",
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: "/search?category=skincare-eye-cream",
      //               label: "Eye Cream",
      //             },
      //             {
      //               id: 2,
      //               path: "/search?category=skincare-sunscreen",
      //               label: "Sunscreen",
      //             },
      //             {
      //               id: 3,
      //               path: "/search?category=skincare-makeup-remover-wipes",
      //               label: "Makeup Remover Wipes",
      //             },
      //             {
      //               id: 4,
      //               path: "/search?category=skincare-facial-mist",
      //               label: "Facial Mist",
      //             },
      //             {
      //               id: 5,
      //               path: "/search?category=skincare-lip-balm",
      //               label: "Lip Balm",
      //             },
      //             {
      //               id: 6,
      //               path: "/search?category=skincare-face-oil",
      //               label: "Face Oil",
      //             },
      //             {
      //               id: 7,
      //               path: "/search?category=skincare-micellar-water",
      //               label: "Micellar Water",
      //             },
      //             {
      //               id: 8,
      //               path: "/search?category=skincare-night-cream",
      //               label: "Night Cream",
      //             },
      //             {
      //               id: 9,
      //               path: "/search?category=skincare-body-lotion",
      //               label: "Body Lotion",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       id: 3,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=skincare-men",
      //           label: "Men",
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: "/search?category=skincare-cleansing-oil",
      //               label: "Cleansing Oil",
      //             },
      //             {
      //               id: 2,
      //               path: "/search?category=skincare-foaming-facial-cleanser",
      //               label: "Foaming Facial Cleanser",
      //             },
      //             {
      //               id: 3,
      //               path: "/search?category=skincare-toner",
      //               label: "Toner",
      //             },
      //             {
      //               id: 4,
      //               path: "/search?category=skincare-shaving-cream",
      //               label: "Shaving Cream",
      //             },
      //             {
      //               id: 5,
      //               path: "/search?category=skincare-aftershave-lotion",
      //               label: "Aftershave Lotion",
      //             },
      //             {
      //               id: 6,
      //               path: "/search?category=skincare-deodorant",
      //               label: "Deodorant",
      //             },
      //             {
      //               id: 7,
      //               path: "/search?category=skincare-facial-moisturizer",
      //               label: "Facial Moisturizer",
      //             },
      //             {
      //               id: 8,
      //               path: "/search?category=skincare-beard-oil",
      //               label: "Beard Oil",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },

      // // Brands
      // {
      //   id: 2,
      //   path: "/search?category=brands",
      //   label: "Brands",
      //   columns: [
      //     {
      //       id: 4,
      //       className: "grid-cols-3",
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=men-shirts",
      //           label: "Aarong",
      //         },
      //         {
      //           id: 2,
      //           path: "/search?category=men-pants",
      //           label: "Cats Eye",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=men-suits",
      //           label: "Richman",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=men-suits",
      //           label: "NogorPolli",
      //         },
      //       ],
      //     },
      //     {
      //       id: 4,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=men-shirts",
      //           label: "Aarong",
      //         },
      //         {
      //           id: 2,
      //           path: "/search?category=men-pants",
      //           label: "Cats Eye",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=men-suits",
      //           label: "Richman",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=men-suits",
      //           label: "NogorPolli",
      //         },
      //       ],
      //     },
      //     {
      //       id: 4,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: "/search?category=men-shirts",
      //           label: "Aarong",
      //         },
      //         {
      //           id: 2,
      //           path: "/search?category=men-pants",
      //           label: "Cats Eye",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=men-suits",
      //           label: "Richman",
      //         },
      //         {
      //           id: 3,
      //           path: "/search?category=men-suits",
      //           label: "NogorPolli",
      //         },
      //       ],
      //     },
      //   ],
      // },

      // eid collection
      // {
      //   id: 6,
      //   className: "text-red-500",
      //   path: "search?category=women-eid-collection",
      //   label: "Eid Collection",
      // },
    ],

    // MOBILE MENU

    mobileMenu: [
      // Women
      {
        id: 2,
        path: "/search?category=women-co-ords-set",
        label: "Women",
        subMenu: [
          {
            id: 1,
            path: "search?category=co-ord-set-multicolor-shirt-and-solid-pant",
            label: "Co-ord Set (Multicolor Shirt & Solid Pant)",
          },
          {
            id: 2,
            path: "search?category=co-ord-set-matching",
            label: "Co-ord Set (Matching)",
          },
          {
            id: 3,
            path: "/search?category=co-ord-set-stone-work-in-shirt",
            label: "Co-ord Set (Stone Work In Shirt)",
          },
          {
            id: 4,
            path: "/search?category=co-ord-set-stone-work-in-pant",
            label: "Co-ord Set (Stone Work In Pant)",
          },
          // {
          //   id: 3,
          //   path: "/search?category=women-suits-jackets",
          //   label: "Suits & Jackets",
          // },
          // {
          //   id: 4,
          //   path: "/search?category=women-pants",
          //   label: "Pants",
          // },
          // {
          //   id: 5,
          //   path: "/search?category=women-tops",
          //   label: "Tops",
          // },
          // {
          //   id: 6,
          //   path: "/search?category=women-breeze-pant",
          //   label: "Breeze Pant",
          // },
          // {
          //   id: 1,
          //   path: "/search?category=women-jump-suits",
          //   label: "Jump Suits",
          // },
          // {
          //   id: 2,
          //   path: "/search?category=women-tops",
          //   label: "Tops",
          // },
          // {
          //   id: 3,
          //   path: "/search?category=women-tees",
          //   label: "Tees",
          // },
          // {
          //   id: 4,
          //   path: "/search?category=women-shirts",
          //   label: "Shirts",
          // },
          // {
          //   id: 1,
          //   path: "/search?category=women-foundation",
          //   label: "Foundation",
          // },
          // {
          //   id: 2,
          //   path: "/search?category=women-eye-liner",
          //   label: "Eye liner",
          // },
          // {
          //   id: 3,
          //   path: "/search?category=womens-lipstick",
          //   label: "Lipstick",
          // },
          // {
          //   id: 1,
          //   path: "/search?category=women-makeup",
          //   label: "Make up",
          // },
          // {
          //   id: 2,
          //   path: "/search?category=women-skincare",
          //   label: "Skincare",
          // },
          // {
          //   id: 3,
          //   path: "/search?category=women-premium-beauty",
          //   label: "Premium beauty",
          // },
          // {
          //   id: 4,
          //   path: "/search?category=women-lipsticks",
          //   label: "Lipsticks",
          // },
        ],
      },

      // // Men
      // {
      //   id: 2,
      //   path: "/search?category=men-wear",
      //   label: "Men",
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: "/search?category=men-kp-originals",
      //       label: "KP Originals",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=men-kp-regular",
      //       label: "KP Regular",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=men-new-arrival",
      //       label: "New Arrivals",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=men-suits-jackets",
      //       label: "Suits & Jackets",
      //     },
      //     {
      //       id: 4,
      //       path: "/search?category=men-pants",
      //       label: "Pants",
      //     },
      //     {
      //       id: 5,
      //       path: "/search?category=men-breeze-pant",
      //       label: "Breeze Pant",
      //     },
      //     {
      //       id: 1,
      //       path: "/search?category=men-shirts",
      //       label: "Shirts",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=men-pants",
      //       label: "Pants",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=men-suits",
      //       label: "Suits",
      //     },
      //   ],
      // },

      // // Skincare & cosmetics
      // {
      //   id: 2,
      //   path: "/search?category=men-wear",
      //   label: "Skincare & Cosmetics",
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: "/search?category=skincare-new-arrival",
      //       label: "New Arrivals",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=skincare-featured-items",
      //       label: "Featured Items",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=skincare-cleansing-oil",
      //       label: "Cleansing Oil",
      //     },
      //     {
      //       id: 4,
      //       path: "/search?category=skincare-foaming-facial-cleanser",
      //       label: "Foaming Facial Cleanser",
      //     },
      //     {
      //       id: 5,
      //       path: "/search?category=skincare-toner",
      //       label: "Toner",
      //     },
      //     {
      //       id: 6,
      //       path: "/search?category=skincare-scrub",
      //       label: "Scrub",
      //     },
      //     {
      //       id: 7,
      //       path: "/search?category=skincare-face-mask",
      //       label: "Face Mask",
      //     },
      //     {
      //       id: 8,
      //       path: "/search?category=skincare-serum",
      //       label: "Serum",
      //     },
      //     {
      //       id: 9,
      //       path: "/search?category=skincare-sunscreen",
      //       label: "Sunscreen",
      //     },

      //     {
      //       id: 1,
      //       path: "/search?category=skincare-eye-cream",
      //       label: "Eye Cream",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=skincare-sunscreen",
      //       label: "Sunscreen",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=skincare-makeup-remover-wipes",
      //       label: "Makeup Remover Wipes",
      //     },
      //     {
      //       id: 4,
      //       path: "/search?category=skincare-facial-mist",
      //       label: "Facial Mist",
      //     },
      //     {
      //       id: 5,
      //       path: "/search?category=skincare-lip-balm",
      //       label: "Lip Balm",
      //     },
      //     {
      //       id: 6,
      //       path: "/search?category=skincare-face-oil",
      //       label: "Face Oil",
      //     },
      //     {
      //       id: 7,
      //       path: "/search?category=skincare-micellar-water",
      //       label: "Micellar Water",
      //     },
      //     {
      //       id: 8,
      //       path: "/search?category=skincare-night-cream",
      //       label: "Night Cream",
      //     },
      //     {
      //       id: 9,
      //       path: "/search?category=skincare-body-lotion",
      //       label: "Body Lotion",
      //     },
      //     {
      //       id: 1,
      //       path: "/search?category=skincare-cleansing-oil",
      //       label: "Cleansing Oil",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=skincare-foaming-facial-cleanser",
      //       label: "Foaming Facial Cleanser",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=skincare-toner",
      //       label: "Toner",
      //     },
      //     {
      //       id: 4,
      //       path: "/search?category=skincare-shaving-cream",
      //       label: "Shaving Cream",
      //     },
      //     {
      //       id: 5,
      //       path: "/search?category=skincare-aftershave-lotion",
      //       label: "Aftershave Lotion",
      //     },
      //     {
      //       id: 6,
      //       path: "/search?category=skincare-deodorant",
      //       label: "Deodorant",
      //     },
      //     {
      //       id: 7,
      //       path: "/search?category=skincare-facial-moisturizer",
      //       label: "Facial Moisturizer",
      //     },
      //     {
      //       id: 8,
      //       path: "/search?category=skincare-beard-oil",
      //       label: "Beard Oil",
      //     },
      //   ],
      // },

      // // Brands
      // {
      //   id: 2,
      //   path: "/search?category=brands",
      //   label: "Brands",
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: "/search?category=brands-aarong",
      //       label: "Aarong",
      //     },
      //     {
      //       id: 2,
      //       path: "/search?category=brands-cats-eye",
      //       label: "Cats Eye",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=brands-richman",
      //       label: "Richman",
      //     },
      //     {
      //       id: 3,
      //       path: "/search?category=brands-nogorpolli",
      //       label: "NogorPolli",
      //     },
      //   ],
      // },
    ],
  },
};
