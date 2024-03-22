interface InfoCardProps {
  title: string;
  color?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  color,
}) => {
  return (
    <div className="flex rounded-full shadow-md overflow-hidden w-full p-4 mt-8 mb-4" style={{ background: `linear-gradient(to bottom, #323232, #0D0D0D)` }}>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: color }}></div>
        <h5 className="text-xl text-white text-center">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default InfoCard;