import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import tampilan_homestay from './tampilan_homestay';


const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/tentangSaya" component={TentangSaya} />
        <Route path="/tampilan_homestay" component={tampilan_homestay} />
        <Route path="/kontak" component={Kontak} />
    </Switch>
)

export default Utama;