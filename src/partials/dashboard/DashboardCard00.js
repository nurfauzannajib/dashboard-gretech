import React, { useState, useEffect } from "react";
import RealtimeChart from "../../charts/LineChart03";
import Info from "../../utils/Info";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function DashboardCard00() {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);

  // Dummy data to be looped
  const data = [6, 7, 7, 6.25, 6.4, 6.31, 6.32, 6.43, 8, 7.4, 7.3, 7.2];

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        data[increment + range],
      ]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white rounded-sm border border-gray-200">
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100 flex items-center">
          <h2 className="font-semibold text-gray-800">pH</h2>
          <Info className="ml-2" containerClassName="min-w-44">
            <div className="text-sm text-center">Kadar pH</div>
          </Info>
        </header>
        {/* Chart built with Chart.js 3 */}
        {/* Change the height attribute to adjust the chart height */}
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        <RealtimeChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard00;
