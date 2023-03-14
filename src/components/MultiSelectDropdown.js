import React, { useState} from 'react'
import Dropdown from '../images/Dropdown.png'
import {
    cMultiSelectDropdown,
    cMultiSelectDropdown__selected,
    cMultiSelectDropdown__options,
    cMultiSelectDropdown__option,
    cMultiSelectDropdown__optionButton,
    cMultiSelectDropdown__optionCheckbox


} from "../styles/MultiSelectDropdown.module.css"

const MultiSelectDropdown = ({ options, selected, toggleOption  }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null)


    const handleMouseEnter = () => {
        setIsOpen(true)
        clearTimeout(timeoutId)
    }

    const handleMouseLeave = () => {
        setTimeoutId(setTimeout(() => setIsOpen(false), 5000))
    }


    return (
        <div className={cMultiSelectDropdown}>
            <div className={cMultiSelectDropdown__selected}
                role="button"
                onClick={() => setIsOpen(true)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setIsOpen(true)
                    }
                }}
                tabIndex={0}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div>Filter Technology</div>
                <img src={Dropdown} alt="dropdown icon"/>
            </div>
            {isOpen && (
                <ul className={cMultiSelectDropdown__options}>
                    {options.map(option => {
                        const isSelected = selected.includes(option.id)

                        return(
                            <li key={option.id}
                                 className={cMultiSelectDropdown__option}>
                                <button className={cMultiSelectDropdown__optionButton}
                                    type="button" 
                                    
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} 
                                    >
                                        <input 
                                            type="checkbox"
                                            defaultChecked={isSelected}
                                            onClick={() => toggleOption({ id: option.id})} 
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    toggleOption({ id: option.id })
                                                }
                                            }}
                                            className={cMultiSelectDropdown__optionCheckbox}
                                        />
                                </button>
                                <span>{option.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default MultiSelectDropdown