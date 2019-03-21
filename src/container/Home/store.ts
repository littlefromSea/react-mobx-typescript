
import { observable } from 'mobx';

class Home {
  @observable imageArray: any[] = [
    require('../../assets/images/1.png'),
    require('../../assets/images/2.jpg'),
    require('../../assets/images/3.png'),
    require('../../assets/images/4.jpg')
  ]
}

export default new Home();