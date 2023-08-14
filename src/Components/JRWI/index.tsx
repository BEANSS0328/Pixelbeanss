import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface IProps {}
interface IState {}

export class JRWI extends React.Component<
  IProps,
  IState
> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Just Roll With It! Logo
            </span>
            <div className="text-6l text-primary font-bold mb-3">
              Shadow-box for Just Roll With It! 2022
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                Just Roll With It was the Southeast's largest grassroots 
                Smash series, Located in Raleigh, NC!
              </p>
              <p>
                As a vendor for this event, I created the JRWI logo as
                a piece of perler-art, in a shadow-box. The shadow-box included
                other pieces such as Sonic and Shadow, because the series was
                themed around Sonic Adventure 2. At the event, this piece was
                auctioned off to JRWI participants who spent any amount at 
                my table!
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://www.start.gg/tournament/just-roll-with-it-2022/details"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="More About JRWI" className="mr-3 p-button-raised" />
            </Link>
          </section>
        </div>
        <div
          className="col-12 md:col-6 overflow-hidden"
          style={{
            maxHeight: '640px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/240681609504882689/1140468566467031170/IMG_0275.jpg"
            className="md:ml-auto block md:h-full"
            style={{
              maxWidth: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}
