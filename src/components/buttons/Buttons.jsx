import s from './Buttons.module.scss';


export function Buttons({ children }) {
    return (
        <div className={s.buttons}> {children}</div>
    )
}