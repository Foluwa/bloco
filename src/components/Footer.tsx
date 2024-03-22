import Image from "next/image";
import bloco from '../../public/images/bloco_logo.png';
import blocoshape from '../../public/images/bloco_shape.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div
          className="flex items-center justify-center bg-gray rounded-full px-4 py-2 hover:bg-gray-100"
        >
          <Image src={blocoshape.src} width={20} height={20} className="mr-2" alt="" />
          <span className="block text-gray-500 text-white dark:text-gray-400">
            CREATE A BLOCO.ME
          </span>
        </div>

        {/* <span className="flex items-center justify-center bg-gray rounded-full bg-gray-100 text-gray-800 text-xsme-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          <Image src={blocoshape.src} width={20} height={20} className="mr-2" alt="" />
          <span className="block text-gray-500 text-white dark:text-gray-400">
            CREATE A BLOCO.ME
          </span>
        </span> */}

        <div className="flex items-center justify-center">
          <span className="block text-white text-center dark:text-gray-400">
            POWERED BY
          </span>
          <Image src={bloco.src} width={40} height={20} className="ml-2" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;