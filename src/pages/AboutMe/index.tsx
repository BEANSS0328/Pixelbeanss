import { ScrollPanel } from 'primereact/scrollpanel';
import React, { ReactElement, ReactFragment } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';

interface AboutMeProps {}
interface AboutMeState {}

export class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
  images: { src: string; alt?: string }[] = [
    {
      src: 'https://cdn.discordapp.com/attachments/1034999594012127342/1115499987548254288/PXL_20230506_2002320872.MP.jpg',
      alt: '',
    },
    {
      src: 'https://uploads-ssl.webflow.com/61b26b95323f091932df9027/62e6da9e2f9d22daf1065d6f_JRWI14-0996-min.jpg',
      alt: '',
    },
    {
      src: 'https://uploads-ssl.webflow.com/61b26b95323f091932df9027/62e6db0e5d99644fb0f03bc4_JRWI14-0223-min.jpg?width=1408&height=940',
    },
    {
      src: 'https://media.discordapp.net/attachments/240681609504882689/1140466354877640714/Patchwork-399.png?width=719&height=480',
      alt: '',
    },
  ];

  itemTemplate = (item: any) => {
    return (
      <div
        style={{
          width: '100%',
          maxHeight: '600px',
          clipPath: 'polygon(0% 0, 92% 0%, 100% 100%, 0 100%)',
          overflow: 'hidden',
        }}
      >
        <img
          src={item.src}
          alt={item.alt}
          style={{
            width: '100%',
          }}
        />
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="grid grid-nogutter surface-section text-800">
          <div className="col-12 md:col-6 overflow-hidden">
            <Galleria
              showThumbnails={false}
              value={this.images}
              item={this.itemTemplate}
              autoPlay
              circular
              transitionInterval={4000}
              showIndicators
              indicatorsPosition="top"
              changeItemOnIndicatorHover
            />
          </div>
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span className="block text-6xl font-bold mb-1">I Am A...</span>
              <ScrollPanel
                style={{
                  maxHeight: '640px',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <ul>
                  <li>
                    Undergraduate Student at NC State University
                  </li>
                  <li>
                    Respected event organizer for tournaments in Raleigh, NC
                  </li>
                  <li>
                    Treasurer of the Smash Ultimate Club @ NC State, with 800 members and counting
                  </li>
                </ul>
                <p>
                  
                </p>
                <p>
                  
                </p>
              </ScrollPanel>
            </section>
          </div>
        </div>
      </>
    );
  }
}
