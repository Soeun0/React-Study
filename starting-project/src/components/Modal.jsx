import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..'); //터미널에 ..을 쓴 것과 동일하게 동작함 (라우팅에서도 동일)
    }

    return (
        <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        {/* 결국 Click 이벤트 리스너와 hidrModalHendler()함수가 연결되는 것 이다.*/}
        <dialog open className={classes.modal}>
            {children}
        </dialog>
        </>
    );
}

export default Modal;