import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Donut: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [series, setSeries] = useState<number[]>([44, 55, 41, 17, 15]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [options, setOptions] = useState<ApexCharts.ApexOptions>({
        labels: ['A', 'B', 'C', 'D', 'E'],
    });

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut" width="380" />
        </div>
    );
};

export default Donut;
