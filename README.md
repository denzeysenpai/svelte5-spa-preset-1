# Svelte5-SPA-Preset-1

A **Svelte 5 template** with a built-in **SPA router** and a **responsive header/navbar as a bonus** ( you can remove it if you want ). This preset is designed to help developers who face **routing issues when deploying Svelte apps on IIS**.

## 🚀 Why Use This Template?
When deploying a normal **SvelteKit** project that uses the standard svelte filesystem-based routing on **IIS**, routing often breaks because IIS does not handle client-side routing properly. This template provides a simple **SPA (Single Page Application) routing solution**, ensuring smooth navigation without server-side configuration headaches.

## ✨ Features
- **Pre-configured SPA Router** → Works seamlessly with IIS
- **Responsive Header & Navbar** → Mobile-friendly and customizable
- **Lightweight & Minimal** → Not a full-fledged starter kit, just a preset to avoid IIS issues

## 📦 Installation
```sh
npx degit denzeysenpai/svelte5-spa-preset-1 my-svelte-app
cd my-svelte-app
npm install
npm run dev
```

## 🛠 Configuration
- Modify the **routes** in `src/routes.ts`
- Customize the **header/navbar** in `src/components/Header.svelte`

## 🚧 Deploying to IIS
1. Build the project:
   ```sh
   npm run build
   ```
2. Copy the `build/` folder to your IIS site directory

## 🔗 Resources
- [Svelte](https://svelte.dev/)
- [Svelte SPA Router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [IIS Rewrite Module](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/using-the-url-rewrite-module)

## 📜 License
MIT License. Feel free to use and modify!

---

### ❓ Need Help?
If you run into **CORS issues**, **routing problems**, or **deployment errors**, feel free to open an issue or ask for support!


