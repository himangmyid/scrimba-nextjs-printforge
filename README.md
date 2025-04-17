# 🛠️ PrintForge — Next.js Practice Project from Scrimba

This is a hands-on project built as part of the [Scrimba Next.js course](https://scrimba.com/). In this course, I developed **PrintForge**, a website for exploring and sharing STL files for 3D printing.

## 🔧 Technologies Used

- **Next.js** – for dynamic routing, static site generation, and server-side rendering  
- **TypeScript** – for safer and more structured code  
- **Tailwind CSS** – for fast and responsive styling  
- **NeoBrutalism UI** – a unique and modern neobrutalist user interface  

## 📦 Implemented Features

- Basic and dynamic routing  
- Async data fetching (server/client)  
- Layout and dynamic page components  
- Responsive and minimalist UI design  

---
```
npm install tw-animate-css
npm install neobrutalismcss
```
## 📁 Project Structure
```
📁 scrimba-nextjs-printforge/               # Main project folder
    ├── 📁app                               # Main Next.js app folder (App Router)
    │   ├── favicon.ico                     # Website favicon
    │   ├── globals.css                     # Global CSS styles
    │   ├── layout.tsx                      # Root layout component
    │   ├── page.tsx                        # Homepage component
    │   ├── not-found.tsx                   # Custom 404 error page
    │   ├── 📁3d-models                     # 3D models feature pages
    │   │   ├── Ccomponents.tsx             # Card component for 3D models
    │   │   ├── ModelsClient.tsx            # Client-side component with filtering/pagination
    │   │   ├── page.tsx                    # Main 3D models listing page
    │   │   └── 📁[id]                      # Dynamic route for model details
    │   │       └── page.tsx                # Individual model detail page
    │   ├── 📁about                         # About page section
    │   │   └── page.tsx                    # About page content
    │   ├── 📁data                          # Data files
    │   │   └── models.json                 # 3D models data
    │   └── 📁types                         # TypeScript definitions
    │       └── index.ts                    # Shared type definitions
    ├── 📁components                        # Reusable UI components
    │   ├── Nav.tsx                         # Navigation component
    │   └── 📁ui                            # UI component library
    │       ├── button.tsx                  # Button component
    │       ├── image-card.tsx              # Image card component
    │       ├── pagination.tsx              # Pagination component
    │       └── skeleton.tsx                # Skeleton loading component
    ├── 📁lib                               # Utility functions
    │   ├── models.ts                       # Models-related utilities
    │   └── utils.ts                        # General utilities
    ├── 📁public                            # Static assets
    │   ├── hero-image.png                  # Hero image
    │   ├── hero-image-square.png           # Square hero image
    │   ├── placeholder.png                 # Placeholder image
    │   ├── printforge-logo.svg             # PrintForge logo
    │   ├── printforge-logo-dark.svg        # Dark logo version
    │   ├── printforge-logo-icon.svg        # Logo icon
    │   └── printforge-logo-icon-dark.svg   # Dark logo icon
    ├── components.json                     # Components configuration
    ├── eslint.config.mjs                   # ESLint configuration
    ├── next-env.d.ts                       # Next.js TypeScript declarations
    ├── next.config.ts                      # Next.js configuration
    ├── package.json                        # Project dependencies and scripts
    ├── postcss.config.mjs                  # PostCSS configuration
    ├── README.md                           # Project documentation
    └── tsconfig.json                       # TypeScript configuration
```

> ⚙️ This project was built to sharpen my skills with the Next.js framework while applying real-world web development patterns.


[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y21CI5QQ)
