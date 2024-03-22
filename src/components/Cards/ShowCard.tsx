import Image from 'next/image'

interface CardProps {
    title: string;
    image: string;
}

const ShowCard: React.FC<CardProps> = ({ title, image }) => {
    return (
        <div className="flex rounded-full shadow-md overflow-hidden bg-white w-full p-2 mt-4 border border-1 border-gray-300">
            <Image
                className="w-20 rounded-l-lg"
                src={image}
                width={20}
                height={20}
                alt={title}
            />
            <h5 className="text-black text-center sm:text-lg md:text-xl flex-grow p-3">
                {title}
            </h5>
        </div>

    );
};

export default ShowCard;
