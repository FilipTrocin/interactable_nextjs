import {useState} from "react";
import Image from "next/image";

export default function Card(props) {
    return (
        <a className="bg" href={props.link} >
            <a className={props.hoverCard}>
                <div className="content">
                    <p>{props.title}</p>
                    <div className="inside-bg">
                        <Image src={props.img} width={281} height={315} alt={props.alt}/>
                    </div>
                </div>
            </a>
        </a>
    )
}