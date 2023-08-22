import Header from "@/components/Header";
import LoginForm from "./login-form";

export default async function LoginPage() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000000);
  // });
  return (
    <>
      <Header />
      <section className="bg-slate-50 min-h-screen grid place-items-center">
        <div className="w-full">
          <h1 className="text-4xl lg:text-6xl text-center font-[600] text-ct-black-600 mb-4">
            LOGIN
          </h1>
          <h2 className="text-lg text-center mb-4 text-slate-500">
            Iniciar sesión
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
