import React, {Component, Fragment } from 'react';
import {observer, inject} from 'mobx-react';
import './style.scss';

@inject('articleList')
@observer
class ArticleList extends Component<IProps>{
  public render(){
    const { articleList } = this.props;
    return(
      <Fragment>
        { articleList.titleArray.map((item:any, index?:number)=>{
          return(
            <div className={'article'} key={index} onClick={this.details.bind(this)}>
              <div className={'article_content'}>
                <div className={'article_content_title_content'}>
                  <a>{item.title}</a>
                  <p>{item.aritcleAbb}</p>
                </div>
                <div className={'imagBox'}>
                  <img src={item.imgUrl} alt=""/>
                </div>
              </div>
              <div className={'article_author_time'}>
                <span>点赞</span>
                <a href="javascript:void(0)">{item.auhtor}</a>
              </div>
            </div>
          )
        }) }
      </Fragment>
    )
  }
  public details(){
    this.props.history.push('/details');
  }
}

export default ArticleList;