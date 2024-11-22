import Dashboard from "@/app/pages/dashboard/page";
import Header from "@/app/components/Header/Header";
import SideMenu from "@/app/components/SideMenu/SideMenu";

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>This is a Main element</h1>
        <Header/>
        <SideMenu/>
        <Dashboard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>This is a Footer element</h1>
      </footer>
    </div>
    </>
  );
}
