import React, { Fragment } from 'react'
import HOC from './WithHoc'
class FormComponent extends React.Component {
    constructor(props){
        super(props)
        this.input = React.createRef();
        this.fileInput = React.createRef()
    }
   
    onSubmit=(e)=>{
        console.log("this===",this)
        e.preventDefault()
         console.log(e,this.input.current.value,this.fileInput.current.files[0].name)
    }
    render () {
        return (
            <Fragment>
                {this.props.name}
               <form onSubmit={this.onSubmit} method="post" >
               <label htmlFor="fName" onMouseOver={this.props.onMouseOver}>First Name {this.props.count}</label><br></br>
                <input type="text" name="fName" id="fName" placeholder="Enter First Name" ref={this.input}/>
                <label htmlFor="file">File Upload</label><br></br>
                <input type="file" name="file" id="file" ref={this.fileInput}/><br></br>
                <button type="submit">Submit</button>
               </form>
            </Fragment>
        )
    }
}

export default HOC(FormComponent);