import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

interface ConnectionsProps {}
interface ConnectionsState {}

export class Connections extends React.Component<
  ConnectionsProps,
  ConnectionsState
> {
  render() {
    return (
      <div className="surface-0 text-center">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">Where To </span>
          <span className="text-blue-600">Connect</span>
        </div>
        <div className="text-700 mb-6">
          Find me on social media, or by email to Perlerbeanss@gmail.com
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: '10px' }}
            >
              <Link
                to="https://twitter.com/Pixelbeanss?s=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-twitter text-4xl text-blue-500"></i>
              </Link>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Twitter</div>
            <span className="text-700 line-height-3"></span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: '10px' }}
            >
              <Link
                to="https://www.etsy.com/shop/PerlerBeanss?ref=profile_header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-shopping-bag text-4xl text-blue-500"></i>
              </Link>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Etsy</div>
            <span className="text-700 line-height-3"></span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: '10px' }}
            >
              <Link
                to="https://www.paypal.me/pixelbeanss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-paypal text-4xl text-blue-500"></i>
              </Link>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">PayPal</div>
            <span className="text-700 line-height-3"></span>
          </div>
        </div>
      </div>
    );
  }
}
