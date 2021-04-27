import React, { useEffect, useRef, useState } from "react";

const { tableau } = window;

function Home() {

    return (
        <div>
            <h1>CU Boulder FCQ Analysis</h1>
            <br></br>

            <h3> About </h3>
            <p> This project examines the FCQ data provided by CU boulder, and is provide better Tableau visualization 
                dashboards for </p>
            <p> the data. Currently the data is broken into two dashboards, the first dashboard provides analyzes the 
                relation between the instructor and </p>
            <p> the average course results. Dashboard two focuses more on the instructors specifically and sees which cluster of 
                the data they belong to. </p>
            <br></br>

            <h3> Tools </h3>
            <p> The data we used is available for anyone to utilize on the 
                CU Boulder  <a href="https://www.colorado.edu/fcq/boulder-fcq-results">FCQ site</a>, we want to continue making improvements</p>
            <p> to the site ideally incorporating more of the data provided, as well
                as creating more dashboards with greater filtering capabilities.  </p>
            <p> For cleaning the data we used the Python, pandas library, and utilized Tableau for the visulization component. </p>
            <br></br>

        </div>
    );
}

export default Home;