// components/CollatzGraph.js
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


const CollatzGraph = ({ data }) => {
    const options = {
        // Add any chart options you need
    };
    
    return <Line data={data} />;
};

export default CollatzGraph;
