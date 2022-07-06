import { products } from "./View";
import { IProduct } from './IProduct'
import Product from './Product'
import { Link, Outlet  } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Edit from './Edit'
import React, { Component } from 'react';
// import { useState } from 'react';

export default class HomePage extends Component {
  // plist: IProduct[] = [];
  productSearched: Product[] | undefined;
  state = {
    searchByName: "",
    productsList: products ,
  };

  my(id: number) {
    return true;
  }

  inNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ searchByName: e.currentTarget.value });
    // = e.currentTarget.value;
    alert(`newName, ${this.state.searchByName}`);
    console.log(this.state.searchByName);
  }
  
  search() {
    const pl = products.filter(product => product.Name.startsWith(this.state.searchByName));
    this.productSearched = pl;
     this.setState({ productsList: pl });
    this.productSearched.forEach(product =>alert(`product, ${product.Name}`));
    // this.state.productsList.forEach(product =>alert(`product, ${product.Name}`));
    // pl.forEach(product => alert(`product, ${product.Name}`));
    // return (<ul>
    //   {productsList.forEach(product => <li>{ product.Name}</li>)}
    //    </ul>)
  }

  render() {
    return (
      <>
        {/* דיב רייק שצועק אם מוחקים אותו... */}
        <div>
        </div>
        <div>המוצרים שלנו</div>
        <tbody>
        {products.map((item) => {
          //item = אוביקט מהמערך                               // changed here
          console.log('item: ', item);
          return (
            <tr> 
              <td><Button> <Link to={"/homePage/" + (item.Id )}>edit </Link> </Button></td>
              {/* ניגש לאוביקט ועובר על הערכים שלו */}
              {Object.entries(item).map((field) => {        // changed here
              //  filed= האוביקט הנוכחי בשדה הנוכחי
                console.log('field: ', field);
                return <td >{field[1]}   </td>
              })}
            </tr>
          );
        })}
        </tbody>

        <form>
          {
             <label> enter name of search
              <input id="newNameOfProduct" name="newNameOfProduct" onChange={this.inNameChange} />
              <button onClick={() => this.search()}>search</button>
            </label>
          }
        </form>
        {/* הצגת תוצאות החיפוש */}
        {/* לבדוק איך לשמור את תוצאות החיפוש, המערך productSearched מאוד מהר מתרנדר */}
        <div>Products found:</div>
        <tbody>
        {this.productSearched?.map((item) => {
          //item = אוביקט מהמערך                               // changed here
          console.log('item: ', item);
          return (
            <tr>
            {/* <td><Button onClick={() => <Link to={"/HomePage/" + (item.Id)}>{item.Id} </Link>}> {item.Id}</Button></td> */}
            {/* ניגש לאוביקט ועובר על הערכים שלו */}
            {Object.entries(item).map((field) => {        // changed here
            //  filed= האוביקט הנוכחי בשדה הנוכחי
              console.log('field: ', field);
              return <td >{field[1]}   </td>
            })}
            </tr>
          );
        })}
        </tbody>
        <div>
            {/* <h3>Selected Books</h3> */}
            {/* כאן נכנס החלק של הניתוב שאמור להתחלף - בניתוב פנימי */}
              <Outlet />
          </div>
        {/* <div>
          {
            this.state.productsList.forEach((product) => {
              <span>{ product.Name}</span>
            });
          }
        </div> */}
       
       
      </>
    );
    
    // <>
    //     <ul>
    //     {products.map(function(item) {
    //       return <li key={item.Id}>{item.Name}</li>;
    //     })}
    //   </ul>
    //   <h1>hello</h1>
    // </>
  }
  //   export default Counter;
}
// export default HomePage;