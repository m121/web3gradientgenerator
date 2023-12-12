import {React, useState} from "react";
import styled from 'styled-components'
import {ChromePicker} from 'react-color'
import copy from "copy-to-clipboard";


const ButtonOne = styled.button `
background : ${
    props => props.colorone ? props.colorone : '#000000'
} ;

                   
`
const ButtonTwo = styled.button `
background : ${
    props => props.colortwo ? props.colortwo : '#000000'
}

`
const Title = styled.h1 `
  font-size: 4rem;
    text-shadow: 0 0 80px ${
        props => props.colorone ? props.colorone : '#000000'
    } , 0 0 32px ${
        props => props.colortwo ? props.colortwo : '#000000'
    };
    `
function GlowText() {
    const [colorone, setColorone] = useState('#9BCFD0')
    const [colortwo, setColortwo] = useState('#c43ad6')
    const [displayColorOnePicker, setDisplayColorOnePicker] = useState(false)
    const [displayColorTwoPicker, setDisplayColorTwoPicker] = useState(false)
    const [direction, setDirection] = useState('to right')
    const handleChangeOne = (color) => {
        setColorone(color.hex)

    };
    const handleCloseOne = () => {
        setDisplayColorOnePicker(false)
    };
    const handleClickOne = () => {
        setDisplayColorOnePicker(!displayColorOnePicker)

    };
    const handleChangeTwo = (color) => {
        setColortwo(color.hex)

    };
    const handleCloseTwo = () => {
        setDisplayColorTwoPicker(false)
    };
    const handleClickTwo = () => {
        setDisplayColorTwoPicker(!displayColorTwoPicker)

    };
    const handleChangeDirection = (e) => {
        setDirection(e.target.value)
    }
    const copyToClipboard = () => {
        copy(textGradient);

    }
    let textGradient = (`.text-glow { 
    font-size: 4rem;
    text-shadow: 0 0 80px ${colorone} , 0 0 32px ${colortwo};
    }
    `)
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="mb-4">
                        
                        <Title direction={direction}
                            colorone={colorone}
                            colortwo={colortwo}>Your amazing Glow text</Title>
                    </h1>
                    <div className="card rounded-lg ">
                        <pre className="text-start text-left p-4 text-white font-semibold text-opacity-80">
                            <code className=" language-css">
                                {textGradient} 
                            </code>
                        </pre>

                    </div>
                </div>
                <div className="mt-4">
                    {
                    displayColorOnePicker ? <div className="absolute z-index-20"><div onClick={handleCloseOne}
                            className="fixed top-0 left-0 bottom-0 right-0"/><ChromePicker color={colorone}
                            onChange={handleChangeOne}/></div> : <div></div>
                }
                    {
                    displayColorTwoPicker ? <div className="absolute z-index-20"><div onClick={handleCloseTwo}
                            className="fixed top-0 left-0 bottom-0 right-0"/><ChromePicker color={colortwo}
                            onChange={handleChangeTwo}/></div> : <div></div>
                }
                    <div className="flex justify-center gap-4  py-4">
                        <ButtonOne onChange={handleChangeOne}
                            colorone={colorone}
                            onClick={handleClickOne}
                            className="rounded-lg w-14 h-8 "></ButtonOne>
                        <ButtonTwo colortwo={colortwo}
                            onClick={handleClickTwo}
                            className="rounded-lg w-14 h-8 "></ButtonTwo>
                        <div>
                          
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={copyToClipboard}
                            className="btn">Copy it</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlowText;