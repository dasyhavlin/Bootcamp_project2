import { products } from "./View";
import { IProduct } from './IProduct';
// import { Product } from './Product';
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";
export default class Edit extends Component{
    state = {
        p: 1,
        newName: "",
        // editId : useParams(),
    };
    idProduct:number = 0;
// נסיון להכניס ערך ל p
    onFileChange = () => {
        this.setState({ p: 1 });
        console.log("p"+this.state.p);
        // <Link to={"/About/" + (this.state.selectedFile.name)}>{this.state.selectedFile.name} </Link>
    };
    
    // בזמן שינוי של השם מוצר ב input 
    // בכל שינוי - מתעדכן המשתנה הסטטי- newName
    onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ newName: e.currentTarget.value });
        // = e.currentTarget.value;
        console.log(this.state.newName);
        // console.log(this.state.editId);
    }
 
    // בגמר שינוי השם - בזמן לחיצה על save
    // שולף את המוצר הנוכחי עפ"י ה id  שלו שנשלח ומעדכן את השם שלו.
// איזה באסה!
// השינוייםלא באמת נשמרים מחוץ לפונקציה, למה???
    saveName(id: number) {
        alert(`id, ${id}`);
        alert(`newName, ${this.state.newName}`);
        products.forEach(p => {
            if (p.Id === id) {
                p.Name = this.state.newName ;
                alert(`newName in products, ${p.Name}`);
                // product.Name = this.state.newValue;
            }
        });
        this.idProduct = id;
        alert(`and???, ${products.find(p => p.Id === id)?.Name}`);
        this.my()
    }
    my() {
        alert(`and???, ${products.find(p => p.Id === this.idProduct)?.Name}`);
    }
      
    render() {
    //    {this.setState({ p: 1 });} 
        return (
            <div>
                <h1>Edit</h1>
                <form>
                    {
                        <label> {products.find(product => product.Id == 1 /*this.state.p*/)?.Name}
                            <input type="text" id="newNameOfProduct" name="newNameOfProduct" onChange={this.onNameChange} />
                        <button onClick={() => this.saveName(this.state.p)}>save</button>
                        </label>
                    }
                </form>
            </div>)
    }
}
        
    // <>
    //     <ul>
    //     {products.map(function(item) {
    //       return <li key={item.Id}>{item.Name}</li>;
    //     })}
    //   </ul>
    //   <h1>hello</h1>
    // </>
    
  
  //   export default Counter;

// export default HomePage;