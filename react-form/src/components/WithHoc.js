 import React from 'react'
// const HOC = (WrappedComponent)=>{
//     return class newComponent extends React.Component {
//         constructor(props){
//             super(props)
//                 this.state={
//                     count:0
                
//             }
//         }

//         onMouseOver=()=>{
//             console.log("onmousehover form componnet")
//             this.setState({
//                 count:this.state.count+1
//             })
//             // this.setState((prevState)=>({
//             //     ...prevState,
//             //     count:this.state.count +1
//             // }))
//         }
//         render (){
//             return (
//                 <WrappedComponent name="shekarrr" count={this.state.count} onMouseOver={this.onMouseOver.bind(this)} />
//             )
//         }
//     }

// }

// export default HOC;


// =============================

const HOC = (WrappedComponent)=>{
    return function NewComponent(){
       const  onMouseOver=()=>{
                        console.log("onmousehover form componnet")
                        
                       
                    }
        return (
           <div>
               <h1>Hello from HOCCC</h1>
               <WrappedComponent name="shekhar" onMouseOver={onMouseOver}  /> 
           </div>
        )
    }
}

export default HOC;