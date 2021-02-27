import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AuthField } from "./Login";

export default function FogotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMsg("Un email a été envoyé sur votre boîte mail pour changer le mot de passe. Revenez sur cette page lorsque cela sera fait.");
      setLoading(false);
    } catch {
      setError("Échec de la réinitialisation du mot de passe");
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
            <label className="block text-lg text-gray-700 dark:text-gray-200 text-center font-semibold">Changer le mot de passe</label>
            {error && <label className="block text-md text-red-600 dark:text-red-400 text-center font-semibold">{error}</label>}
            {msg && <label className="block text-md text-green-600 dark:text-green-400 text-center font-semibold">{msg}</label>}
            <form onSubmit={handleSubmit} className="mt-10">
              <AuthField type="email" placeholder="Email" required reference={emailRef} />

              <div className="mt-7">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Envoyer l'email
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 dark:border-gray-600 border-1 w-full rounded-md" />
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
                  <label className="w-full text-sm text-gray-600 dark:text-gray-200">Retour</label>
                  <a
                    href="/log-in"
                    className="w-full text-blue-500 dark:text-blue-400 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Se connecter
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
