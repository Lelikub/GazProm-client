import React from "react";
import ChimForm from "./components/chimform";
class App extends React.Component{
    render(){
        return(
            <div className="name">
                <header>
                <nav>
                    <div><a href="./">Расчет теплоты сгорания</a></div>
                    <div ><a href="./">Химические вещества</a></div>
                </nav>
                </header>
            <main>
                <ChimForm sChim ={this.sendChim}/>
            </main>
            </div>
        )}

    sendChim(test){
        console.log(test)
    }

}

export default App