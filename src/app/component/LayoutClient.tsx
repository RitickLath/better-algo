import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="overflow-hidden py-8 px-4">{children}</main>
      </div>
    </>
  );
}
