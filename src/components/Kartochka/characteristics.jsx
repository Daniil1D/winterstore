import FotoDoski from '../../assets/img/FotoDoski.png';


import '../../scss/components/characteristics.scss';

function Characteristics(){
    return(
        <>
        <div className='Characteristics'>
            <div className="container">
                <div className="Characteristics__content">
                    <div className="Characteristics__content-block1">
                        <h1 className="Characteristics__title">Характеристики</h1>
                        <p className="Characteristics__text">The Old Skool has never been lacking in attitude. It brought the dawn of the classic Vans side stripe that has developed into a status symbol of tradition and skate stature. Aside from all that personality, they have lasted as long as they have because of their ability to perform on a skateboard, and to last, and last. Though they now share the ranks with many new Vans styles with their own innovations, the Old Skools aren't going anywhere.</p>
                        <div className="Characteristics__block-img">
                            <img className="Characteristics__img" src={FotoDoski} alt="FotoDoski" />
                            <img className="Characteristics__img" src={FotoDoski} alt="FotoDoski" />
                        </div>
                        <div className="Characteristics__Characteristics">
                            <div className="Characteristics__block1">
                                <h3 className="Characteristics__block1-title">Вес:</h3>
                                <p className="Characteristics__block1-text">540 грамм</p>
                            </div>
                            <div className="Characteristics__block2">
                                <h3 className="Characteristics__block1-title">Стиль катания:</h3>
                                <p className="Characteristics__block1-text">Touring</p>
                            </div>
                            <div className="Characteristics__block3">
                                <h3 className="Characteristics__block1-title">Stiffness:</h3>
                                <p className="Characteristics__block1-text">8</p>
                            </div>
                            <div className="Characteristics__block4">
                                <h3 className="Characteristics__block1-title">Base:</h3>
                                <p className="Characteristics__block1-text">540 грамм</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Characteristics;