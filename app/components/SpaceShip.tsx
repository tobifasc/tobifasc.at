'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function SpaceShip() {

    const { width, height } = useWindowDimensions();
    const [top, setTop] = useState(30);
    const [left, setLeft] = useState(30);
    const [angle, setAngle] = useState(0);
    const intervalRef = useRef(0);
    const [shipSize, setShipSize] = useState(30);

    let newTop = 0;
    let newLeft = 0;
    let radAngle = 0;
    let degAngle = 0;


    useEffect(() => {
        function calcNewTarget() {
            if (!height || !width)
                return
            else {
                let newShipSize = (height + width) / 40;
                setShipSize((newShipSize > 50) ? 50 : newShipSize);
                console.log("shipsize: " + shipSize)
            }
            newTop = Math.floor(Math.random() * (height - shipSize));
            newLeft = Math.floor(Math.random() * (width - shipSize));
            radAngle = Math.atan2(newTop - top, newLeft - left);
            //degAngle = (radAngle > 0 ? radAngle: (2*Math.PI + radAngle)) * 360 / (2*Math.PI);
            degAngle = (2 * Math.PI + radAngle) * 360 / (2 * Math.PI);
            degAngle += 90;

            setAngle(degAngle);
            setTop(newTop);
            setLeft(newLeft);
        }
        // execute calcNewTarget immediately once and then every 4,5 seconds
        if (intervalRef.current === 0) {
            calcNewTarget();
        }
        const interval = setInterval(calcNewTarget, 4500);
        intervalRef.current = interval;

        return () => { clearInterval(intervalRef.current); };
    }, [top, left, angle, shipSize, height, width]);

    return (
            <div className="absolute z-20" 
            style={{transition: "translate 5s ease-in-out, transform 500ms ease-in-out", 
            translate: `${left}px ${top}px`,
            transform: `rotate(${angle}deg)`,
            width: `${shipSize}px`,
            height: `${shipSize}px`}}>
            <svg width="100%" height="100%" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" > <path style={{"stroke": "rgb(0, 0, 0)", "paintOrder": "fill", "fill": "rgb(255, 255, 255)"}} d="M 9.619 22.894 L 9.619 49.444 L 12.274 49.444 L 12.274 46.789 L 14.929 46.789 L 14.929 44.134 L 17.584 44.134 L 17.584 41.479 L 20.239 41.479 L 20.239 46.789 L 25.549 46.789 L 25.549 44.134 L 28.204 44.134 L 28.204 49.444 L 30.859 49.444 L 30.859 44.134 L 33.514 44.134 L 33.514 46.789 L 38.824 46.789 L 38.824 41.479 L 41.479 41.479 L 41.479 44.134 L 44.134 44.134 L 44.134 46.789 L 46.789 46.789 L 46.789 49.444 L 49.444 49.444 L 49.444 22.894 L 46.789 22.894 L 46.789 38.824 L 44.134 38.824 L 44.134 36.169 L 41.479 36.169 L 41.479 33.514 L 38.824 33.514 L 38.824 14.929 L 36.169 14.929 L 36.169 25.549 L 33.514 25.549 L 33.514 20.239 L 30.859 20.239 L 30.859 6.964 L 28.204 6.964 L 28.204 20.239 L 25.549 20.239 L 25.549 25.549 L 22.894 25.549 L 22.894 14.929 L 20.239 14.929 L 20.239 33.514 L 17.584 33.514 L 17.584 36.169 L 14.929 36.169 L 14.929 38.824 L 12.274 38.824 L 12.274 22.894 L 9.619 22.894 Z"></path> </svg>
            </div>
           );
}

