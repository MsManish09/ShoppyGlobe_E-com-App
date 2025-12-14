GitHub link: https://github.com/MsManish09/ShoppyGlobe_E-com-App

# ShoppyGlobe - E-commerce Application

Welcome to **ShoppyGlobe**, a modern and fully responsive eCommerce web app built using **React**, **Redux Toolkit**, and **Tailwind CSS**.  
 The project demonstrates real-world eCommerce functionality — from browsing products to adding them to a cart, logging in, and placing orders — all powered by **state management using Redux**.

- Desktop view:
  <img width="1902" height="915" alt="Desktop view screenshot" src="https://github.com/user-attachments/assets/a810d03c-6fca-4b8d-98e7-0c80a2724b05" />

- Mobile view:
  <img width="276" height="581" alt="mobile view screenshot" src="https://github.com/user-attachments/assets/e6672b04-6f73-4131-bcf4-775b3178b683" />

- Tablet view:
  <img width="607" height="802" alt="tablet portrait view screenshot" src="https://github.com/user-attachments/assets/0e09f319-5349-42d4-ba6a-b9430b859af1" />

## Features - Frontend

### Functionality

- **Product Listing** — Fetches product data dynamically from an API.
  <img width="1820" height="891" alt="Screenshot 2025-11-09 151008" src="https://github.com/user-attachments/assets/904af33f-62eb-4577-aad3-277f02a41f08" />

- **Product Details Page** — Displays detailed product info, including price, category, brand, reviews and discount.

  - Renders product information dynamically based on the product ID in the URL (/product/:id)
  - Uses React Router’s useParams() to capture the id from the route.
  - Fetches the relevant product from the Redux store or API on demand.
    <img width="1920" height="1080" alt="Screenshot 2025-11-09 150710" src="https://github.com/user-attachments/assets/b28fa61b-ff9f-4668-9057-92c7e8ed4ece" />

- **Similar Product Suggestions** — Recommends related products based on categor, encouraging product discovery and cross-selling.
  <img width="1719" height="905" alt="Screenshot 2025-11-09 151219" src="https://github.com/user-attachments/assets/3c36a90d-e15b-4ddd-8f32-cd0719ac6972" />

- **Browse by Category** — Allows users to explore products filtered by category.

  - Fetches all products within the selected category dynamically from the API.
  - Utilizes route-based rendering (e.g., /category/:categoryName) to display filtered results.
    <img width="1873" height="855" alt="Screenshot 2025-11-09 151916" src="https://github.com/user-attachments/assets/753b2a30-9f33-4d72-905a-76bc9f4a4a2d" />

- **Add to Cart** — Add products to cart with Redux-powered state management.
  <img width="1911" height="906" alt="Screenshot 2025-11-09 150752" src="https://github.com/user-attachments/assets/4515f7c1-893f-4e5b-bb81-61f734198673" />

- **Remove & Buy Items** — Remove individual items or place bulk orders.
- **Persistent Orders** — Ordered items are tracked in the user’s profile.
  <img width="1767" height="896" alt="Screenshot 2025-11-09 150825" src="https://github.com/user-attachments/assets/4abefd7c-c93e-48cb-93f1-7bb363652ac5" />

- **Login Flow** — Modal-based login system with dummy credentials.

### State Management

- Implemented using **Redux Toolkit**.
- Three slices for clear state segregation:
  - `productSlice` — Fetches and stores product data.
  - `cartSlice` — Handles cart add/remove/clear actions.
  - `userSlice` — Stores user info, login state, and previous order history.

### UX & UI

- **Login Modal** — Users can freely browse, but must log in to add to cart or buy.
  <img width="967" height="652" alt="Screenshot 2025-11-09 145811" src="https://github.com/user-attachments/assets/c65f3f79-f93f-48ba-ba62-8f5868694f3c" />

- **Cart Modal** — Confirms successful order placement.
  <img width="758" height="441" alt="Screenshot 2025-11-09 145844" src="https://github.com/user-attachments/assets/129248f7-8096-4263-b99a-eff7262176bb" />

- **Responsive Design** — Works seamlessly across desktop, tablet, and mobile.

## Backend: 

- **ShoppyGlobe Backend – Node.js & Express API** — Overview
shoppyGlobel / backend repository contains the backend APIs for the ShoppyGlobe e-commerce application, built using Node.js, Express.js, MongoDB, and JWT authentication.

**The backend handles**:

-**Product fetching** - fetching product from api and storing them in the redux product store
-**User authentication (Register & Login)** - Add new user and store user details in database and authenticate user using JWT authentication
-**Cart management (Add & Remove items)** - built backend api's  Add and remove items to the cart and update state in redux.
-**Secure access to cart APIs using JWT** - Made sure that some routes are secured using authentication middleware, JWT authenctication.

### Product Fetching: 
- **Fetch all products**
  - Retrieves all products from the MongoDB database and store them in redux state, as soon as app loads.
  - Used to display products in the frontend.
  - Returns product details such as title, price, category, brand, and rating.
  - **API Response:**
    <img width="1920" height="1080" alt="GET_API_Product_API_successful" src="https://github.com/user-attachments/assets/67f3b6f9-ba25-4f55-b44c-35f5a9b82969" />

- **Fetch product by ID**
  - Retrieves detailed information of a single product using its unique ID.
  - Returns complete product information including description and pricing.
  - **When fetch produt by id is successful: API Response**
<img width="1920" height="1080" alt="GET_API_Product_by_ID_successful" src="https://github.com/user-attachments/assets/2c9d44cf-8f6e-487b-be0f-50f68085fe08" />
 - **When fetch produt by id is unsuccessful: API Response**
