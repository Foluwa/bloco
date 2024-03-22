import React from 'react';
import Image from 'next/image';
import event from '../../../public/images/event.png';

const EventCard: React.FC = () => {
  return (
    <div
      className="flex flex-col gap-1 rounded-lg p-5 text-gray h-auto overflow-hidden transition duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100"
    >
      <div className="group relative m-0 flex h-96 w-full rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 ">
          <Image
            src={event.src}
            alt=""
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            layout="fill"
          />
        </div>
        <div
          className="p-3 rounded-xl opacity-90 absolute bottom-0 z-20 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
          style={{ backgroundColor: '#EDEBEA', width: '100%' }}
        >
          <h2 className="text-lg font-bold">30 Years Of Day Day + Donae'O Live! Friday 29th March…</h2>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span className="text-black font-bold">XOYO Birmingham</span>
            <span className="text-black">FROM £25.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;