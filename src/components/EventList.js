import style from './EventList.module.css'

function EventList({ events, handleDelete}) {
    return (
        <>
            {events.length === 0 && <h2>No Content Yet :(</h2>}

            {events.map((event) => {
                return (
                    <div key={event.id} className={style.card}>
                        <h4>{event.title} <br /> {event.date} </h4>
                        <button onClick={() => handleDelete(event.id)}>
                            <i class="bi bi-trash"></i> Delete this item
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default EventList
