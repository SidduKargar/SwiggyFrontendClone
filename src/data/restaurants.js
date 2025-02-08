// TODO: Replace this static data with API calls
// GET /api/restaurants - Get all restaurants
// GET /api/restaurants/:id - Get restaurant details with menu
// POST /api/restaurants/:id/menu - Add menu item
// PUT /api/restaurants/:id/menu/:itemId - Update menu item
// DELETE /api/restaurants/:id/menu/:itemId - Delete menu item

export const restaurants = [
  {
    id: 1,
    name: "Burger King",
    cuisine: ["American", "Fast Food"],
    rating: 4.2,
    deliveryTime: 30,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
    menu: [
      {
        id: 101,
        name: "Whopper",
        price: 199,
        description: "Our signature flame-grilled beef burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        category: "Burgers"
      },
      {
        id: 102,
        name: "Chicken Royale",
        price: 179,
        description: "Crispy chicken fillet with fresh lettuce",
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500",
        category: "Burgers"
      },
      {
        id: 103,
        name: "Veg Burger",
        price: 149,
        description: "Plant-based patty with fresh vegetables",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500",
        category: "Burgers"
      },
      {
        id: 104,
        name: "French Fries",
        price: 99,
        description: "Crispy golden fries",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500",
        category: "Sides"
      },
      {
        id: 105,
        name: "Onion Rings",
        price: 89,
        description: "Crispy battered onion rings",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500",
        category: "Sides"
      },
      {
        id: 106,
        name: "Chicken Wings",
        price: 249,
        description: "Spicy chicken wings with dip",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500",
        category: "Sides"
      },
      {
        id: 107,
        name: "Chocolate Shake",
        price: 129,
        description: "Rich chocolate milkshake",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
        category: "Beverages"
      },
      {
        id: 108,
        name: "Vanilla Shake",
        price: 129,
        description: "Creamy vanilla milkshake",
        image: "https://images.unsplash.com/photo-1568901839119-631418a3910d?w=500",
        category: "Beverages"
      },
      {
        id: 109,
        name: "Soft Serve",
        price: 49,
        description: "Classic vanilla soft serve",
        image: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?w=500",
        category: "Desserts"
      },
      {
        id: 110,
        name: "Brownie Sundae",
        price: 149,
        description: "Warm brownie with ice cream",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
        category: "Desserts"
      }
    ]
  },
  {
    id: 2,
    name: "Pizza Hut",
    cuisine: ["Italian", "Pizza"],
    rating: 4.0,
    deliveryTime: 45,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        id: 201,
        name: "Margherita Pizza",
        price: 299,
        description: "Classic tomato and cheese pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
        category: "Pizzas"
      },
      {
        id: 202,
        name: "Pepperoni Pizza",
        price: 399,
        description: "Spicy pepperoni with melted cheese",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
        category: "Pizzas"
      },
      {
        id: 203,
        name: "BBQ Chicken Pizza",
        price: 449,
        description: "Grilled chicken with BBQ sauce",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
        category: "Pizzas"
      },
      {
        id: 204,
        name: "Veggie Supreme",
        price: 349,
        description: "Loaded with fresh vegetables",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500",
        category: "Pizzas"
      },
      {
        id: 205,
        name: "Garlic Bread",
        price: 149,
        description: "Freshly baked garlic bread",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500",
        category: "Sides"
      },
      {
        id: 206,
        name: "Pasta Alfredo",
        price: 299,
        description: "Creamy pasta with parmesan",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500",
        category: "Pasta"
      },
      {
        id: 207,
        name: "Chicken Wings",
        price: 299,
        description: "Spicy chicken wings",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500",
        category: "Sides"
      },
      {
        id: 208,
        name: "Chocolate Lava Cake",
        price: 149,
        description: "Warm chocolate cake with molten center",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
        category: "Desserts"
      },
      {
        id: 209,
        name: "Cheesy Dip",
        price: 99,
        description: "Melted cheese dip",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
        category: "Sides"
      },
      {
        id: 210,
        name: "Pepsi",
        price: 59,
        description: "Chilled Pepsi",
        image: "https://images.unsplash.com/photo-1629203851265-5e8cc3c1f40b?w=500",
        category: "Beverages"
      }
    ]
  },
  {
    id: 3,
    name: "Domino's Pizza",
    cuisine: ["Italian", "Pizza", "Fast Food"],
    rating: 4.3,
    deliveryTime: 30,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500",
    menu: [
      {
        id: 301,
        name: "Farmhouse Pizza",
        price: 399,
        description: "Loaded with fresh vegetables and herbs",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500",
        category: "Pizzas"
      },
      {
        id: 302,
        name: "Chicken Dominator",
        price: 599,
        description: "Ultimate chicken loaded pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
        category: "Pizzas"
      },
      {
        id: 303,
        name: "Cheese Burst Pizza",
        price: 449,
        description: "Extra cheese filled crust",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        category: "Pizzas"
      }
    ]
  },
  {
    id: 4,
    name: "McDonald's",
    cuisine: ["American", "Fast Food", "Burgers"],
    rating: 4.1,
    deliveryTime: 25,
    image: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?w=500",
    menu: [
      {
        id: 401,
        name: "Big Mac",
        price: 199,
        description: "Iconic double-decker burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        category: "Burgers"
      }
    ]
  },
  {
    id: 5,
    name: "Subway",
    cuisine: ["Healthy", "Sandwiches"],
    rating: 4.0,
    deliveryTime: 20,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500",
    menu: [
      {
        id: 501,
        name: "Veggie Delight",
        price: 199,
        description: "Fresh vegetables on whole wheat bread",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500",
        category: "Subs"
      }
    ]
  },
  {
    id: 6,
    name: "KFC",
    cuisine: ["American", "Fast Food", "Chicken"],
    rating: 4.2,
    deliveryTime: 35,
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500",
    menu: [
      {
        id: 601,
        name: "Bucket Chicken",
        price: 599,
        description: "8 pieces of signature fried chicken",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
        category: "Chicken"
      }
    ]
  },
  {
    id: 7,
    name: "Taco Bell",
    cuisine: ["Mexican", "Fast Food"],
    rating: 4.0,
    deliveryTime: 30,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500",
    menu: [
      {
        id: 701,
        name: "Crunchy Taco",
        price: 99,
        description: "Classic crunchy taco with filling",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
        category: "Tacos"
      }
    ]
  },
  {
    id: 8,
    name: "Starbucks",
    cuisine: ["Beverages", "Coffee", "Snacks"],
    rating: 4.4,
    deliveryTime: 20,
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500",
    menu: [
      {
        id: 801,
        name: "Cappuccino",
        price: 299,
        description: "Classic Italian coffee",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500",
        category: "Coffee"
      }
    ]
  },
  {
    id: 9,
    name: "Dunkin' Donuts",
    cuisine: ["Desserts", "Beverages", "Snacks"],
    rating: 4.1,
    deliveryTime: 25,
    image: "https://images.unsplash.com/photo-1530016555861-3d1f3f5ca94b?w=500",
    menu: [
      {
        id: 901,
        name: "Chocolate Donut",
        price: 89,
        description: "Classic chocolate glazed donut",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
        category: "Donuts"
      }
    ]
  },
  {
    id: 10,
    name: "Baskin Robbins",
    cuisine: ["Ice Cream", "Desserts"],
    rating: 4.3,
    deliveryTime: 20,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500",
    menu: [
      {
        id: 1001,
        name: "Triple Chocolate",
        price: 199,
        description: "Rich chocolate ice cream",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
        category: "Ice Cream"
      }
    ]
  },
  {
    id: 11,
    name: "China Town",
    cuisine: ["Chinese", "Asian"],
    rating: 4.2,
    deliveryTime: 40,
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500",
    menu: [
      {
        id: 1101,
        name: "Hakka Noodles",
        price: 199,
        description: "Stir-fried noodles with vegetables",
        image: "https://images.unsplash.com/photo-1634864572865-1c31f05d6e90?w=500",
        category: "Noodles"
      }
    ]
  },
  {
    id: 12,
    name: "Paradise Biryani",
    cuisine: ["Indian", "Biryani"],
    rating: 4.5,
    deliveryTime: 45,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
    menu: [
      {
        id: 1201,
        name: "Chicken Biryani",
        price: 299,
        description: "Aromatic rice with tender chicken",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        category: "Biryani"
      }
    ]
  },
  {
    id: 13,
    name: "Sushi Hub",
    cuisine: ["Japanese", "Sushi", "Asian"],
    rating: 4.4,
    deliveryTime: 50,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
    menu: [
      {
        id: 1301,
        name: "California Roll",
        price: 399,
        description: "Classic California style sushi roll",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
        category: "Sushi"
      }
    ]
  },
  {
    id: 14,
    name: "Thai Express",
    cuisine: ["Thai", "Asian"],
    rating: 4.3,
    deliveryTime: 35,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500",
    menu: [
      {
        id: 1401,
        name: "Pad Thai",
        price: 249,
        description: "Classic Thai noodles",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500",
        category: "Noodles"
      }
    ]
  },
  {
    id: 15,
    name: "Healthy Bowl",
    cuisine: ["Healthy", "Salads", "Bowls"],
    rating: 4.6,
    deliveryTime: 25,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    menu: [
      {
        id: 1501,
        name: "Buddha Bowl",
        price: 299,
        description: "Nutritious bowl with quinoa and vegetables",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        category: "Bowls"
      }
    ]
  }
];

