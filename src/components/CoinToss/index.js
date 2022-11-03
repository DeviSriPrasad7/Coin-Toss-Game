// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    head: 0,
    tail: 0,
    total: 0,
  }

  checkStatusOfCoin = () => {
    const {head, tail, total} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      const headsCount = head + 1
      const totalCount = total + 1
      this.setState({
        tossResultImage: HEADS_IMG_URL,
        head: headsCount,
        total: totalCount,
      })
    } else {
      const tailsCount = tail + 1
      const totalCount = total + 1
      this.setState({
        tossResultImage: TAILS_IMG_URL,
        tail: tailsCount,
        total: totalCount,
      })
    }
  }

  render() {
    const {tossResultImage, head, tail, total} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="img" />
          <button
            type="button"
            onClick={this.checkStatusOfCoin}
            className="button"
          >
            Toss Coin
          </button>
          <div className="t-h-t-container">
            <p>Total: {total}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
