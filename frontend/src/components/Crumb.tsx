import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/mainpage.css";
import styles from "../styles/mainpage.module.css";

export function Crumb(){
    const urls = window.location.pathname.split('/')

    urls.shift

    const urlText = Object.create({
        doctor: "Médico",
        createNewDoctor: "Criar novo Médico",
        patient: "Paciente",
        createNewPatient: "Criar novo Paciente",
    })

    return (
        <>
            <div className={styles.crumb}>
                <Link to={"/"}>
                    <AiFillHome />
                </Link>
                { urls.map((url, i) => {
                    return (
                        <>
                            <Link to={url}>{">"} </Link>
                            <label>{urlText[url]}</label>
                        </>
                    )
                })}
            </div>
        </>
    )
}