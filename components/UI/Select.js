import { useState } from 'react'
import classes from './Select.module.css'

const Select = (props) => {
    const [selectedValue, setSelectedValue] = useState(props.initialView);
    const [isActive, setIsActive] = useState(false)


    const showOptions = () => {
        setIsActive(true)
    }
    function hideOptions() {
        setIsActive(false);
    }
    const selectHandler = ({ target }) => {
        setIsActive(false)
        props.viewHandler(target.innerText)
    }



    return (
        <div className="selectCombo" tabIndex={0} onBlur={hideOptions}>
            <div className={`${classes.select} relative`}>
                <div className={`${classes.selected}`} onClick={showOptions}>{selectedValue}</div>
                {isActive &&
                    <ul className={`${classes.dropwdown}`}>
                        <li onClick={selectHandler}>List</li>
                        <li onClick={selectHandler}>Grid</li>
                    </ul>
                }
            </div>

        </div>
    )
}

export default Select