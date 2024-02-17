import React, { useState } from 'react';
import { Link } from "react-router-dom";

import KartochkaNew from '../../assets/img/KartochkaNew.png';
import Star from '../../assets/img/Star.svg';
import '../../scss/components/tovar.scss';
import '../../scss/components/new.scss';

function Tovar(){


    return(
        <div className="Tovar">
            <div className="container">
                   
                <div className="Tovar__content">
                    <div className="Tovar__Filter">
                        <div className="Tovar__Filter-block1">
                            <h2 className="Tovar__title">Категории товаров</h2>
                            <ul class="Tovar__list">
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                            </ul>
                        </div>
                       
                        <div className="Tovar__Filter-block2">
                            <h2 className="Tovar__title">Смотреть</h2>
                            <ul class="Tovar__list">
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="Tovar__Filter-block3">
                            <h2 className="Tovar__title">Бренд</h2>
                            <div className="Tovar__input-poisk">
                                <input type="text" className="Tovar__Poisk" placeholder='Поиск:'/>
                            </div>
                            <ul class="Tovar__list">
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="Tovar__Filter-block4">
                            <h2 className="Tovar__title">Размер</h2>
                            <ul class="Tovar__list">
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                                <li class="Tovar__list-li">
                                    <label class="Tovar__list-block">
                                        <input type="checkbox" class="Tovar__input"/>
                                        <span class="Tovar__custom">Сноуборды</span> 
                                        <i className='Tovar__number'>30</i>
                                    </label>
                                </li>
                            </ul>
                        </div>
                       
                        <div className="Tovar__Filter-block4">
                            <h2 className="Tovar__title">Цена, ₽</h2>
                            <div className='Tovar__Block-price'>
                                <div className='Tovar__Price'>
                                    <span className='Tovar__Price-number'>5000</span>
                                </div>
                                <div className='Tovar__linia'></div>
                                <div className='Tovar__Price'>
                                    <span className='Tovar__Price-number'>10000</span>
                                </div>
                                <div className='Tovar__Block-btn'>
                                    <a className='Tovar__btn' href="#">Ок</a>
                                </div>
                            </div>
                            <div className='Tovar__Linia-Price'>
                            </div>
                          
                        </div>
                    </div>
                    <div className="Tovar__Block-Kartochek">
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                        <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                       <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                       <Link to="/index3">
                        <div className="new__kartochka">
                            {/* <div className='new__kartochkaIMG'> */}
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            {/* </div> */}
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Tovar;