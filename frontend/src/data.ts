import {Clothing, Hero, User} from './app/shared/models/Clothe'

export const CLOTHING_DATA: Clothing[] = [
  {
    id: 1,
    name: "Oversized Street T-Shirt",
    brand: "UrbanX",
    price: 29.99,
    sizes: ["S","M","L","XL"],
    colors: ["Black","White"],
    category: "Men",
    imageUrl: ["assets/images/cl1.jpg", "assets/images/cl2.jpg", "assets/images/cl8.jpg", "assets/images/cl6.jpg"],
    rating: 4,
    discount: 10,
    description: "Premium cotton oversized streetwear tee.",
    inStock: true,
    createdAt: new Date("2026-01-05"),
    collectionType: "Black-Friday",
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 4,
          approved: true
        },
        {
          name: 'joseph',
          rating: 3,
          comment: 'looks good',
          date: new Date(),
          id: 3,
          userId: 8,
          approved: false
        },
        {
          name: 'marlin',
          rating: 5,
          comment: 'great fit',
          date: new Date(),
          id: 4,
          userId: 5,
          approved: true
        },
        {
          name: 'kola wola',
          rating: 2,
          comment: 'not bad!!!!',
          date: new Date(),
          id: 5,
          userId: 10,
          approved: true
        }
      ],
      quantity: 0
  },
  {
    id: 2,
    name: "Slim Fit Denim Jacket",
    brand: "Trendify",
    price: 89.99,
    sizes: ["M","L","XL"],
    colors: ["Blue"],
    category: "Men",
    imageUrl: ["assets/images/cl2.jpg", "assets/images/cl22.jpg", "assets/images/cl31.jpg"],
    rating: 5,
    description: "Classic slim fit denim jacket.",
    inStock: true,
    createdAt: new Date("2026-01-10"),
    collectionType: "Hot-Deals",
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 8,
          approved: false
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 5,
          approved: true
        }
      ],
      quantity: 3
  },
  {
    id: 3,
    name: "Casual Summer Dress",
    brand: "NovaStyle",
    price: 49.99,
    sizes: ["S","M","L"],
    colors: ["Red","White"],
    category: "Women",
    imageUrl: ["assets/images/cl3.jpg", "assets/images/cl22.jpg", "assets/images/cl10.jpg"],
    rating: 3,
    discount: 15,
    description: "Lightweight floral summer dress.",
    inStock: true,
    createdAt: new Date("2026-01-12"),
    collectionType: "Mens-Collection",
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 3,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 1,
          userId: 6,
          approved: true
        }
      ],
      quantity: 7
  },
  {
    id: 4,
    name: "Classic Leather Belt",
    brand: "LuxeWear",
    price: 24.99,
    sizes: ["M","L"],
    colors: ["Brown","Black"],
    category: "Accessories",
    imageUrl: ["assets/images/cl4.jpg", "assets/images/cl9.jpg", "assets/images/cl41.jpg"],
    rating: 4,
    description: "Genuine leather everyday belt.",
    inStock: false,
    createdAt: new Date("2026-01-15"),
    collectionType: "New-Arrivals",
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 3,
          approved: false
        }
      ],
      quantity: 1
  },
  {
    id: 5,
    name: "Athletic Running Sneakers",
    brand: "StreetCore",
    price: 119.99,
    sizes: ["40","41","42","43"],
    colors: ["Black","Gray"],
    category: "Shoes",
    imageUrl: ["assets/images/cl5.jpg", "assets/images/cl22.jpg", "assets/images/cl44.jpg"],
    rating: 5,
    discount: 20,
    description: "Breathable lightweight running shoes.",
    inStock: true,
    createdAt: new Date("2026-01-18"),
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 1,
          approved: true
        }
      ],
      quantity: 6
  },

  // ----- CONTINUING RANDOM PRODUCTS -----

  {
    id: 6,
    name: "Graphic Print Hoodie",
    brand: "UrbanX",
    price: 69.99,
    sizes: ["S","M","L","XL"],
    colors: ["Black","Green"],
    category: "Men",
    imageUrl: ["assets/images/cl6.jpg", "assets/images/cl14.jpg", "assets/images/cl31.jpg"],
    rating: 4,
    description: "Soft fleece hoodie with bold graphic print.",
    inStock: true,
    createdAt: new Date("2026-01-20"),
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 1,
          approved: true
        }
      ],
      quantity: 10
  },
  {
    id: 7,
    name: "High Waist Skinny Jeans",
    brand: "NovaStyle",
    price: 59.99,
    sizes: ["S","M","L"],
    colors: ["Blue","Black"],
    category: "Women",
    imageUrl: ["assets/images/cl7.jpg","assets/images/cl50.jpg", "assets/images/cl16.jpg"],
    rating: 5,
    discount: 10,
    description: "Stretchable high waist skinny jeans.",
    inStock: true,
    createdAt: new Date("2026-01-22"),
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 1,
          approved: true
        }
      ],
      quantity: 8
  },
  {
    id: 8,
    name: "Minimalist Wrist Watch",
    brand: "LuxeWear",
    price: 149.99,
    sizes: ["One Size"],
    colors: ["Black","Silver"],
    category: "Accessories",
    imageUrl: ["assets/images/cl8.jpg", "assets/images/cl18.jpg", "assets/images/cl17.jpg"],
    rating: 4,
    description: "Elegant minimalist wrist watch.",
    inStock: true,
    createdAt: new Date("2026-01-25"),
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date()
          ,
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date()
          ,
          id: 2,
          userId: 1,
          approved: true
        }
      ],
      quantity: 10
  },
  {
    id: 9,
    name: "Vintage Sunglasses",
    brand: "Trendify",
    price: 39.99,
    sizes: ["One Size"],
    colors: ["Black","Brown"],
    category: "Accessories",
    imageUrl: ["assets/images/cl9.jpg", "assets/images/cl46.jpg", "assets/images/cl19.jpg"],
    rating: 3,
    description: "UV protected vintage sunglasses.",
    inStock: false,
    createdAt: new Date("2026-01-27"),
    collectionType: "Black-Friday",
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 2,
          approved: true
        }
      ],
      quantity: 15
  },
  {
    id: 10,
    name: "Formal Oxford Shoes",
    brand: "StreetCore",
    price: 129.99,
    sizes: ["40","41","42","43","44"],
    colors: ["Black","Brown"],
    category: "Shoes",
    imageUrl: ["assets/images/cl10.jpg", "assets/images/cl27.jpg", "assets/images/cl36.jpg"],
    rating: 5,
    discount: 25,
    description: "Premium leather formal oxford shoes.",
    inStock: true,
    createdAt: new Date("2026-01-30"),
    collectionType: "Black-Friday",
    reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 1,
          approved: true
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 1,
          approved: true
        }
      ],
      quantity: 4
  },

  // ---- I will compress the rest but still valid objects ----

  ...Array.from({ length: 40 }, (_, i) => {
    const id = i + 11;
    return {
      id,
      name: `Fashion Item ${id}`,
      brand: ["UrbanX","Trendify","NovaStyle","StreetCore","LuxeWear"][id % 5],
      price: 20 + (id * 3.75),
      sizes: ["S","M","L","XL"],
      colors: ["Black","White","Blue","Red"],
      category: ["Men","Women","Shoes","Accessories"][id % 4],
      imageUrl: [`assets/images/cl${id}.jpg`, `assets/images/cl${id + 1}.jpg`, `assets/images/cl${id - 2}.jpg`],
      rating: (id % 5) + 1,
      discount: id % 3 === 0 ? 15 : undefined,
      description: "High quality fashion product for daily wear.",
      inStock: id % 4 !== 0,
      createdAt: new Date(`2026-02-${(id % 28) + 1}`),
      reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 5,
          approved: true
        },
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 2,
          userId: 3,
          approved: true
        },
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 3,
          userId: 8,
          approved: false
        },
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 4,
          userId: 6,
          approved: true
        }
      ],
      quantity: (id + 1) %2
    };
  }),
  
  

];

