import {useEffect, useState} from 'react';
import './CarousalSecond.css';
export default function CarousalSecond(){
    const [carousalData, setCarousal] = useState([
        {
            id:1,
            text:'First'
        },
        {
            id:2,
            text:'Second'
        },{
            id:3,
            text:'Third'
        }
        ,{
            id:4,
            text:'Fourth'
        },
        {
            id:5,
            text:'Fifth'
        },{
            id:6,
            text:'Sixth'
        }
    ])
    const showIndex = 2;
    const [current, setCurrent] = useState(0)
    const [showData, setShowData] = useState(() => carousalData.slice(current,current+showIndex))
    useEffect(()=>{
        setShowData(carousalData.slice(current,current+showIndex))
    },[current])
    const previous = () => {
        if(current===0){
            setCurrent(carousalData.length-1)
        }else{
            setCurrent(current-1)
        } 
    }
    const next = () => {
        console.log("current>>>>",current);
        if(current === carousalData.length-1){
            setCurrent(0)
        }else {
            setCurrent(current+1)
        } 
    }
    const dataShow = showData.map((item)=> <div className="item">{item.text}</div>)
    return <div className="main">
        <div className="carousal">
        {dataShow}
        </div>
        <div className="navigation">
            <button onClick={previous}>Left</button>
            <button onClick={next}>Right</button>
        </div>
    </div>
}

// export default CarousalSecond;