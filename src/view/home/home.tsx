import React, { useEffect } from 'react';
// import { useEffect } from 'react/cjs/react.production.min';
function Home(props: object) {
  
  // tsx语法，返回要渲染的节点
  useEffect(() => {
    console.log(props);
    
  }, [props])
  return (
    <div id="mountNode">
      
    </div>)
}
// 抛出组件
export default Home
