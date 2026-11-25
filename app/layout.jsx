import "./globals.css";
import Shell from "./Shell";
import { ContentProvider } from "./ContentProvider";

export const metadata = {
  title: "Tasalimkausar Shaikh | Software & Web Developer",
  description:
    "Tasalimkausar Shaikh, software and app developer in Pune. Explore Tomato and Job Radar AI.",
  icons: { icon: "/assets/favicon.svg" },
};

export const viewport = {
  themeColor: "#000012",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContentProvider>
          <Shell>{children}</Shell>
        </ContentProvider>
      </body>
    </html>
  );
}
