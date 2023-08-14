import { Route, Routes, useNavigate } from 'react-router-dom';
import { MegaMenu } from 'primereact/megamenu';
import { Card } from 'primereact/card';
import { Home } from '../pages/Home';
import './AppWrapper.css';
import { AboutMe } from '../pages/AboutMe';
import { Patchwork } from '../Components/Patchwork';
import { Connections } from '../Components/Connections';

/// AppWrapper needs to be a functional component, to get access to useNavigate hook
export function AppWrapper() {
  const navigate = useNavigate();

  const menuItems = () => {
    const items = [
      // New page components need an entry in the top bar
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => navigate('/Pixelbeanss/'),
      },
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-question',
        command: () => navigate('/Pixelbeanss/about'),
      },
      {
        label: 'Connections',
        icon: 'pi pi-fw pi-users',
        command: () => navigate('/Pixelbeanss/Connections'),
      },
    ];

    return items;
  };

  return (
    <div>
      <MegaMenu model={menuItems()} />
      <Card>
        <Routes>
          {/* New page components need a Route listing */}
          <Route path="/Pixelbeanss/" element={<Home />} />
          <Route path="/Pixelbeanss/about" element={<AboutMe />} />
          <Route path="/Pixelbeanss/Projects/OpenSource/HDR" element={<Patchwork />} />
          <Route path="/Pixelbeanss/Connections" element={<Connections />} />
        </Routes>
      </Card>
    </div>
  );
}
