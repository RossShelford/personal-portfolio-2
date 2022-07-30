import styles from './ProgressDots.module.css'

function ProgressDots( {items, activeIndex, setActiveIndex} ) {

    return (
        <div className={styles.container}>
            {items.map((items) => {
                return (
                    <span key={items.id} className={(activeIndex === items.id) ? styles.selected : styles.dot} onClick={()=>{console.log(setActiveIndex(items.id))}}/>
                )
            })}
        </div>
    )
}

export default ProgressDots