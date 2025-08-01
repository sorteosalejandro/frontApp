import { authentication } from "@/services";
import { fetchAuth } from "@/utils/auth";
import { ResponseAuthType } from "@/utils/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuth(navigate);
  }, [navigate]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const responseAuth: ResponseAuthType = await authentication(token);
      localStorage.setItem("token", responseAuth.token);
      navigate("/admin/panel");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[#1b1b1b]">
      <form
        onSubmit={handleSubmit}
        className="w-[80%] md:w-[30%] flex flex-col items-center gap-4"
      >
        <img
          src="logo.png"
          alt="logo"
          className="w-24 h-24 mb-5"
          loading="lazy"
        />
        <h1 className="text-xl font-bold">Iniciar Sesion Admin</h1>
        <input
          type="text"
          placeholder="Ingrese el token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border text-black p-2 rounded-md text-center"
        />
        <button
          type="submit"
          className="bg-orange-500 w-full text-white px-4 py-2 rounded-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Admin;
