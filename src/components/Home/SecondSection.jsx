import youtube from "../../assets/logos_youtube-icon.png";
import noteted from "../../assets/noto_sewing-needle.png";
import vscode from "../../assets/vscode-icons_file-type-ng-module-dart.png";
import money from "../../assets/noto_money-bag.png";
import { motion } from "framer-motion";

const Card = ({ image, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 mt-5 transition-transform transform bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105"
      initial={{ opacity: 0, y: 50 }} // Initial position and opacity
      whileInView={{ opacity: 1, y: 0 }} // Final position and opacity
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is visible
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="mb-3">
        <img src={image} alt={title} className="w-20 h-30" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </motion.div>
  );
};

const App = () => {
  const cardData = [
    {
      image: youtube,
      title: "Sew wedding dresses",
      description: "",
    },
    {
      image: noteted,
      title: "Learn how to sew a saree jacket",
      description: "",
    },
    {
      image: vscode,
      title: "Let's socialize knowledge, business, art and opinion",
      description: "",
    },
    {
      image: money,
      title: "Earn money",
      description: "Let's be successful in the field",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 mt-20 ">
      <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
