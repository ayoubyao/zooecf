import { NextPage } from 'next'
import HeaderComponent from './headerComponent'
import Home1Component from './home1Component'
import FooterComponent from './FooterComponent'

interface Props {}

const HomeComponent: NextPage<Props> = ({}) => {
  return <div>
    <HeaderComponent />
    <Home1Component/>
    <FooterComponent/>

  </div>
}

export default HomeComponent