const tableValues = document.getElementById("tableValues");
Chart.defaults.color = '#FFFFF';

function loadData() {
  const graphic = document.getElementById("myChart").getContext("2d");

  axios.get("https://api.coincap.io/v2/assets").then((response) => {

      console.log(response.data);

      const labels = response.data.data.map((item) => {
        return item.symbol.toUpperCase();
      });

      const prices = response.data.data.map((item) => {
        return parseInt(item.priceUsd);
      });

      console.log(labels[0]);
      console.log(prices[1]);

      const myChart = new Chart(graphic, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Dolar price",
                        data: prices,
                        fill: true,
                        backgroundColor: "#F56783",
                        borderColor: "#F56783"
                    },
                ],
            },

            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: "Crypto Prices Chart"
                    }
                },
                scales: {
                    x: {
                        display: true
                    }
                }
            }
        })

      tableValues.innerHTML = "";

      for (const valor of response.data.data) {
        if (parseInt(valor.priceUsd) > 100) {
          let tr = `<tr>
            <td>${valor.symbol}</td>
            <td>${valor.name}</td>
            <td>${parseInt(valor.priceUsd)}</td>
            </tr> `;
          tableValues.innerHTML += tr;
        }
      }
    })
    .catch(() => {
      console.log("It doesnt work");
    });
}

loadData();



// Estudie 5 minutos xd
