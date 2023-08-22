"use client";

import Spinner from "./Spinner";
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/api-requests";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const store = useStore();
  const user = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
    } catch (error) {
    } finally {
      store.reset();
      router.push("/login");
    }
  };

  return (
    <>
      <header className="bg-white h-20">
        <nav className="h-full flex justify-between container items-center">
          <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
              />
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="text-ct-dark-600 font-semibold underline decoration-pink-500 hover:border-solid border-indigo-600">
                Inicio
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link href="/register" className="text-ct-dark-600 font-semibold underline decoration-pink-500">
                    Registro
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-ct-dark-600 font-semibold underline decoration-pink-500">
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/profile" className="text-ct-dark-600 underline decoration-pink-500">
                    Perfil
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Salir
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div className="pt-4 pl-2  fixed">
        {store.requestLoading && <Spinner color="text-ct-yellow-600" />}
      </div>
    </>
  );
};

export default Header;
