import MainHeader from "../components/header.jsx";
import { Outlet } from "react-router-dom";
export default function root(){
    return <>
    <MainHeader/>
    <Outlet/> 
    </>
}