import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface IProps {}
interface IState {}

export class Perler extends React.Component<
  IProps,
  IState
> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              And Many More!
            </span>
            <div className="text-6l text-primary font-bold mb-3">
              Various other pieces, small and large
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                In addition to the larger projects I often take on, I also create 
                many pieces of different sizes and styles! I have created perler
                art for fans of many different franchises, such as:
              </p>
              <ul>
                <li>Pokemon</li>
                <li>League of Legends</li>
                <li>Street Fighter</li>
                <li>Star Fox</li>
                <li>League of Legends</li>
                <li>...and more!</li>
              </ul>
              <p>
                If you're interested in more of the pieces I've made, or want to
                reach out and commission some perler art, reach out to me on Twitter!
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://twitter.com/Pixelbeanss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="Twitter"
                className="mr-3 p-button-raised"
              />
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
            src="https://cdn.discordapp.com/attachments/240681609504882689/1140473473077084262/E7HGyyRXMAEyYOF.jpg"
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