// TODO: API Integration Points

/*
1. Restaurant APIs:
   - GET /api/restaurants - Get all restaurants with filters
   - GET /api/restaurants/:id - Get single restaurant details
   - POST /api/restaurants - Add new restaurant (admin)
   - PUT /api/restaurants/:id - Update restaurant (admin)
   - DELETE /api/restaurants/:id - Delete restaurant (admin)

2. Menu APIs:
   - GET /api/restaurants/:id/menu - Get restaurant menu
   - POST /api/restaurants/:id/menu - Add menu item (admin)
   - PUT /api/restaurants/:id/menu/:itemId - Update menu item (admin)
   - DELETE /api/restaurants/:id/menu/:itemId - Delete menu item (admin)

3. Order APIs:
   - POST /api/orders - Create new order
   - GET /api/orders - Get user's orders
   - GET /api/orders/:id - Get order details
   - PUT /api/orders/:id/status - Update order status (admin)

4. User APIs:
   - POST /api/users/register - Register new user
   - POST /api/users/login - User login
   - GET /api/users/profile - Get user profile
   - PUT /api/users/profile - Update user profile

5. Review APIs:
   - POST /api/restaurants/:id/reviews - Add review
   - GET /api/restaurants/:id/reviews - Get restaurant reviews
   - PUT /api/reviews/:id - Update review
   - DELETE /api/reviews/:id - Delete review

6. Search API:
   - GET /api/search - Search restaurants and menu items

Database Schema:

restaurants {
  id: primary key
  name: string
  cuisine: array
  rating: float
  deliveryTime: integer
  image: string
  createdAt: timestamp
  updatedAt: timestamp
}

menu_items {
  id: primary key
  restaurantId: foreign key
  name: string
  price: float
  description: string
  image: string
  category: string
  isAvailable: boolean
  createdAt: timestamp
  updatedAt: timestamp
}

users {
  id: primary key
  name: string
  email: string
  password: string (hashed)
  phone: string
  address: array
  createdAt: timestamp
  updatedAt: timestamp
}

orders {
  id: primary key
  userId: foreign key
  restaurantId: foreign key
  items: array
  totalAmount: float
  status: string
  deliveryAddress: object
  createdAt: timestamp
  updatedAt: timestamp
}

reviews {
  id: primary key
  userId: foreign key
  restaurantId: foreign key
  rating: float
  comment: string
  createdAt: timestamp
  updatedAt: timestamp
}
*/