export const COLLECTION_DATA: Clothing[] = [

  ...generateCollection("Black-Friday", 1),
  ...generateCollection("Hot-Deals", 5),
  ...generateCollection("Mens-Collection", 10),
  ...generateCollection("Womens-Collection", 15),
  ...generateCollection("New-Arrivals", 20)

];

function generateCollection(type: string, startId: number): Clothing[] {
  return Array.from({ length: 20 }, (_, i) => {
    const id = startId + i;

    return {
      id,
      name: `${type} Item ${i + 1}`,
      brand: ["UrbanX","Trendify","NovaStyle","StreetCore","LuxeWear"][i % 5],
      price: 25 + (i * 4.5),
      sizes: ["S","M","L","XL"],
      colors: ["Black","White","Red","Blue"],
      category: ["Men","Women","Shoes","Accessories"][i % 4],
      imageUrl: [`assets/images/cl${id}.jpg`, `assets/images/cl${id + 1}.jpg`, `assets/images/cl${id - 2}.jpg`],
      rating: (i % 5) + 1,
      discount: i % 2 === 0 ? 15 : undefined,
      description: `${type} premium fashion item.`,
      inStock: i % 3 !== 0,
      createdAt: new Date(`2026-03-${(i % 28) + 1}`),
      collectionType: type,
      reviews: [
        {
          name: 'Daniel',
          rating: 5,
          comment: 'Premium quality 🔥',
          date: new Date(),
          id: 1,
          userId: 5,
          approved: false
        },
        {
          name: 'Mary',
          rating: 4,
          comment: 'Nice fit',
          date: new Date(),
          id: 2,
          userId: 4,
          approved: true
        }
      ],
      quantity: 12

    };
  });
}



