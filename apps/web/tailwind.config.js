/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                "primary-fg": "var(--color-primary-contrast)",
                secondary: "var(--color-secondary)",
                surface: "var(--color-bg-surface)",
                app: "var(--color-bg-app)",
                "text-main": "var(--color-text-main)",
                "text-muted": "var(--color-text-muted)",
                border: "var(--color-border)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
            },
            boxShadow: {
                depth: "var(--shadow-depth)",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"],
            },
            fontWeight: {
                brand: "var(--font-heading-weight)",
            },
            backdropBlur: {
                brand: "var(--glass-blur)",
            }
        },
    },
    plugins: [
        // Custom plugin to handle text-transform since it's not a standard scale in TW
        function ({ addUtilities }) {
            addUtilities({
                '.case-brand': { 'text-transform': 'var(--font-heading-case)' },
            })
        }
    ],
}