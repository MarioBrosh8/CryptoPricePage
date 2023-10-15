const tableValues = document.getElementById("tableValues")

function loadData() {
    const chart = document.getElementById("myChart").getContext("2d");

    axios.get('https://api.coincap.io/v2/assets').then((response) => {

        console.log(response.data);

        const labels = response.data.data.map(item => {
            return item.symbol.toUpperCase();
        })

        const prices = response.data.data.map(item => {
            return parseInt(item.priceUsd);
        })

    }).catch(() => {
        console.log ("No Funciona")
    })
    

}

loadData();

