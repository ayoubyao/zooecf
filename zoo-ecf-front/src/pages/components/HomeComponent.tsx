import { NextPage } from 'next'
import MainMenuComponent from './MainMenuComponent'

interface Props {}

const HomeComponent: NextPage<Props> = ({}) => {
  return <div>
    <MainMenuComponent />
  </div>
}

export default HomeComponent