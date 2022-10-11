import React, { useEffect } from 'react';
import '../login/css/login.css'
import { Button } from 'antd';
// import { Form, Input, Button } from 'antd';
function Login(props: object){
    // tsx语法，返回要渲染的节点
  useEffect(() => {
    console.log(props);
    
  }, [props])
  return(
   <div className='login'>
    <div className='loginbox'>
    <Button ghost shape="round">去往剑气长城</Button>
    </div>
   </div>
  )
}

export default Login;