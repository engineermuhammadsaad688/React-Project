import { useState } from 'react'
import List from './List.js'
import { data } from './data.js'
import   './BirthDayRemainder.css'
const BirthDayRemainder = () => {
    const [people, setPeople] = useState(data)
    return (
        <div className='cont'>
            <div className='navbar'>
                <p>24 Birthday today</p>
                <List people={people} />
            </div>
            <div className="btn-container">
                <button className="clear-btn" onClick={() => setPeople([])}>
                    Clear All
                </button>
            </div>

        </div>
    )
}

export default BirthDayRemainder