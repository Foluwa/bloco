import Image from 'next/image'

interface CardProps {
    title: string;
    image: string;
}
{/* <div className="flex rounded-full shadow-md overflow-hidden bg-white w-full p-4 border border-1 border-gray-300">
<div className="flex items-center">
    <Image
        className="w-1/3  rounded-l-lg"
        src={image}
        width={20}
        height={20}
        alt={title}
    />
    <h5 className="text-xl text-black text-center">
        {title}
    </h5>
</div>
</div> */}

const ShowCard: React.FC<CardProps> = ({ title, image }) => {
    return (


        <div className="flex rounded-full shadow-md overflow-hidden bg-white w-full p-2 border border-1 border-gray-300">
            {/* Image with left alignment */}
            <Image
                className="w-20 rounded-l-lg"
                src={image}
                width={20}
                height={20}
                alt={title}
            />
            {/* Title with center alignment */}
            <h5 className="text-2xl text-black text-center flex-grow p-6">
                {title}
            </h5>
        </div>

    );
};

export default ShowCard;
