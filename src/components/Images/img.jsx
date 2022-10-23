import logo from '../../assets/logo.png'
import {Logostld, BannerNewsstld, Detalhesstld} from './Images.stld'
import Proptypes from "prop-types";


export const Logo = () => {

    return (
        <Logostld src={logo} alt="logo" />

    )
} 


export const BannerNews = ({children}) => {

    return (
        <BannerNewsstld src={children} alt="news" />

    )
} 


export const Detalhes = ({children}) => {

    return (
        <Detalhesstld src={children} alt="detalhes" />

    )
} 

BannerNews.propTypes ={
    children: Proptypes.node
}
Detalhes.propTypes ={
    children: Proptypes.node
}