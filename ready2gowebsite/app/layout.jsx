import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ready 2 Go Transportation',
  description: "Safe, Reliable Transportation for Cleveland's Residents",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
