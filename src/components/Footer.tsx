import Image from "next/image";
import bloco from '../../public/images/bloco_logo.png';
import blocoshape from '../../public/images/bloco_shape.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-">

        <div
          className={`flex items-center rounded-full px-4 py-3 hover:bg-gray-100 bg-[#565657] min-content`}
        >
          <div className="relative rounded-full bg-black w-8 h-8 flex items-center justify-center">
            <Image src={blocoshape.src} width={13} height={15} alt="" />
          </div>
          <span className="block text-gray-500 text-white dark:text-gray-400 ml-2 text-xs">
            CREATE A BLOCO.ME
          </span>
        </div>

        <div className="flex items-center justify-center mt-8">
          <span className="font-light block text-white text-center dark:text-gray-400 text-xs">
            POWERED BY
          </span>
          <Image src={bloco.src} width={40} height={20} className="ml-2" alt="" />
        </div>
      </div>
    </footer>

  );
};

export default Footer;