export const HERO_DATA: Hero[] = [
  {
    id: 1,
    tag: '🔥 Black Friday',
    slug: "Black-Friday",
    title: 'Massive 50% Discount',
    description: 'Grab your favorite fashion items at half price before time runs out.',
    buttonText: 'Shop Now',
    image: 'assets/images/cl1.jpg',
    gradient: 'linear-gradient(to right, #ebc2c2, #ffffff)',
    createdAt: new Date('2026-02-01')
  },
  {
    id: 2,
    tag: '✨ New Arrivals',
    slug: "New-Arrivals",
    title: 'Fresh 2026 Collection',
    description: 'Discover our newest arrivals and elevate your wardrobe.',
    buttonText: 'Explore',
    image: 'assets/images/cl2.jpg',
    gradient: 'linear-gradient(to right, #afd6e0, #ffffff)',
    createdAt: new Date('2026-02-05')
  },
  {
    id: 3,
    tag: '👠 Women Collection',
    slug: "Womens-Collection",
    title: 'Elegant & Modern Styles',
    description: 'Premium outfits designed for confidence and elegance.',
    buttonText: 'View Collection',
    image: 'assets/images/cl3.jpg',
    gradient: 'linear-gradient(to right, #e4bcd8, #ffffff)',
    createdAt: new Date('2026-02-08')
  },
  {
    id: 4,
    tag: '👞 Women Collection',
    slug: "Mens-Collection",
    title: 'Comfort Meets Style',
    description: 'Step out in style with our latest sneaker collection.',
    buttonText: 'Buy Now',
    image: 'assets/images/cl47.jpg',
    gradient: 'linear-gradient(to right, #e2bdab, #ffffff)',
    createdAt: new Date('2026-02-10')
  },
  {
    id: 5,
    tag: '😋 Hot Deals',
    slug: "Hot-Deals",
    title: 'Summer Essentials',
    description: 'Protect your eyes while staying fashionable.',
    buttonText: 'Discover',
    image: 'assets/images/cl43.jpg',
    gradient: 'linear-gradient(to right, #c3e9b2, #ffffff)',
    createdAt: new Date('2026-02-11')
  }
];




export const USERS: User[] = [
  {
    id: 1,
    name: 'Daniel Baba',
    email: 'daniel@example.com',
    password: '123456',
    createdAt: new Date('2024-01-10'),
    wishList: [1, 3],
    cartsList: [2]
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    password: '123456',
    createdAt: new Date('2024-02-05'),
    wishList: [2],
    cartsList: [1, 4]
  },
  {
    id: 3,
    name: 'Michael Lee',
    email: 'michael@example.com',
    password: '123456',
    createdAt: new Date('2024-03-01'),
    wishList: [],
    cartsList: []
  },
  {
    id: 4,
    name: 'Aisha Bello',
    email: 'aisha@example.com',
    password: '123456',
    createdAt: new Date('2024-03-20'),
    wishList: [5],
    cartsList: [3]
  },
  {
    id: 5,
    name: 'John Smith',
    email: 'john@example.com',
    password: '123456',
    createdAt: new Date('2024-04-11'),
    wishList: [2, 6],
    cartsList: []
  },
  {
    id: 6,
    name: 'Grace Kim',
    email: 'grace@example.com',
    password: '123456',
    createdAt: new Date('2024-05-09'),
    wishList: [],
    cartsList: [1]
  },
  {
    id: 7,
    name: 'David Brown',
    email: 'david@example.com',
    password: '123456',
    createdAt: new Date('2024-06-15'),
    wishList: [4],
    cartsList: [2, 3]
  },
  {
    id: 8,
    name: 'Fatima Musa',
    email: 'fatima@example.com',
    password: '123456',
    createdAt: new Date('2024-07-02'),
    wishList: [],
    cartsList: []
  },
  {
    id: 9,
    name: 'Chris Adams',
    email: 'chris@example.com',
    password: '123456',
    createdAt: new Date('2024-08-18'),
    wishList: [1],
    cartsList: []
  },
  {
    id: 10,
    name: 'Emily Clark',
    email: 'emily@example.com',
    password: '123456',
    createdAt: new Date('2024-09-01'),
    wishList: [],
    cartsList: [5]
  }
];