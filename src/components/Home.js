
import React, { useEffect } from 'react'
import { Button } from "react-bootstrap";

export const Home = ({algo}) => {

    useEffect(() => {
        console.log(algo);
    }, [])



    return (
        <div>
            <h1>HOME</h1>
            { algo 
                ? 
                <>
                <h2>Esto es parte del HOme con el algo en TRUE</h2> 
                <p>lorem ipsum dolor sit amet, con</p>
                </>
                : 
                <>
                <h2>No Algo</h2> 
                <hr />
                <br />
                <p>lorem ipsum dolor sit amet, con</p>
                </>
            }
             <Button variant="pistacho">Primary</Button>
        </div>
    )
}
