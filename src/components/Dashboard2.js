import React, { useEffect, useRef, useState } from "react"

const { tableau } = window;

function Dashboard2() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Tableau_FCQ/Final_2?:language=en&:display_count=y&:origin=viz_share_link"

      const options = {
          device: "desktop"
      };
    
      function initViz() {
        new tableau.Viz(ref.current, url, options);
      };
    
      useEffect(() => {
          initViz();
      },[]);
    
      return (
        <div>
          <div style={setVizStyle} ref={ref} />
        </div>
      );
    }
    
    const setVizStyle = {
      width: "1000",
      height: "550px",
    };

export default Dashboard2;

