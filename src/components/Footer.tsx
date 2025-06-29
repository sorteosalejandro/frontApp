import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white text-center p-4">
      <p className="text-sm">© Rifas Alejandro Medina</p>

      <div className="flex justify-center gap-4 my-3">
        <a
          href="https://www.facebook.com/share/1CiBXgCh4w/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white rounded-full p-3"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/alej0_0_0_0/profilecard/?igsh=ZzVkYWt3cTJpYmow"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white rounded-full p-3"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@alej0_06?_t=ZM-8xb91wAXHB0&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full p-3"
        >
          <FaTiktok size={20} />
        </a>
      </div>

      <p className="text-sm">Gracias por Confiar en Nosotros.</p>
    </footer>
  );
};

export default Footer;
