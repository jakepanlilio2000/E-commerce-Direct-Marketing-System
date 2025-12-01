## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======

# Mharthea Food Dealer: Direct Marketing Web Application

## About the Project

This project, **Mharthea Food Dealer**, is a sample web application built for a Direct Marketing course. Its primary goal is to demonstrate modern web development practices (JAMstack) while showcasing various **direct marketing strategies**, including personalized offers, membership tracking, and robust lead generation through newsletter sign-ups.

The application serves as a product catalog and promotions hub, specifically targeting **individuals, parents, and grocery buyers** with tailored messaging and clear Calls-to-Action (CTAs).

---

## Technology Stack

The application is built using a modern, scalable, and fully serverless JAMstack architecture:

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | **React / Next.js** | Provides routing, fast rendering, and static site generation for performance. |
| **Styling** | **Tailwind CSS** | Utility-first framework ensuring a professional, mobile-responsive, and consistent theme. |
| **Backend / Auth** | **Supabase** | Provides a PostgreSQL database and handles the full **Authentication** flow (Login, Register, Logout). |
| **Deployment** | **Vercel** | Serverless hosting for seamless deployment and scalability. |

---

## Key Features & Direct Marketing Strategy

The site includes all required pages and highlights specific direct marketing techniques:

* **Home Page:** Features the company slogan/tagline and a clear primary Call-to-Action ("Order Now").
* **Products Page:** Lists mock products with pricing and product descriptions targeted toward the defined audience (Parents/Groceries).
* **Promotions Page:** Explicitly showcases **Coupons**, **Discounts**, and **Membership** strategies, alongside a sample of personalized email marketing.
* **Contact Page:** Includes a contact form and links to all complete contact information.
* **Social Media Integration:** Links/icons for major platforms (Facebook, Instagram, TikTok, YouTube).
* **Authentication:** Fully functional **Login, Register, and Logout** system using Supabase, necessary for enabling personalized, member-only offers.

---

## Setup and Installation Guide

Follow these steps to set up and run the project locally.

### Prerequisites

You must have **Node.js** (including npm) and a **Supabase Project** set up.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jakepanlilio2000/E-commerce-Direct-Marketing-System.git
    cd mharthea-food-dealer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Includes: `next`, `react`, `tailwindcss`, `@supabase/supabase-js`, `react-icons`)*

3.  **Configure Environment Variables (Supabase):**
    Create a file named **`.env.local`** in the project root and add your Supabase credentials:
    ```
    # .env.local

    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```

### Running the Application

Start the development server:

```bash
npm run dev
````

The application will be accessible at `http://localhost:3000`.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

-----

## ☁️ Deployment

This project is configured for seamless deployment to **Vercel**, the recommended hosting platform for Next.js applications.

1.  Push your code to a Git repository (e.g., GitHub).
2.  Import the project into Vercel.
3.  Ensure your **Supabase Environment Variables** (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) are configured in the Vercel project settings.

<!-- end list -->
