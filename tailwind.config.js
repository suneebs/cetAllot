// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // Adjust if needed
    ],
    theme: {
      extend: {
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          background: "var(--background)", 
          foreground: "var(--foreground)",
          // add other custom properties similarly
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          borderColor: {
            border: "var(--border)", // for border utility
          },
          ringColor: {
            ring: "var(--ring)", // for ring utility
          },
  
          primary: 'hsl(var(--primary))',
          'primary-foreground': 'hsl(var(--primary-foreground))',
  
          secondary: 'hsl(var(--secondary))',
          'secondary-foreground': 'hsl(var(--secondary-foreground))',
  
          accent: 'hsl(var(--accent))',
          'accent-foreground': 'hsl(var(--accent-foreground))',
  
          muted: 'hsl(var(--muted))',
          'muted-foreground': 'hsl(var(--muted-foreground))',
  
          destructive: 'hsl(var(--destructive))',
          'destructive-foreground': 'hsl(var(--destructive-foreground))',
        },
        borderRadius: {
          lg: 'var(--radius)',
        },
      },
    },
    plugins: [],
  };
  