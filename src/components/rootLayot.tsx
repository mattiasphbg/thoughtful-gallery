//layout.tsx
import Header from './headfoot/Header'
// import '../styles/globals.css';
import { ThemeProvider } from '../components/ui/theme-provider'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      {children}
    </ThemeProvider>
  )
}
