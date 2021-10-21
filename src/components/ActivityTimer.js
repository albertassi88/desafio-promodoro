import React, {useState, useEffect} from "react";

function ActivityTimer() {
    const [twentyFiveSeconds, setwentyFiveSeconds] = useState(25);

    useEffect(() => {
        const ONE_SECOND = 1000;
        const interval = setInterval(() => {
            clearInterval(interval);
            if(twentyFiveSeconds !== 0) {
                setwentyFiveSeconds(twentyFiveSeconds - 1)   
            }
        }, ONE_SECOND)
    }, [twentyFiveSeconds])

   return (
        <div>
            <p>{twentyFiveSeconds}</p>
        </div>
    );
}

export default ActivityTimer;