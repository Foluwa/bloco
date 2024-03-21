interface Card {
    image: string;
  }
  
  const TrackCard: React.FC<Card> = ({ image }) => {
    return (
      <div
        className="max-w-sm w-full lg:max-w-full lg:flex mt-8"
        style={{ backgroundColor: '#FF4000' }}
      >
        <div
          className="h-12 lg:h-auto lg:w-12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${image})`, }}
          title=""
        />
        <div
          className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              DJ DAY DAY
            </p>
            <div className="text-gray-900 font-bold mb-2">
              @DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment, Afro Beats + UK Rap)
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">19 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrackCard;
  