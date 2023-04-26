import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar } from "@/components/Navigaton";
import { RegisterModal, LoginModal } from "@/components/Modals";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modals/RentModal";

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
