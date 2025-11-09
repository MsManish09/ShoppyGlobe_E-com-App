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
  - **Product Details Page** — Displays detailed product info, including price, category, brand, and discount.
  - **Add to Cart** — Add products to cart with Redux-powered state management.
  - **Remove & Buy Items** — Remove individual items or place bulk orders.
  - **Persistent Orders** — Ordered items are tracked in the user’s profile.
  - **Login Flow** — Modal-based login system with dummy credentials.

  ### State Management
  - Implemented using **Redux Toolkit**.
  - Three slices for clear state segregation:
    - `productSlice` — Fetches and stores product data.
    - `cartSlice` — Handles cart add/remove/clear actions.
    - `userSlice` — Stores user info, login state, and previous order history.
   
  ###  UX & UI
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
