/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "36rem", // 576px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xl: "75rem", // 1200px
      xxl: "87.5rem", // 1400px
    },
    extend: {
    },
  },
  plugins: [],
  safelist: [
    "inline-block",
    "w-full",
    "text-red-400",
    "text-neutral-100",
    "text-neutral-300",
    "font-semibold",
    "italic",
    "capitalize",
    "tracking-widest",
    "py-1",
    "px-4",
    "pb-2",
    "my-2",
    "rounded",
    "rounded-lg",
    "rounded-t-lg",
    "rounded-b-lg",
    "object-cover",
    "border",
    "border-2",
    "border-b",
    "border-t-0",
    "border-dotted",
    "border-red-500",
    "border-neutral-300",
    "transition-colors",
    "shadow-md",
    "shadow-red-600/25",
    "items-center",
    "justify-between",
    "hover:bg-red-500",
    "hover:border-red-700",
    "hover:text-neutral-900",
    "focus:bg-red-500",
    "focus:border-red-700",
    "focus:text-neutral-900",
    "md:flex",
    "md:rounded-none",
    "md:rounded-l-lg",
    "md:rounded-r-lg",
    "md:border-t-2",
    "md:border-l-0",
  ]
}
