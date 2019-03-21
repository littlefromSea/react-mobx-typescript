import React, {Component, Fragment} from 'react';
import { Loading } from 'element-react';

class LoadingHomePage extends Component{
  render(){
    return(
      <Fragment>
        <div className={'loading_global'}>
          <Loading fullscreen={true} />
        </div>
      </Fragment>
    )
  }
}
export default LoadingHomePage;
