interface InfoCardProps {
  title: string;
  color?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  color,
}) => {
  return (
    <div className="flex rounded-full shadow-md overflow-hidden bg-black w-full p-4 mt-8">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: color }}></div>
        <h5 className="text-xl text-white">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default InfoCard;