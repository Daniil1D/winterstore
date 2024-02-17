import React from 'react';

import Slider from './Slider';
import Brend from './brend';
import Action from './action';
import New from './new';
import Sale from './sale';
import Blog from './blog';
import Club from './club';
import Modal from './Modal';


function Index() {
  const [modalActive, setModalActive] = React.useState(true);
  return (
    <>
        <Slider/>
        <Brend/>
        <Action/>
        <New/>
        <Sale/>
        <Blog/>
        <Club/>
        <Modal active={modalActive} setActive={setModalActive}/>
    </>
  );
}

export default Index;
