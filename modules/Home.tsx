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

// style components
const HeaderContainer = styled.div({
    backgroundColor: '#242424'
})
const HeaderLayout = styled.div({
    width: '1100px',
    height: '70px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row'
})
const AnchorEle = styled.a({
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    textDecoration: 'none',
    color: '#ccc',
    padding: '0 20px',
    transition: 'background-color .3s ease-in, color .3s ease-in',
    '&:hover,&.active': {
        color: '#fff',
        backgroundColor: '#000'
    },
    //show red arrow
    '&.active::after': {
        content: '""',
        position: 'absolute',
        //12px * 7px
        border: '6px solid transparent',
        borderBottomColor: "#C20C0C",
        bottom: 0,
        left: 'calc(50% - 6px)',
    },
    //show Hot flag
    '&.hot::before': {
        content: '"HOT"',
        color: '#fff',
        position: 'absolute',
        borderRadius: '10px',
        padding: '4px',
        backgroundColor: "#C20C0C",
        top: '20%',
        right: '-20px',
        transform: 'scale(0.6)',
        zIndex: 1
    },
})
const RoundButton = styled.button({
    backgroundColor: 'transparent',
    height: '32px',
    padding: '0 16px',
    borderRadius: '16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    cursor: 'pointer',

    color: '#ccc',
    borderColor: '#4F4F4F',
    '&:hover': {
        color: '#fff',
        borderColor: '#ccc',
    }

})

const LoginButton = styled.button({
    color: '#787878',
    fontSize: '12px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',

    '&:hover': {
        textDecoration: 'underline'
    }
})

const InputEle = styled.input({
    border: 'none',
    outline: 'none',
    fontSize: '12px',
    width: '110px',
    color: '#333',
    '&::-webkit-input-placeholder': {
        color: '#9b9b9b'
    }
})

//plain components
const NavItem = (props: { href: string, name: string, className?: string, onClick?: () => void }) => (
    <NextLink href={props.href} passHref>
        <AnchorEle onClick={() => props.onClick && props.onClick()} className={props.className}>{props.name}</AnchorEle>
    </NextLink>
)
const LogoEle = () => {
    return <h1 style={{
        width: '176px',
        height: '69px',
        margin: 0,
        backgroundPosition: '0 0',
        backgroundImage: 'url("/topbar.png")'
    }}>
        <NextLink passHref href={'#'}>
            <a style={{
                display: 'block',
                height: '100%'
            }}></a>
        </NextLink>
    </h1>
}

const SearchEle = (props: {
    onSearch: (inputVal: string) => void,
    onEnter?: (inputVal: string) => void
}) => {
    const [inputVal, setInputVal] = useState<string>('')
    return <div style={{
        width: '158px',
        height: '32px',
        paddingLeft: '30px',
        boxSizing: 'border-box',
        borderRadius: '16px',
        backgroundImage: 'url(/topbar.png)',
        backgroundPosition: '0 -99px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center'
    }}>
        <InputEle value={inputVal} typeof='text' placeholder='音乐/视频/电台/用户' onKeyDown={(e) => {
            e.key === 'Enter' && props.onEnter && props.onEnter(inputVal)
        }} onInput={(e) => {
            const curVal = (e.target as any).value
            setInputVal(curVal);
            props.onSearch(curVal)
        }}/>
    </div>
}
const navList = [
    {
        name: '发现音乐',
        defaultActive: true
        // jsx?:
    }, {
        name: '我的音乐'
    }, {
        name: '关注'
    }, {
        name: '商城'
    }, {
        name: '音乐人'
    }, {
        name: '下载客户端',
        hot: true
    }
]

const Home: FC<IHome> = () => {
    //state
    const [activeIdx, setActiveIdx] = useState<number>(0)
    //inner component
    const LeftSection = () => {
        return <div style={{ display: 'flex',height: '100%' }}>
            <LogoEle/>
            {
                navList.map((item, idx) => {
                    return <NavItem onClick={() => setActiveIdx(idx)}
                                    className={`${item.defaultActive || idx === activeIdx ? 'active' : ''} ${item.hot ? 'hot' : ''}`}
                                    name={item.name} href={'/xxxx'} key={item.name}/>
                })
            }
        </div>
    }
    const RightSection = () => {
        return <div style={{ display: 'flex' }}>
            <SearchEle onSearch={(val) => {
                console.log(val)
            }} onEnter={(val) => {
                console.log('enter-->', val)
            }}/>
            <RoundButton style={{marginLeft: '10px'}}>创作者中心</RoundButton>
            <LoginButton style={{marginLeft: '20px'}}>登录</LoginButton>
        </div>
    }
    return <div>
        {/* header section */}
        <HeaderContainer>
            <HeaderLayout>
                <LeftSection/>
                <RightSection/>
            </HeaderLayout>
        </HeaderContainer>
    </div>
}

export default Home