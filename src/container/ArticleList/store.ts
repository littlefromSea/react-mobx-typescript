import { observable } from 'mobx';

class ArticleList{
  @observable tom: boolean = false;
  @observable titleArray: any[] = [
    {
      title:'科普附美图：为什么地球在太空中悬……”',
      imgUrl:require('../../assets/images/kepu.jpeg'),
      aritcleAbb:'外太空及宇宙是人类文明发展至今研究进展最缓慢的领域之一，整个地球上70多亿人口只有区区十多名宇航员登陆过月球，因为相比人类近万年的进化历程，地球...',
      auhtor:'_飞鱼'
    },{
      title:'地球并不能永远自转，它其实在越来越慢”',
      imgUrl:require('../../assets/images/diqiu.jpeg'),
      aritcleAbb:'地球的自转是怎么形成的？ 其实现在关于地球自转的各种理论目前都还是假说，但传统的观点认为，太阳和行星皆形成于一团巨大的原始星云。当这些原始星云中......',
      auhtor:'有爱科学'
    },
    {
      title:'科普附美图：为什么地球在太空中悬……”',
      imgUrl:require('../../assets/images/kepu.jpeg'),
      aritcleAbb:'外太空及宇宙是人类文明发展至今研究进展最缓慢的领域之一，整个地球上70多亿人口只有区区十多名宇航员登陆过月球，因为相比人类近万年的进化历程，地球...',
      auhtor:'_飞鱼'
    },{
      title:'地球并不能永远自转，它其实在越来越慢”',
      imgUrl:require('../../assets/images/diqiu.jpeg'),
      aritcleAbb:'地球的自转是怎么形成的？ 其实现在关于地球自转的各种理论目前都还是假说，但传统的观点认为，太阳和行星皆形成于一团巨大的原始星云。当这些原始星云中......',
      auhtor:'有爱科学'
    }
  ]
}

export default new ArticleList();
