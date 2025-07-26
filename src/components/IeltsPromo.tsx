import { FC } from "react";
import { FaFilePdf } from "react-icons/fa";
import img from "../../public/images/ms_onset.jpg";

interface GroupJoinEngagementItem {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface GroupJoinEngagementData {
  type: "group_join_engagement";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: GroupJoinEngagementItem[];
}

const IeltsPromo: FC<{ group_join_engagement: GroupJoinEngagementData }> = ({
  group_join_engagement,
}) => {
  return (
    <>
      {group_join_engagement.values.map((item) => (
        <section
          key={item.id}
          className="text-white rounded-xl p-10 mx-auto sm:mt-10 sm:px-8 flex justify-between items-center gap-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.background.image})`,
          }}
        >
          <div>
            <div className="flex items-center mb-4">
              <FaFilePdf className="text-orange-400 text-3xl mr-3" />
              <h2 className="text-2xl font-bold">Free PDF</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold">{item.title}</h3>

            <p className="mt-2 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

            <a
              href={item.cta.clicked_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-5 rounded-lg mt-4 text-sm sm:text-base transition"
            >
              {item.cta.text}
            </a>
          </div>

          <div className="mt-6">
            <img
              src={item.thumbnail}
              alt={item.title}
              className=" w-full max-w-[350px] object-cover"
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default IeltsPromo;
