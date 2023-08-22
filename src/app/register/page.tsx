import Header from "@/components/Header";
import RegisterForm from "./register-form";

export default async function RegisterPage() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  // });
  return (
    <>
      <Header />
      <section className="bg-slate-50 min-h-screen grid place-items-center">
        <div className="w-full">
          <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 mb-4">
            Registro de Usuario!
          </h1>
          <h2 className="text-lg text-center mb-4 text-ct-dark-200">
            Iniciar!
          </h2>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
