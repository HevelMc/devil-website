import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch {
      setError("Impossible de se connecter");
      setLoading(false);
    }
  }

  return (
    <div className="font-sans">
      <div className="relative flex flex-col sm:justify-center items-center " style={{ minHeight: "80vh" }}>
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
            <label className="block text-lg text-gray-700 dark:text-gray-200 text-center font-semibold">Connexion</label>
            {error && <label className="block text-md text-red-600 dark:text-red-400 text-center font-semibold">{error}</label>}
            <form onSubmit={handleSubmit} className="mt-10">
              <AuthField type="email" placeholder="Email" required reference={emailRef} />
              <AuthField type="password" placeholder="Mot de passe" required reference={passwordRef} />

              <div className="mt-7">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Se connecter
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 dark:border-gray-600 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-700 dark:text-gray-200 w-full">Se connecter avec</label>
                <hr className="border-gray-300 dark:border-gray-600 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-400 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Twitter
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="w-full text-sm text-gray-600 dark:text-gray-200">Pas encore de compte ?</label>
                  <a
                    href="/sign-up"
                    className="w-full text-blue-500 dark:text-blue-400 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    S'inscrire
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <div className="flex justify-center items-center">
                  <label className="w-full text-sm text-gray-600 dark:text-gray-200">Mot de passe oublié ?</label>
                  <a
                    href="/fogot-password"
                    className="w-full text-blue-500 dark:text-blue-400 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Le changer
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthField({ type, placeholder, required, reference }) {
  return (
    <div className="mt-7">
      <input
        type={type}
        placeholder={"   " + placeholder}
        required={required}
        ref={reference}
        className="focus:outline-none mt-1 block w-full border-none bg-gray-100 dark:bg-gray-700 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
      />
    </div>
  );
}
