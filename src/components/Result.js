import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

const Result = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {
    correct: 0,
    wrong: 0,
    skipped: 0,
    totalScore: 0,
    grade: 'N/A'
  };
  // Data for the Doughnut Chart
  const chartData = {
    labels: ['Correct', 'Wrong', 'Skipped'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [data.correct, data.wrong, data.skipped],
        backgroundColor: [
          '#56b45c',
          'rgba(255, 99, 132)',
          'rgba(255, 206, 86)'
        ],
        borderColor: [
          '#56b45c',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Doughnut Chart
  const chartOptions = {
    plugins: {
      datalabels: {
        color: '#555',
        textAlign: 'center',
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex] + '\n' + value;
        },
      },
    },
  };

  const playAgain = () => {
    // Navigating to the root route with a unique key to force remount.
    navigate('/', { state: { key: new Date().getTime() } });
  };


  return (
    <section className='result-section '>
      <div className='container-fluid'>
        <div className='d-flex justify-content-end me-5'>
          <button onClick={() => toPDF()} className='btn btn-dark me-4'>Download</button>
          <button onClick={playAgain} className='btn btn-dark'>Play Again</button>
        </div>
        <h2 className='result-heading'>Quiz Results</h2>
        <div className='row' ref={targetRef}>
          <div className='col-md-6'>
            <div className="result-container">
            <h2 className='mb-2 text-center'>Your Result</h2>
              <table className="result-table">
                <tbody>
                  <tr>
                    <th>Correct Answers</th>
                    <td>{data.correct}</td>
                  </tr>
                  <tr>
                    <th>Wrong Answers</th>
                    <td>{data.wrong}</td>
                  </tr>
                  <tr>
                    <th>Skipped</th>
                    <td>{data.skipped}</td>
                  </tr>
                  <tr>
                    <th>Total Score</th>
                    <td>{data.totalScore}</td>
                  </tr>
                  <tr>
                    <th>Grade</th>
                    <td>{data.grade}</td>
                  </tr>
                </tbody>
              </table>

              <h2 className='py-2 text-center'>Grades Criteria</h2>
              <table class=" result-table">
                <thead>
                  <tr>
                    <th>Percentage Range</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>90% and above</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>80% - 89%</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>70% - 79%</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>60% - 69%</td>
                    <td>D</td>
                  </tr>
                  <tr>
                    <td>Below 60%</td>
                    <td>F</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='col-md-6'>
              <div className='chart-container'>
                <Doughnut data={chartData} options={chartOptions} />
                <div className='chart-data-display text-dark'>
                  <p>Correct: {data.correct}</p>
                  <p>Wrong: {data.wrong}</p>
                  <p>Skipped: {data.skipped}</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Result;
