
import '../../scss/components/Modal.scss'

function index({active, setActive}) {
  return (
    <div className='Modal'>
        <div className='Modal__content'>
            <div className='Modal__Avtorization'>
                <h1 className='Modal__Avtorization-title'>Вход</h1>
                <div className='Modal__Avtorization-input'>
                    <input type="text" placeholder='Логин'/>
                </div>
                <div className='Modal__Avtorization-input'>
                    <input type="text" placeholder='Пароль'/>
                </div>
                <label class="Tovar__list-block">
                    <input type="checkbox" class="Tovar__input"/>
                    <span class="Tovar__custom">Запомнить меня</span>              
                </label>
                <button class="Tovar__btn">Войти</button>
            </div>
            <div className='Modal__Registration'>
                

                
            </div>
        </div>
    </div>
  );
}

export default index;