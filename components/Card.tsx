import React, {useState} from "react";
import Image from "next/image";

// CSS
import cardStyles from '@/components/card.module.css'

// Fonts
// TODO: Find out if there's no better way i.e. choose font from css
import {Koulen} from "next/font/google";
const koulen = Koulen({ weight: '400', subsets: ['latin']})


export default function Card(props) {
    return (
        <a className={cardStyles.bg} href={props.link} >
            <a className={props.hoverCard}>
                <div className={cardStyles.content}>
                    <p className={koulen.className}>{props.title}</p>
                    <div className={cardStyles.insideBg}>
                        <Image src={props.img} width={281} height={315} alt={props.alt}/>
                    </div>
                </div>
            </a>
        </a>
    )
}