<img width="1920" height="1080" alt="GET_Product_API_Unsuccessful" src="https://github.com/user-attachments/assets/7f67fb4b-2295-473f-9a6f-3c236b198945" />

### Authentication & Authorization: 

 This project uses **JWT-based authentication** to secure API endpoints.
 **Description**
 - Registers a new user
   <img width="1920" height="1080" alt="POST_signup_successful" src="https://github.com/user-attachments/assets/1680bb40-2123-41c6-ab39-19762218a3b5" />

 - Passwords are securely hashed using **bcrypt**
 - User details are stored in **MongoDB**
   <img width="1920" height="1080" alt="new_user_stored_in_MONGODB" src="https://github.com/user-attachments/assets/17ffba84-c373-48c9-a0be-99b530d0d775" />

 - When ever a user logs In, jwt token is generated and stored in LocalStorage to protect api's. The token is required to access protected routes
   <img width="1920" height="1080" alt="POST_Login_auth_200_successful" src="https://github.com/user-attachments/assets/ae53cb7f-7616-4e52-889d-829d0ba45026" />

  <img width="1920" height="1080" alt="JWT_token_localStorage" src="https://github.com/user-attachments/assets/4df0e06b-ad84-4177-949a-e6a2961dd49a" />
 - **JWT token** valid for **30 minutes**

## Cart APIs:
 - Protected Routes
 - All cart-related endpoints require a **valid JWT token** (stored in localStorage after logging In).
 
 ### Add Product to Cart -> POST / cart
  **Description**
  - Adds a product to the logged-in user’s cart
  - Cart is stored as part of the user document
<img width="1920" height="1080" alt="POST_200_AddToCart_successful" src="https://github.com/user-attachments/assets/190d8e72-ea80-49c8-8a27-e7fa054f4f75" />
<img width="1920" height="1080" alt="POST_200_AddToCart_successful_DB_ScreenShot" src="https://github.com/user-attachments/assets/7aed4db1-a2db-44de-99b7-2e96e770fbc8" />

 ### Delete Product From Cart -> DELETE / delete_From_cart
  **Description**
  - Removes a specific product from the user’s cart
  - Cart items are filtered using `product id`
  - Updated cart is saved back to **MongoDB**
    <img width="1920" height="1080" alt="DELETE_200_RemoveItemFromCart_successful" src="https://github.com/user-attachments/assets/1a2b3784-6786-46ef-9d5f-94d8eb460b80" />

 ### Fetch User & Cart Details -> POST /user
  
  **Description**
  - Fetches authenticated user details by their registered email id.
  - Returns cart items stored in the database
  - Used to initialize frontend cart state after login

# Database Design

 The application uses **MongoDB** for data storage (cloud).
  - Any one can access the Database, from any device
 
 
 ### User Collection schema:
 
 ```js
 {
    name: {type:String, required: true },
    email: {type:String, required: true, unique: true },
    password: {type:String, required: true },
    address: {type:String, required: true },
    cartItems :{type: [cartSchema], default: []},  // cart default should be empty
    previousOrders: {type: [previousOrdersSchema], default: []} , // defualt should be emtpy array.
 }
 ```
 **Description**
  - Stores user authentication details (email, name, address etc)
  - password is stored in hashed format
  - cartItems contains products added by the user
  - previouslyOrderedItems would stores past order data

### Products Collection: 
  - Stored in MongoDB Atlas
  - all the required details of the product is stored.
  - Products are fetch from dummyAPI and later propulate into mongoDB
  - Redux product slice user this api to fetch product detials and display in frontend.
    <img width="1920" height="1080" alt="GET_API_Product_API_successful" src="https://github.com/user-attachments/assets/2e3d9718-e0fa-436e-9d24-ad30546624c9" />

  **Products collection schema**
  ```js
  id: {
        type: Number,
        required: true,
        unique: true, // prevents prevent duplication.
      },
      title: String,
      description: String,
      price: Number,
      discountPercentage: Number,
      rating: Number,
      stock: Number,
      brand: String,
      category: String,
      thumbnail: String,
      images: [String],
      dimensions: {
        width: Number,
        height: Number,
        depth: Number
      },
      reviews: {
        type: [reviewsSchema],
        default: []
      }
  ```

## Error Handling & Validation
 Proper status codes (400, 401, 404, 500)
 **Validation for:**
   - Missing request fields
   - Invalid user
   - Unauthorized access
   - Try–catch blocks used in all controllers

 ## API Testing
  All APIs were tested using Thunder Client:
  - User Registration
  - User Login
  - Product Fetch
  - Add to Cart
  - Remove from Cart

 ### How to Run the Project
  - Install dependencies for both Frontend and backend
     - open the app.jsx file of the  app and in termainal run **npm install**
     - Then run **npm run dev** in the terminal.
     - Open new terminal and navigate to backend folder -> **cd backend**
     - Then install backend dependencies -> **npm install**
     - Then start the server -> **npm start**
 ## Tech Stack

- **Frontend** - React 18, Vite
- **State Management** - Redux Toolkit
- **Routing** - React Router DOM
- **Styling** - Tailwind CSS
- **Icons** - react Icons
- **Build Tool** - Vite

## Credits / Acknowledgments:

- react-icons: https://react-icons.github.io/react-icons/
  - For icons
- Tailwindcss.com: https://tailwindcss.com/
- Redux ToolKit: https://redux-toolkit.js.org/
- React Router: https://reactrouter.com/
- perplexicity AI and chatGPT and other sites :
  - for research
- DummyJSON API : https://dummyjson.com/
  - for dummy product api's
