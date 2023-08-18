// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedback: true,
  }

  onClickFeedback = () => {
    this.setState({feedback: false})
  }

  lovePage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="love-emoji-container">
            <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
            <h1 className="emoji-description">Thank You</h1>
          </div>
          <div>
            <p className="description">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      </div>
    )
  }

  firstPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="img-container">
            <ul className="unordered-list">
              {emojis.map(eachItem => (
                <li className="list-item" key={eachItem.id}>
                  <div className="img-container">
                    <img
                      src={eachItem.imageUrl}
                      className="emoji"
                      alt={eachItem.name}
                      onClick={this.onClickFeedback}
                    />
                    <p className="emoji-name">{eachItem.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {feedback} = this.state
    return <div>{feedback ? this.firstPage() : this.lovePage()}</div>
  }
}

export default Feedback
