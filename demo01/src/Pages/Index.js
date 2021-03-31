import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {
          cid: 123,
          title: '技术胖的个人博客1'
        },
        {
          cid: 456,
          title: '技术胖的个人博客2'
        },
        {
          cid: 789,
          title: '技术胖的个人博客3'
        }
      ]
     }
      // 编程式写法  
     this.props.history.push("/home")
  }
  render() { 
    return ( 
      <div>
        {/* 标签写法 */}
        {/* <Redirect to="/home/" /> */}
        <ul>
          {
            this.state.list.map((item,index) => {
              return(
                <li key={index+item}>
                  <Link to={`/list/${item.cid}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Index;