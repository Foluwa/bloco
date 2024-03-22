import Image from "next/image";
import { SocialIcon } from 'react-social-icons'

import Footer from '../components/footer';
import InfoCard from '../components/cards/infocard';
import ShowCard from '../components/cards/showcard';
import profile from '../../public/images/profile.png';
import mixtape from '../../public/images/mixtape.png';
import EventCard from '../components/cards/eventcards';
import TrackCard from '../components/cards/trackcard';
import YoutubeSlider from '../components/youtubeslider';

import logo from '../../public/images/logo.png';
import card1 from '../../public/images/card_1.png';
import card2 from '../../public/images/card_2.png';
import card3 from '../../public/images/card_3.png';

const Home: React.FC = () => {
  const socials = ["https://www.facebook.com", "https://www.x.com", "https://www.instagram.com",
    "https://www.youtube.com", "https://www.tiktok.com", "https://www.whatsapp.com", "https://www.snapchat.com"
  ];
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
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 tracking-widest">
        <div className="mx-auto py-8">
          <div className="grid grid-cols-1 gap-4">
            <Image src={logo} alt="DJ DAYDAY logo" className="w-40 h-20 mx-auto" />
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <Image src={profile} alt="DJ DAYDAY" className="mx-auto" />
            {/* <Image src={profile} alt="DJ DAYDAY" className="mx-auto h-auto max-w-lg rounded-lg" /> */}
          </div>
          <div className="mt-8 justify-items-center text-center">
            {socials.map((social) => (
              <SocialIcon key={social} bgColor="#3E3E3E" target="_blank" url={social} className="social-icon-p" />
            ))}
          </div>

          <InfoCard title="Award winning DJ & Radio Presenter" color="#FF4000" />

          <div className="grid grid-cols-1 gap-4 mt-8">
            {cards.map((card) => (
              <ShowCard key={card.id} title={card.title} image={card.image.src} />
            ))}
          </div>

          <InfoCard title="NEW MIX LIVE - TAKE A LISTEN" color="#FF8600" />

          <TrackCard image={mixtape.src} />

          <InfoCard title="YOUTUBE SHORTS" color="#FF0000" />

          <YoutubeSlider />

          <InfoCard title="LATEST EVENT" color="#FFFFFF" />

          <EventCard />

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
