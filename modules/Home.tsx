/**
 * @Author: HimalayaAnt
 * @Date: 2021/12/23
 **/
import {FC, default as React, useState} from "react";
import NextLink from 'next/link'
import CardComponent from 'components/Card'
import styles from './Home.module.css'
import styled from 'styled-components'
interface IHome {

}
//components
const AnchorEle = styled.a({
    height:'100%',
    position:'relative',
    display:'flex',
    alignItems:'center',
    fontSize:'14px',
    textDecoration:'none',
    color:'#ccc',
    padding:'0 20px',
    transition:'background-color .3s ease-in, color .3s ease-in',
    '&:hover,&.active':{
        color:'#fff',
        backgroundColor:'#000'
    },
    //show red arrow
    '&.active::after':{
        content:'""',
        position:'absolute',
        //12px * 7px
        border:'6px solid transparent',
        borderBottomColor:"#C20C0C",
        bottom:0,
        left:'calc(50% - 6px)',
    },
    //show Hot flag
    '&.hot::before':{
        content:'"HOT"',
        color:'#fff',
        position:'absolute',
        borderRadius:'10px',
        padding:'4px',
        backgroundColor:"#C20C0C",
        top:'20%',
        right:'-20px',
        transform: 'scale(0.6)',
        zIndex:1
    },
})
const NavItem = (props:{href:string,name:string,className?:string,onClick?:()=>void}) => (
    <NextLink href={props.href} passHref>
        <AnchorEle onClick={()=> props.onClick && props.onClick()} className={props.className}>{props.name}</AnchorEle>
    </NextLink>
)
const LogoEle = () => {
    return <h1 style={{
        width: '176px',
        height: '69px',
        margin:0,
        backgroundPosition: '0 0',
        backgroundImage:'url("/topbar.png")'
    }}>
        <NextLink passHref href={'#'}>
            <a style={{
                display:'block',
                height:'100%'
            }}></a>
        </NextLink>
    </h1>
}

const HeaderContainer = styled.div({
    backgroundColor:'#242424'
})
const HeaderLayout = styled.div({
    width: '1100px',
    height:'70px',
    margin: '0 auto',
    display:'flex',
    flexDirection:'row'
})
const Home:FC<IHome> = () => {
    const navList = [
        {
            name:'发现音乐',
            defaultActive:true
            // jsx?:
        },{
            name:'我的音乐'
        },{
            name:'关注'
        },{
            name:'商城'
        },{
            name:'音乐人'
        },{
            name:'下载客户端',
            hot:true
        }
    ]
    //state
    const [activeIdx, setActiveIdx] = useState<number>(0)
    return <div>
        {/* header section */}
        <HeaderContainer>
            <HeaderLayout>
                <LogoEle/>
                {
                    navList.map((item,idx) => {
                        return <NavItem onClick={()=> setActiveIdx(idx) } className={`${item.defaultActive || idx === activeIdx ? 'active':''} ${item.hot?'hot':''}`} name={item.name} href={'/xxxx'} key={item.name}/>
                    })
                }
            </HeaderLayout>
        </HeaderContainer>
    </div>
}

export default Home