import React, {Component, Fragment} from 'react'
import { inject, observer } from 'mobx-react'
import { Carousel } from 'element-react';
import ArticleList from '../ArticleList/articleList';

@inject('homeStore')
@observer
class Home extends Component<IProps>{
   public render(){
     const { homeStore } = this.props;
     return(
       <Fragment>
          <div className="demo-1 small">
            <div className="block">
              <Carousel height="150px">
                {
                  homeStore.imageArray.map((item: string, index?:number) => {
                    return (
                      <Carousel.Item key={index}>
                        <img 
                          src={item} 
                          alt="" 
                          className={'define_imag_size'} 
                        />
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>
              </div>
          </div>
          <ArticleList {...this.props} />         
       </Fragment>
     )
   }
}

export default Home;
