import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
}