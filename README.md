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
## 📁 folders
```
└── 📁app                                   # Main application folder
    ├── 📁components                        # Reusable UI components
    │   ├── 📁3d-models                     # Components specific to 3D models feature
    │   │   ├── ModelCard.tsx               # Card component for displaying individual 3D model (renamed from Ccomponents.tsx)
    │   │   └── ModelsClient.tsx            # Client-side component for handling 3D models listing with filtering and pagination
    ├── 📁pages                             # Page components that define routes
    │   ├── 📁3d-models                     # 3D models feature pages
    │   │   ├── page.tsx                    # Main 3D models listing page
    │   │   └── 📁[id]                      # Dynamic route for individual 3D model details
    │   │       └── page.tsx                # Individual 3D model detail page
    │   └── 📁about                         # About page section
    │       └── page.tsx                    # About page content
    ├── 📁data                              # Data files and static content
    │   └── models.json                     # JSON data for 3D models
    ├── 📁types                             # TypeScript type definitions
    │   └── index.ts                        # Shared type definitions for the application
    ├── 📁styles                            # Global and shared styles
    │   └── globals.css                     # Global CSS styles
    ├── layout.tsx                          # Root layout component (applies to all pages)
    ├── page.tsx                            # Homepage component
    └── not-found.tsx                       # Custom 404 error page
```

> ⚙️ This project was built to sharpen my skills with the Next.js framework while applying real-world web development patterns.
