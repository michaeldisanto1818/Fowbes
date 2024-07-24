import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #0F0E1A;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 5);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 10px;
    transition: transform 0.2s ease;
    &:hover {
        color: #727272; /* Change to your desired hover color */
        font-size: 1.2rem;
        border-color: #727272;
        font-weight: 700;
        animation: bounce 0.5s infinite alternate;
    }

    @keyframes bounce{
        0% {
            transform: translateY(2px);
        }
        100% {
            transform: translateY(-2px);
        }
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
