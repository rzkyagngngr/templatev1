/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9',
                secondary: '#6B7280',
                tertiary: '#9CA3AF',
                success: '#10b981',
                danger: '#ef4444',
                warning: '#f59e0b',
                border: '#E5E7EB',
                navAccent: '#32d0ff',
                bg: '#F5F7FA',
                card: '#FFFFFF',
                textPrimary: '#111827',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 0.25rem 0.5rem rgba(0, 0, 0, 0.05)',
                'hover': '0 0.5rem 1rem rgba(0, 0, 0, 0.08)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
            }
        },
    },
    plugins: [],
}
