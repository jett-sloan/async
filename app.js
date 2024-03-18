class Number {
    constructor(favNumber) {
        this.favNumber = favNumber
        this.url = "http://numbersapi.com"
    }
    async favNumberFact() {

        let res = await axios.get(`${this.url}/${this.favNumber}?json`);
        console.log(res.data)

    }
    async multiFavNumbersFacts() {
        const factPromises = [];
        const div = document.getElementById('apiDataFavNum')
        for (let i = 0; i < 4; i++) {
            let res = await (axios.get(`${this.url}/${this.favNumber}?json`))
            factPromises.push(res);
            const favFactElement = document.createElement('p');
          favFactElement.textContent = res.data.text
          div.appendChild(favFactElement)
        }
        
    }

    async multiNumbers() {
        let multipleNum = []
        const divTwo = document.getElementById('apiData')
        for (let i = 1; i < 4; i++) {
            let res = await(axios.get(`${this.url}/${i}?json`))
            multipleNum.push(res.data)
            const multiFacts = document.createElement('p')
            multiFacts.textContent = res.data.text
            divTwo.appendChild(multiFacts)
        }
        
    }
}


let fNum = new Number(7);
fNum.multiFavNumbersFacts()
const numberInstance = new Number();
numberInstance.multiNumbers()

