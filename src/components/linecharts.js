import { useEffect } from "react"
import { Chart } from "chart.js";
function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          data: [120, 45, 108, 23, 123, 86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div style={{width: '100%'}} className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas  id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default LineChart;