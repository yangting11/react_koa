import React from 'react'
import {Input, Button} from 'antd'
import URL from '../../utils/api.js'
import axios from 'axios'
class loginPage extends React.Component{
    constructor(props){
        super(props)
    }
    addUser(e){
        let adduser = {
            userName:'yt1',
            password:'11111'
        }
        // alert(1)
        // axios.post(URL.Register,adduser)
        axios({
            url: URL.Register,
            method: 'post',
            data:{
                userName:'myname',
                password:'1227' 
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <Input placeholder="名字" />
                <Input placeholder="密码" />
                <Button type="submit" onClick={e=>this.addUser(e)}>提交</Button>
            </div>
        )
    }
}
export default loginPage