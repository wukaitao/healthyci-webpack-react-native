import React,{Component} from 'react';
import {TabBarIOS,NavigatorIOS} from 'react-native';
import {Link,hashHistory} from 'react-router';
//声明组件
class MyHealthy extends Component{
  render(){
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="React Native" selected={true}>
          <NavigatorIOS initialRoute={{ title: 'React Native' }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

//导出组件
export default MyHealthy;