import React, { useEffect, useRef } from "react"

const { tableau } = window;

function TableauEmbed() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

    function initViz() {
        new tableau.Viz(ref.current, url);
    }

    useEffect( () => {
        initViz();
    }, [])

    return(
        <div>
            <p>Hello world</p>
            <div ref = {ref}></div>
        </div>
    )
}

export default TableauEmbed;