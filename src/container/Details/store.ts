import { observable } from 'mobx';

class Details {
  @observable details: string = 'details';
}

export default new Details();



