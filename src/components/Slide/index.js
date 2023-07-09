import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class Slide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state

    return (
      <SlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeDescription('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1 onClick={this.onClickHeading} className="slide-heading">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="slide-heading-input"
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="slide-description"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                    className="slide-description-input"
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}
export default Slide
