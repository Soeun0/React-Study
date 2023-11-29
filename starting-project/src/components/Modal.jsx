import classes from './Modal.module.css';

function Modal({ children, onClose }) {
    return (
        <>
        <div className={classes.backdrop} onClick={onClose}/>
        {/* 결국 Click 이벤트 리스너와 hidrModalHendler()함수가 연결되는 것 이다.*/}
        <dialog open className={classes.modal}>
            {children}
        </dialog>
        </>
    );
}

export default Modal;