import React from 'react';
import Image from 'next/image';
import event from '../../../public/images/event.png';

interface Person {
  name: string;
  // Add other properties as needed
}

const TeamMemberCard: React.FC<Person> = ({  }) => {
  return (
        <div
          className="group flex flex-col gap-1 rounded-lg p-5 text-gray h-auto overflow-hidden transition duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
          // tabIndex="1"
        >
          <div className="group relative m-0 flex h-96 w-96 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <Image
                src={event.src}
                alt="Team member"
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                layout="fill"
              />
            </div>
            <div
              className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
              style={{ backgroundColor: '#EDEBEA', width: '95%' }}
            >
              <h1 className="text-lg font-bold">30 Years Of Day Day + Donae'O Live! Friday 29th March…</h1>
              <h2 className="text-m font-light text-gray-200">XOYO Birmingham</h2> 
            </div>
          </div>
          <div
            className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
          >
            <p style={{ fontSize: '.9em' }} dangerouslySetInnerHTML={{ __html: 'This is all about John' }} /> {/* Consider using a safer alternative to dangerouslySetInnerHTML */}
          </div>
        </div>
  );
};

export default TeamMemberCard;