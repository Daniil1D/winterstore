
import '../../scss/components/Modal.scss'

function index({active, setActive}) {
  return (
    <div className={active ? 'Modal active' : 'Modal'} onClick={() => setActive(false)}>
        <div className='Modal__content' onClick={e => e.stopPropagation()}>
            <div className='Modal__Avtorization'>
                <h1 className='Modal__Avtorization-title'>Вход</h1>
                <div className='Modal__Avtorization-input'>
                    {/* <label className='Modal__Avtorization-label'>Логин</label> */}
                    <input className='Modal__input' type="text" placeholder='Логин'/>
                </div>
                <div className='Modal__Avtorization-input'>
                    {/* <label className='Modal__Avtorization-label'>Пароль</label> */}
                    <input className='Modal__input' type="text" placeholder='Пароль'/>
                </div>
                <label class="Modal__list-block">
                    <input type="checkbox" class="Modal__inputcheckbox"/>
                    <span class="Modal__custom">Запомнить меня</span>              
                </label>
                <div class="Modal__button">
                    <button class="Modal__btn">Войти</button>
                </div>
            </div>
            <div className='Modal__Registration'>
                <h1 className='Modal__Avtorization-title'>Зарегистрироваться</h1>
                <div className='Modal__Avtorization-input'>
                    {/* <label className='Modal__Avtorization-label'>Логин</label> */}
                    <input className='Modal__input' type="text" placeholder='Логин'/>
                </div>
                <div className='Modal__Avtorization-input'>
                    {/* <label className='Modal__Avtorization-label'>Пароль</label> */}
                    <input className='Modal__input' type="text" placeholder='Пароль'/>
                </div>
                <label class="Modal__list-block">
                    <input type="checkbox" class="Modal__inputcheckbox"/>
                    <span class="Modal__custom">Запомнить меня</span>              
                </label>
                <div class="Modal__button">
                    <button class="Modal__btn">Войти</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default index;