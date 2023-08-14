import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface IProps {}
interface IState {}

export class Patchwork extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div
          className="col-12 md:col-6 overflow-hidden"
          style={{
            maxHeight: '640px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/240681609504882689/1140472353982263296/Patchwork-0022.jpg"
            className="md:ml-auto block md:h-full"
            style={{
              maxWidth: '100%',
            }}
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">Patchwork Logo</span>
            <div className="text-6l text-primary font-bold mb-3">
              Shadow-box for Patchwork
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                Patchwork was a National-level Smash Ultimate tournament and 
                the spiritual successor to the Southeast's largest grassroots 
                Smash event, Just Roll With It!
              </p>
              <p>
                As a vendor for this event, I created the Patchwork logo as
                a piece of perler-art, in a shadow-box. The shadow-box was
                auctioned off to Patchwork participants who spent any amount
                at my table!
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://www.start.gg/tournament/patchwork/details"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="More About Patchwork" className="mr-3 p-button-raised" />
            </Link>
            {/* <Link
              to="https://twitter.com/HewDrawRemix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="See More On Twitter"
                className="p-button-outlined"
              />
            </Link> */}
          </section>
        </div>
      </div>
    );
  }
}
