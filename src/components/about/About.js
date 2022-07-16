import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const nickName = info.nickName

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickName} $</span> cat
                about {nickName} </p>
            <p><span style={{color: info.baseColor}}><span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickName} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Programming Language</p>
            <ul className={Style.skills}>
                {info.skills.programming_language.map(item => <li>{item}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Framework </p>
            <ul className={Style.skills}>
                {info.skills.framework.map(item => <li>{item}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> DevOp </p>
            <ul className={Style.skills}>
                {info.skills.DevOp.map(item => <li>{item}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Tools </p>
            <ul className={Style.tool}>
                {info.skills.tool.map(item => <li>{item}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickName} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map(hobby => (
                    <li><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}