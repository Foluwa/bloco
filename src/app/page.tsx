import Image from "next/image";
import logo from '../../public/images/logo.png';
import profile from '../../public/images/profile.png';
import card1 from '../../public/images/card_1.png';
import card2 from '../../public/images/card_2.png';
import card3 from '../../public/images/card_3.png';
import InfoCard from '../components/Cards/InfoCard';
import ShowCard from '../components/Cards/ShowCard';
import EventCard from '../components/Cards/EventCard';
import TrackCard from '../components/Cards/TrackCard';
import { Facebook, XTwitter } from '../../src/components/SocialMedia/index';

export default function Home() {
  const cards = [
    {
      id: '1',
      title: 'BBC 1XTRA Radio Shows',
      image: card1,
    },
    {
      id: '2',
      title: 'DJ DAY DAY Youtube Channel',
      image: card2,
    },
    {
      id: '3',
      title: 'DJ DAY DAY Mechandise',
      image: card3,
    },

  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 mt-8">
          <Image src={logo} alt="DJ DAYDAY logo" className="w-40 h-20 mx-auto" />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <Image src={profile} alt="DJ DAYDAY"  className="mx-auto" />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <Facebook url="https://www.facebook.com/" />
          <XTwitter url="https://www.x.com/" />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <InfoCard title="Award winning DJ & Radio Presenter" color="#FF4000" />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          {cards.map((card) => (
            <ShowCard key={card.id} title={card.title} image={card.image.src} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <InfoCard title="NEW MIX LIVE - TAKE A LISTEN" color="#FF8600" />
        </div>


        <TrackCard image={card1.src} />

        <div className="grid grid-cols-1 gap-4 mt-8">
          <InfoCard title="LATEST EVENT" color="#FFFFFF" />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <EventCard name='d' />

        </div>
      </div>
    </main>
  );
}
