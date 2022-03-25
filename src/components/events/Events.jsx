import { Link } from 'react-router-dom';
import s from './Events.module.scss';

export function Events({ events }) {
    return (
        <div className={s.events}>
            <h2>Viðburðir á næstunni</h2>
            <ul>
                {events.map((event) => {
                    return (
                        <li key={event.id} className={s.events__event}>
                            <Link to={`/${event.id}`} className={s.events__eventLink}>
                                {event.name}
                            </Link>
                            <p className={s.events__eventDescription}>
                                {event.description}
                            </p>

                        </li>
                    );
                })}
            </ul>
        </div>
    )

}