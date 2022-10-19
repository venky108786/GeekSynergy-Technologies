import {Component} from 'react'
// eslint-disable-next-line no-unused-vars
import Header from '../Header'

import './index.css'

class Home extends Component {
  componentDidMount() {
    // location.assign('https://hoblist.com/api/movieList')
    this.goToUrl()
  }

  goToUrl = () => {
    window.location.assign('https://hoblist.com/api/movieList')
  }

  render() {
    return <Header />
  }
}
export default Home
