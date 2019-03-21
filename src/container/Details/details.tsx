import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';

@inject('details')
@observer
class Details extends Component<IProps>{
  render(){
    const {details} = this.props;
    return(<Fragment><div>{details.details}</div></Fragment>)
  }
}

export default Details;