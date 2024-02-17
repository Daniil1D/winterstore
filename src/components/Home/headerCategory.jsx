import headerCategoryLogo from '../../assets/img/headerCategoryLogo.png';



import '../../scss/components/headerCategory.scss';


function headerCategory() {
    return (
        <div className="headerCategory">
            <div className="container"> 
                <div className="headerCategory__content">
                    <ul className="headerCategory__nav">
                        <li className="headerCategory__nav-list">Новинки</li>
                        <li className="headerCategory__nav-list">Сноуборд</li>
                        <li className="headerCategory__nav-list">Лыжи</li>
                        <li className="headerCategory__nav-list">Скейт</li>
                        <li className="headerCategory__nav-list">Лонгборд</li>
                        <li className="headerCategory__nav-list">Вейкборд</li>
                        <li className="headerCategory__nav-list">Серф</li>
                        <li className="headerCategory__nav-list">Sup</li>
                        <li className="headerCategory__nav-list">Одежда</li>
                        <li className="headerCategory__nav-list">Обувь</li>
                        <li className="headerCategory__nav-list">Аксессуары</li>
                        <li className="headerCategory__nav-list">Бренды</li>
                        <li className="headerCategory__nav-list-active">Распродажа</li>
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default headerCategory;