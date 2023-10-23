import Header from "./headfoot/Header";
// import '../styles/globals.css';
import { ThemeProvider } from "../components/ui/theme-provider";
import Footer from "./headfoot/Footer";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col">
          <main className="min-h-screen-minus-footer flex-grow">
            {children}
          </main>
          <Footer companyName="Thoughtful Gallery" />
        </div>
      </ThemeProvider>
    </>
  );
}
