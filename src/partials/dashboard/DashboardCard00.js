import React, { useState, useEffect } from "react";
import RealtimeChart from "../../charts/RealtimeChart";
import Info from "../../utils/Info";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

const data = ["0"];

function DashboardCard00() {
  const [dataSensor, setDatasensor] = useState();
  fetch("https://mbr-productions.my.id/get-data.php")
    .then((res) => res.json())
    .then(
      (result) => {
        setDatasensor(result[0]["co"]);
        console.log(dataSensor);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        // this.setState({});
      }
    );

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);

  // Dummy data to be looped
  // const arrayData = [];

  data.push(dataSensor);
  // arrayData.push(dataSensor);

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
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100 flex items-center">
          <h2 className="font-semibold text-gray-800">TDS</h2>
          <Info className="ml-2" containerClassName="min-w-44">
            <div className="text-sm text-center">Kadar TDS</div>
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
