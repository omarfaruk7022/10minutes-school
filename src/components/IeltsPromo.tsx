import { FC } from "react";
import { FaFilePdf } from "react-icons/fa";
import img from "../../public/images/ms_onset.jpg";

const IeltsPromo: FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 via-black to-purple-900 text-white rounded-xl p-6  mx-auto sm:mt-10 sm:px-8 flex justify-between items-center gap-10">
      <div>
        <div className="flex items-center mb-4">
          <FaFilePdf className="text-orange-400 text-3xl mr-3" />
          <h2 className="text-2xl font-bold">Free PDF</h2>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold">
          IELTS Confirm 7+ Score (Guideline)
        </h3>

        <p className="mt-2 text-sm sm:text-base leading-relaxed">
          IELTS ভালো score করার সেরা Strategies আমাদের সেবাদের গাইডলাইননে ।
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-5 rounded-lg mt-4 text-sm sm:text-base transition">
          ফ্রি PDF Download করুন
        </button>
      </div>

      <div className="mt-6">
        <img
          src={img.src}
          alt="IELTS Score Achievers"
          className="rounded-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default IeltsPromo;
