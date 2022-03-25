import s from './Button.module.scss';



export function Button({ children, size }) {
    return (
        <button className={s.button}>{children} {size}</button>
    )
}