import PropTypes from 'prop-types'
import './style.css'
const Cmp = ({ name }) => {
    return (
        <div className='container-app'>
            <div className='line-container'>
                <h1 className='title'>Hello {name}</h1>
                <button className='btn' onClick={(event) => {
                    console.log(1)
                }}>add task</button>
            </div>

        </div>
    )
}
Cmp.defaultProps = {
    name: 'jake'
}

export default Cmp
