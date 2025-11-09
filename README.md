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

## Features

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
