import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface IProps {}
interface IState {}

export class Sonic extends React.Component<
  IProps,
  IState
> {
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
            src="https://cdn.discordapp.com/attachments/240681609504882689/1140472993210957825/PXL_20230814_022353314.jpg"
            className="md:ml-auto block md:h-full"
            style={{
              maxWidth: '100%',
            }}
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">Sonic The Hedgehog Logo</span>
            <div className="text-6l text-primary font-bold mb-3">
              A personal piece
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                This shadow-box was a personal piece I created as a gift. It
                contains an accurate pixilated version of the Genesis Sonic
                the Hedgehog logo, created in perler beads and in a shadow-box!
              </p>
            </ScrollPanel>
          </section>
        </div>
      </div>
    );
  }
}
