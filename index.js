import axios from "axios";
import randomstring from "randomstring";
import "./style.scss"
axios.get("https://api.monobank.ua/bank/currency")
    .then((res)=> {
        console.log(res)
    })

console.log(randomstring.generate(10))