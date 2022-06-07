import { connect } from 'react-redux'
import { increment, decrement, changeStep } from '../../actions/actionCreators'
const Counter = props => {
  const { count, step } = props
  const handlerInput = ({ target: { value } }) => {
    props.changeStep(Number(value))
  }
  return (
    <div className='Counter'>
      <h1>{count}</h1>
      <input type='number' value={step} onChange={handlerInput} />
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}
const mapStateToProps = ({ counter: { count, step } }) => ({ count, step })
const mapDispatchToProps = {
  increment,
  decrement,
  changeStep
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
