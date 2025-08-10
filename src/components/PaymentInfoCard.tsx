import { LuClipboard } from "react-icons/lu";
import { useState, useEffect } from "react";

interface Props {
  type: string;
  bank: string;
  logo: string;
  phone?: string;
  indentify?: string;
  email?: string;
  nameZelle?: string;
  nameNequi?: string;
  nameZinli?: string;
  totalUsd: number;
  totalBs: number;
}

const PaymentInfoCard = ({
  bank,
  logo,
  phone,
  indentify,
  email,
  nameZelle,
  nameNequi,
  nameZinli,
  totalUsd,
  totalBs,
  type,
}: Props) => {

  const [totalCop, setTotalCop] = useState(0);

  function roundUpToNearest500(value: number) {
    return Math.ceil(value / 500) * 500;
  }

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        const rate = data.rates.COP;
        setTotalCop(roundUpToNearest500(totalUsd * rate));
      } catch (error) {
        console.error("Error obteniendo la tasa de cambio", error);
      }
    }

    fetchRate();
  }, [totalUsd]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copiado: ${text}`);
  };

  return (
    <div className="bg-black text-white rounded-2xl p-6 max-w-lg w-[350px] text-center shadow-lg">
      <h2 className="text-lg font-semibold">Modo de Pago</h2>
      <p className="text-sm mb-2">{bank}</p>

      <div className="flex justify-center items-center my-2">
        <img
          src={logo}
          alt={bank}
          className="w-12 h-12 rounded-full"
          loading="lazy"
        />
      </div>

      {type === "Banco Mercantil" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Banco Mercantil:</span> 0105
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard("0105")}
            />
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold">Teléfono:</span> {phone}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(phone ?? "")}
            />
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold">Cédula de Identidad:</span>{" "}
            {indentify}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(indentify ?? "")}
            />
          </p>
        </div>
      ) : null}

      {type === "binance" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Email:</span> {email}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(email ?? "")}
            />
          </p>
        </div>
      ) : null}

      {type === "Zinli" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Email:</span> {email}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(email ?? "")}
            />
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold">Nombre:</span> {nameZinli}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(nameZinli ?? "")}
            />
          </p>
        </div>
      ) : null}

      {type === "zelle" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Telefono:</span> {email}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(email ?? "")}
            />
          </p>

          <p className="flex gap-2 items-center">
            <span className="font-bold">Nombre:</span> {nameZelle}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(nameZelle ?? "")}
            />
          </p>
        </div>
      ) : null}

      {type === "nequi" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Telefono:</span> {phone}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(phone ?? "")}
            />
          </p>

          <p className="flex gap-2 items-center">
            <span className="font-bold">Nombre:</span> {nameNequi}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(nameNequi ?? "")}
            />
          </p>
        </div>
      ) : null}

      <h3 className="mt-4 text-lg font-bold">Total a Pagar:</h3>

      {type === "Banco Mercantil" ? (
        <p className="text-2xl font-bold">
          {totalBs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Bs.
        </p>
      ) : null}

      {type === "nequi" ? (
        <p className="text-2xl font-bold">
          ${totalCop.toLocaleString("es-CO")} COP
        </p>
      ) : null}

      {type === "zelle" || type === "binance" || type === "Zinli" ? (
        <p className="text-2xl font-bold">{totalUsd} $ USD</p>
      ) : null}
    </div>
  );
};

export default PaymentInfoCard;
