import {React, useState} from "react";
import styled from 'styled-components'
import {ChromePicker} from 'react-color'
import copy from "copy-to-clipboard";
import cogoToast from 'cogo-toast';


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
  background: linear-gradient(${
    props => props.direction ? props.direction : 'to left'
}, ${
    props => props.colorone ? props.colorone : '#000000'
} , ${
    props => props.colortwo ? props.colortwo : '#000000'
} );
  font-size: 4rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `
function GradientText() {
    const [colorone, setColorone] = useState('#9BCFD0')
    const [colortwo, setColortwo] = useState('#C43AD6')
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
        cogoToast.success('Copied!');

    }
    let textGradient = (`.text-gradient { 
    background: linear-gradient(${direction}, 
        ${colorone}, ${colortwo});
    font-size: 4rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    `)
    return (
        <section className="text-gray-600 body-font  ">
            <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="mb-4">
                        <Title direction={direction}
                            colorone={colorone}
                            colortwo={colortwo}>Your amazing gradient text</Title>
                    </h1>
                    <div className="card rounded-lg ">
                        <pre className="text-start text-left p-4 text-white font-semibold text-opacity-80">
                            <code className="text-sm  language-css">
                                {textGradient} 
                            </code>
                        </pre>

                    </div>
                </div>
                <div className="mt-4 h-screen ">
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
                            className="rounded-lg sm:w-14 w-12 sm:h-8 h-4 "></ButtonOne>
                        <ButtonTwo colortwo={colortwo}
                            onClick={handleClickTwo}
                            className="rounded-lg sm:w-14 w-12 sm:h-8 h-4 "></ButtonTwo>
                        <div>
                            <select onChange={handleChangeDirection}
                                className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="to left">To Left</option>
                                <option value="to right">To Right</option>

                            </select>
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

export default GradientText;
