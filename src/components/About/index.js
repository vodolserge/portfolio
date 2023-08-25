import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  const getDate = () => {
    var dob = new Date("12/31/1983");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Serhii Vodolazhskyi,</span> a Web
            Developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I am {getDate()} years old. I am from Ukraine.
            My career in web application development started 6.5 years ago.
            During this time, I participated in many projects that used different development
            technologies - frameworks, databases, deployment.

            I have experience in both Front-end and Back-end development, as well as expertise in various
            programming languages and technologies such as JavaScript, TypeScript and PHP.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for job opportunities and it would be really great to have the opportunity
            to work in the American market and gain invaluable experience.
          </p>
        </div>

        <div
          className="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/Serhii_Vodolazhskyi_Curriculum_Vitae.pdf")}
              download={"Serhii_Vodolazhskyi_CV.pdf"}
            >
              Resume
              <DownloadIcon />
            </a>
          </button>

          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
                href={require("../../assets/files/Recomendation letter.pdf")}
                download={"Serhii_Vodolazhskyi_Recomendation_Letter.pdf"}
            >
              Recomendation letter
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
