import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {

  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 mt-10 min-h-screen overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contacts:
        <div className="text-white flex flex-row gap-2 w-fit mx-auto pt-4 contacts-phone">
          <a href="tel:+19177763757"><PhoneIphoneIcon fontSize="medium"/> +1917 776 37 57</a>
        </div>
      </div>
      <div className="flex flex-row  ">

        <div className="flex-auto w-80  flex flex-col justify-center text-center items-center  gap-1">
          <div data-aos={"slide-up"} className="text-center">
            <div className="text-center mt-2 text-3xl font-bold">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                  onClick={() =>
                      window.open("tel:+19177763757", "_blank")
                  }
              >
                <PhoneIphoneIcon className="cursor-pointer hover:scale-105" />
              </div>

              <div
                onClick={() =>
                  window.open("https://github.com/vodolserge", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/serhii-vodolazhskyi/",
                    "_blank"
                  )
                }
              >
                {" "}
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://t.me/Vodol_39",
                    "_blank"
                  )
                }
              >
                <TelegramIcon className="cursor-pointer hover:scale-105" />
              </div>{" "}
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500 ">
              <span className=" pl-1 ">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2023 Serhii Vodolazhskyi</span>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
