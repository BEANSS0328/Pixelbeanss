import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Connections } from '../../Components/Connections';
import { Patchwork } from '../../Components/Patchwork';
import { JRWI } from '../../Components/JRWI';
import { Sonic } from '../../Components/Sonic';
import { Perler } from '../../Components/Perler';

interface HomeProps {}
interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <>
        <div className="grid grid-nogutter surface-section text-800">
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span className="block text-6xl font-bold mb-1">
                Kayla Hieser
              </span>
              <div className="text-6l text-primary font-bold mb-3">
                Owner of @Pixelbeanss and Student at NC State University
              </div>
              <ScrollPanel
                style={{
                  maxHeight: '275px',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <p>
                  
                </p>
                <p>
                  
                </p>
              </ScrollPanel>
              {/* <br />
              <Link
                to="https://docs.google.com/document/d/1wr9gfrOS60MqBxgUF92zscRS58QfeDLa/edit?usp=sharing&ouid=117947948488491982527&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label="View My Resume"
                  className="mr-3 p-button-raised"
                />
              </Link> */}
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
              src="https://cdn.discordapp.com/attachments/240681609504882689/1140467842509176832/PXL_20230506_2004406277.jpg"
              className="md:ml-auto block md:h-full"
              style={{
                clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)',
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="surface-0 text-center">
          <div className="mb-3 font-bold text-3xl">
            <span className="text-900">My </span>
            <span className="text-blue-600">Projects</span>
          </div>
          <div className="text-700 mb-6">
            These are the projects I'm most proud of, and most passionate about!
          </div>
        </div>
        <Patchwork />
        <br />
        <br />
        <JRWI />
        <br />
        <br />
        <Sonic />
        <br />
        <br />
        <Perler />
        <br />
        <br />
        <Connections />
      </>
    );
  }
}
