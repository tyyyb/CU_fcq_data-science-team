import React, { useEffect, useRef } from "react"

const { tableau } = window;

function TableauEmbed() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Tableau_FCQ/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link";

    function initViz() {
        new tableau.Viz(ref.current, url);
    }

    useEffect( () => {
        initViz();
    }, [])

    return(
        <div>
            <p>Test</p>
            <div ref = {ref}></div>
        </div>
    )
}

export default TableauEmbed;