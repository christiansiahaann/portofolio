import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import Week10 from './Week10';
import Week10_1 from './Week10_1';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/tentangSaya" component={TentangSaya} />
        <Route path="/Week10" component={Week10} />
        <Route path="/Week10_1" component={Week10_1} />
        <Route path="/kontak" component={Kontak} />
    </Switch>
)

export default Utama;