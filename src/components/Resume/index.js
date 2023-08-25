import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        My skills
      </div>
      <div className="grid grid-cols-3 gap-7 mt-7">
        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">Frontend</div>
          <div className="ml-8 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={80} />
            <BarGraph name={"Vue"} percent={85} />
            <BarGraph name={"Vuex"} percent={85} />
            <BarGraph name={"React"} percent={65} />
            <BarGraph name={"TypeScript"} percent={65} />
            <BarGraph name={"Mocha/Chai"} percent={70} />
            <BarGraph name={"Cypress"} percent={70} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"Twig/Blade"} percent={80} />
            <BarGraph name={"Bootstrap"} percent={80} />
            <BarGraph name={"Less/Sass"} percent={80} />
            <BarGraph name={"Jquery"} percent={90} />
          </div>
        </div>
        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">Backend</div>
          <div className="ml-8 flex flex-col gap-8 mt-6">
            <BarGraph name={"PHP"} percent={85} />
            <BarGraph name={"Symfony"} percent={75} />
            <BarGraph name={"Laravel"} percent={65} />
            <BarGraph name={"SQL"} percent={70} />
            <BarGraph name={"DynamoDB"} percent={55} />
            <BarGraph name={"MongoDB"} percent={55} />
            <BarGraph name={"Postgres"} percent={60} />
            <BarGraph name={"Doctrine"} percent={60} />
            <BarGraph name={"Eloquent"} percent={60} />
            <BarGraph name={"PHPUnit"} percent={60} />
          </div>
        </div>
        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">Tools/Technologies</div>
          <div className="ml-8 flex flex-col gap-8 mt-6">
            <BarGraph name={"Apache"} percent={70} />
            <BarGraph name={"Nginx"} percent={60} />
            <BarGraph name={"Git"} percent={85} />
            <BarGraph name={"MacOS/Linux"} percent={70} />
            <BarGraph name={"Docker"} percent={65} />
            <BarGraph name={"Postman"} percent={70} />
            <BarGraph name={"Jira/Agile"} percent={80} />
            <BarGraph name={"SQL"} percent={70} />
            <BarGraph name={"REST"} percent={70} />
            <BarGraph name={"SOAP"} percent={70} />
          </div>

          <a
            href={require("../../assets/files/Serhii_Vodolazhskyi_Curriculum_Vitae.pdf")}
            download={"Serhii_Vodolazhskyi_CV"}
            className="inline-flex
            items-center
            px-6 py-2 mt-12 mx-auto
            w-fit
            font-large border rounded-lg
            focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600
            hover:text-white
            hover:bg-gray-700
            focus:ring-gray-700"
          >
            Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
