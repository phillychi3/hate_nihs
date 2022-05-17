import React from 'react';
import {
 Form,
} from "react-bootstrap";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { useAlert } from 'react-alert'

export default function Isform() {  
    const alert = useAlert()



    const [formData, updateFormData] = React.useState();

    const handleChange = (e) => {
        updateFormData({
          "data": e.target.value
        });
      };

    const [formData2, updateFormData2] = React.useState();

    const handleChange2 = (e) => {
        updateFormData2({
          "data": e.target.value
        });
      };

    function testlogin(thing){
        if(!formData || !formData2){
            alert.error("請不要留空");
            console.log("error");
            return;
        }
        alert.success("發送中 請不要離開");
        var jdata = {'jwt': thing, 'name':formData.data , "content": formData2.data};
        fetch('http://phillychi3.ml:7414/api/test/login', {
            method: 'POST',
            headers:  new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(jdata)
        })
        .then(res => res.json())
        .then(data => {            
            alert.success("發送成功");
        })
        .catch(err => {
            alert.error("未知錯誤");
        })
    }

    return (
        
        <Form>
        <GoogleOAuthProvider clientId="133157627833-551a92ekvsubhjh1arabm6hn16sjjlpl.apps.googleusercontent.com">

        <p>1.請使用學校帳號登入</p>
        <p>2.文章內禁止出現任何完整性名 <br></br>範例:王小名 王xx</p>
        <p>3.禁止出現-政治-辱罵-毀謗等行為 違者將移除使用權</p>
        <p>4.匿名系統不會蒐集任何非發文者資料</p>
        <p>5.若您按下面那個登入按鈕 及代表您同意本網站政策</p>
            <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>暱稱</Form.Label>
                <Form.Control type="text" placeholder="請輸入暱稱" name="name" onChange={handleChange}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>內容</Form.Label>
                <Form.Control as="textarea" rows={3} type="password" placeholder="內容" name="in" onChange={handleChange2}/>
            </Form.Group>

            
            <GoogleLogin
            onSuccess={credentialResponse => {                
                testlogin(credentialResponse.credential)
            }}
            onError={() => {
                console.log('Login Failed');
            }}

            />
            </GoogleOAuthProvider>
        </Form>

        );
    }
