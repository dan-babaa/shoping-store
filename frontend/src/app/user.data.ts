import { User } from "./user.interface";

export const usersData: User[] = [
  {
    id: 1,
    name: "Daniel Okafor",
    email: "daniel@gmail.com",
    password: "123456",
    createdAt: new Date("2024-01-12"),
    wishList: [
      { productId: 2, addedAt: new Date("2024-02-01") },
      { productId: 5, addedAt: new Date("2024-02-10") }
    ],
    cartsList: [
      { productId: 1, quantity: 2, addedAt: new Date("2024-02-12") },
      { productId: 4, quantity: 1, addedAt: new Date("2024-02-14") }
    ]
  },
  {
    id: 2,
    name: "Aisha Bello",
    email: "aisha@gmail.com",
    password: "123456",
    createdAt: new Date("2024-03-05"),
    wishList: [
      { productId: 3, addedAt: new Date("2024-03-06") }
    ],
    cartsList: [
      { productId: 2, quantity: 3, addedAt: new Date("2024-03-07") }
    ]
  },
  {
    id: 3,
    name: "Chinedu Obi",
    email: "chinedu@gmail.com",
    password: "123456",
    createdAt: new Date("2024-04-10"),
    wishList: [],
    cartsList: []
  },
  {
    id: 4,
    name: "Fatima Yusuf",
    email: "fatima@gmail.com",
    password: "123456",
    createdAt: new Date("2024-05-18"),
    wishList: [
      { productId: 6, addedAt: new Date("2024-05-20") }
    ],
    cartsList: [
      { productId: 1, quantity: 1, addedAt: new Date("2024-05-22") },
      { productId: 7, quantity: 2, addedAt: new Date("2024-05-23") }
    ]
  },
  {
  id: 5,
  name: "Michael Adeyemi",
  email: "michael@gmail.com",
  password: "123456",
  createdAt: new Date("2024-06-02"),
  wishList: [
    { productId: 4, addedAt: new Date("2024-06-05") },
    { productId: 8, addedAt: new Date("2024-06-06") }
  ],
  cartsList: [
    { productId: 3, quantity: 1, addedAt: new Date("2024-06-07") }
  ]
},
{
  id: 6,
  name: "Grace Johnson",
  email: "grace@gmail.com",
  password: "123456",
  createdAt: new Date("2024-06-10"),
  wishList: [],
  cartsList: [
    { productId: 5, quantity: 2, addedAt: new Date("2024-06-11") },
    { productId: 9, quantity: 1, addedAt: new Date("2024-06-12") }
  ]
},
{
  id: 7,
  name: "Ibrahim Musa",
  email: "ibrahim@gmail.com",
  password: "123456",
  createdAt: new Date("2024-06-15"),
  wishList: [
    { productId: 1, addedAt: new Date("2024-06-16") }
  ],
  cartsList: []
},
{
  id: 8,
  name: "Sophia Williams",
  email: "sophia@gmail.com",
  password: "123456",
  createdAt: new Date("2024-06-20"),
  wishList: [
    { productId: 2, addedAt: new Date("2024-06-21") },
    { productId: 6, addedAt: new Date("2024-06-22") }
  ],
  cartsList: [
    { productId: 7, quantity: 3, addedAt: new Date("2024-06-23") }
  ]
},
{
  id: 9,
  name: "David Brown",
  email: "david@gmail.com",
  password: "123456",
  createdAt: new Date("2024-07-01"),
  wishList: [],
  cartsList: [
    { productId: 8, quantity: 1, addedAt: new Date("2024-07-02") }
  ]
},
{
  id: 10,
  name: "Zainab Abdullahi",
  email: "zainab@gmail.com",
  password: "123456",
  createdAt: new Date("2024-07-05"),
  wishList: [
    { productId: 10, addedAt: new Date("2024-07-06") }
  ],
  cartsList: [
    { productId: 2, quantity: 2, addedAt: new Date("2024-07-07") },
    { productId: 4, quantity: 1, addedAt: new Date("2024-07-08") }
  ]
}

];
