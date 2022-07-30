import styles from './ProgressDots.module.css'

function ProgressDots( {items, activeIndex} ) {

    return (
        <div className={styles.container}>
            {items.map((items) => {
                return (
                    <span key={items.id} className={(activeIndex === items.id) ? styles.selected : styles.dot}/>
                )
            })}
        </div>
    )
}

export default ProgressDots

// Give data id- done
// Pass in props | ActiveIndex
// Loop through items .map
// If Active index = items.id then set class to active