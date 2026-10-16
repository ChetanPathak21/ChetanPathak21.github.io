import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Chetan Pathak — B.Tech CSE (Artificial Intelligence)",
  description:
    "Personal portfolio of Chetan Pathak, pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence). Exploring programming, problem solving, and software foundations.",
  keywords: [
    "Chetan Pathak",
    "Computer Science",
    "Artificial Intelligence",
    "B.Tech CSE",
    "Portfolio",
    "Software Engineering",
  ],
  authors: [{ name: "Chetan Pathak" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        {/*
          Blocking script to prevent Flash of Unstyled Theme (FOUC).
          Runs synchronously before initial paint, applying stored 'light' or default 'dark'.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
