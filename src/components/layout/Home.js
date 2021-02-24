import React from 'react';
import styled from '@emotion/styled';
import logo from "../layout/register.svg";
import "./Home.css";



const SectionBody = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #2f3848;
`;

const H1Title = styled.h6`
    color: white;
    font-weight: bold;
    font-size: 2.5rem;
    font-family: sans-serif;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

const NavMenu = styled.nav`
    /* background-color: crimson; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    padding-left: 70px;
    padding-right: 70px;
    font-size: 1.8rem;
`;

const NavEnlace = styled.a`
    color: white;
    margin-right: 20px;
`;

const BotonRegistro = styled.a`
    background-color: crimson;
    border-radius: 8px;
    color: white;
    padding: 10px;
    font-weight: bold;

    &:hover{
        background-color: white;
        color: crimson;
        font-weight: bold;
        transition: 0.5s ease;
    }
`;

const SectionHome = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 70px;
    padding-left: 70px;
    margin-top: 70px;
`;

const TitleHome = styled.h1`
    color: white;
    font-size: 5rem;
    margin-left: 50px;
`;

const Home = () => {
    return(
        <SectionBody>
            <NavMenu>
                <div className="menu-logo">
                    <H1Title>Mern</H1Title>
                </div>
                <div className="menu-nav">
                    <NavEnlace href={"/error404"}>Gallería</NavEnlace>
                    <NavEnlace href={"/error404"}>Reseñas</NavEnlace>
                    <NavEnlace href={"/error404"}>A cerca de</NavEnlace>
                    <NavEnlace href={"/login"}>Iniciar Sesión</NavEnlace>
                    <BotonRegistro href="/nueva-cuenta">Registrarse</BotonRegistro>
                </div>
            </NavMenu>

            <SectionHome>
                <div><TitleHome>Proyecto React <br/> con Stack <mark>Mern</mark></TitleHome></div>
                <div><img src={logo} alt="logo"/></div>
            </SectionHome>
        </SectionBody>
    );
};

export default Home;