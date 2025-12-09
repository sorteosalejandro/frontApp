import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white text-center p-4">
      <p className="text-sm">© Rifas Alejandro Medina</p>

      <div className="flex justify-center gap-4 my-3">
        <a
          href="https://www.facebook.com/share/15xwdbskSk/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white rounded-full p-3"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/alejandromedina123_/profilecard/?igsh=ZzVkYWt3cTJpYmow"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white rounded-full p-3"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@alejandromedina123_?_r=1&_t=ZM-925aHZpWA3P"
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
