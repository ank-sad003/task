import axios from "axios";
import Like from '../components/images/like.svg'
import People from '../components/images/People.svg'
import Transaction from '../components/images/Vector.svg'
import Revenue from '../components/images/Revenue.svg'


const prepCards = (data) => {
    const colors = ['#7FCD93', '#DEBF85', '#ECA4A4', '#A9B0E5'];
    const icons = [<Transaction/>,<Revenue/>,<Like/>,<People/>]
    const labels = ['Total Revenues', 'Total Transactions', 'Total Likes', 'Total Users']
    let cards = []

    for(let i=0; i<data.cards.length; i++){
        cards.push({
            delay: i*100,
            value: data.cards[i],
            color: colors[i],
            label: labels[i],
            icon: icons[i],
            percentage: data.percentage[i]
        })
    }
    return cards
}

const prePie = (data) => {
    const colors = ['#98D89E', '#F6DC7D', '#EE8484']
    const labels = ['Basic Tees', 'Custom Short Pants', 'Super Hoodies']
    
    return {
        labels,
        colors,
        values: [data.pie.basic_tees, data.pie.short_pants, data.pie.super_hoodies]
    }
}

const prepChart = (data) => {
    return {
        labels: data.chart.labels,
        data1: data.chart.data1,
        data2: data.chart.data2
        
    }
}

export const refresh = () => {
    return new Promise(async (resolve, reject) => {

        await axios.get(`https://first-app-rust-seven.vercel.app`)
        .then((response) => {
            resolve({
                cards: prepCards(response.data),
                pie: prePie(response.data),
                chart: prepChart(response.data)
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
}