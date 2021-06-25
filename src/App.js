import React, { Component } from 'react';
import './App.css';
import Utama from './components/utama';
import { Link,useLocation} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Dropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

function App() {
  const [isShow, setShow] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const onClickBurgerButton = function() {
      setShow(!isShow)
  };

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Portofolio" scroll>
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentangSaya">Tentang Saya</Link>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  Karya 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/Week10">
                      Log Aktivitas Harian
                  </DropdownItem>
                  <DropdownItem href="/Week10_1">
                    Log Tugas Mahasiswa
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Header>
          <Drawer title="Portofolio">
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentangSaya">Tentang Saya</Link>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  Karya 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/Week10">
                      Log Aktivitas Harian
                  </DropdownItem>
                  <DropdownItem href="/Week10_1">
                    Log Tugas Mahasiswa
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
              <Utama />
          </Content>
        </Layout>
      </div>
    );
  }
 }
}

export default App;
