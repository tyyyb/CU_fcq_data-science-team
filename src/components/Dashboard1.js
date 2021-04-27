import React, { useEffect, useRef, useState } from "react";

const { tableau } = window;

function Dashboard1(props) {
    const [url] = useState(
        "https://public.tableau.com/views/Tableau_FCQ/Final_1?:language=en&:display_count=y&:origin=viz_share_link"
    );
    const ref = useRef(null);

    const options = {
        device: "desktop"
    };

    function initViz() {
        new tableau.Viz(ref.current, url, options);
    };

    useEffect(() => {
        initViz();
    }, []);

    return (
        <div>
            <div style={setVizStyle} ref={ref} />
        </div>
    );
}

const setVizStyle = {
    width: "1069px",
    height: "550px",
};

export default Dashboard1;