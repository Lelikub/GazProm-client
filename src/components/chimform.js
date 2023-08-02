import axios from "axios";
import React from "react";

const baseUrl = "http://localhost:3001/chims";

class ChimForm extends React.Component{
    chim ={}
    constructor(props){
        super(props)
        this.state ={
            temp: 0,
            methane : 0,
            ethane: 0,
            propane: 0
        }
    }

    render(){
        return(
            <form ref={(el) => this.myForm = el} target="_self">
                <legend>Химические вещества</legend>
                <input placeholder="Температура K" onChange={(e)=> this.setState({temp:e.target.value})} required type="number" min="298" max="1000" step="any"/>
                <legend>Состав в процентах</legend>
                <input placeholder="Метан" onChange={(e)=> this.setState({methane:e.target.value})} type="number" min="0" max="100" step="any"/>
                <input placeholder="Этан" onChange={(e)=> this.setState({ethane:e.target.value})} type="number" min="0" max="100" step="any"/>
                <input placeholder="Пропан" onChange={(e)=> this.setState({propane:e.target.value})} type="number" min="0" max="100" step="any"/>
                <button id="button1" type='button'  onClick={() =>{

                    this.chim ={
                        temp: this.state.temp,
                        methane : this.state.methane,
                        ethane: this.state.ethane,
                        propane: this.state.propane
                    }
                    let a = Number(this.chim.methane) + Number(this.chim.ethane) + Number(this.chim.propane)
                    let b = Number(this.chim.temp)
                    
                    if((a > 100 || a < 100) || (b > 1000 || b < 273)){
                        function toggleText(button_id)  {
                            var text = document.getElementById(button_id).firstChild;
                            text.data = "Проверьте данные!"
                         } 
                         toggleText("button1")

                    }
                    
                    else {
                        //this.props.sChim(this.chim)
                        //this.myForm.reset()
                        axios.post(baseUrl,
                            {
                            "tempr": this.chim.temp,
                            "methane": this.chim.methane,
                            "ethane": this.chim.ethane,
                            "propane": this.chim.propane
                        }, ).then((res)=> {
                            function toggleText(button_id)  {
                                var text = document.getElementById(button_id).firstChild;
                                text.data = res.data + " Дж"
                             }
                            console.log(res.data)

                            toggleText("button1")}) // ПЕренос в api с подключением

                    }
                }
                }>Результат?</button>
            </form>
        )}

}

export default ChimForm