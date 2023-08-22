import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-slate-200 min-h-screen pt-20 ">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center bg-[url('/truck.jpg')] bg-cover bg-center">
          <p className="text-3xl font-semibold text-white outline-black-500 p-3 border-solid border-2 border-white-600 underline backdrop-contrast-125 bg-black/40">
            BIENVENIDO AL COTIZADOR
          </p>
        </div>
      </section>
    </>
  );
}
