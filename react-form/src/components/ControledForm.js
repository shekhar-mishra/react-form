import React, { Fragment } from 'react'

class ControledForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
                name:'',
                age:'',
                email:''                

        }
    }

    handleChange = (event)=>{
        console.log("while typing text====",event.target.value)
        this.setState({
            name:event.target.value
        })
    }

    render(){
        return (
            <Fragment>
                <h3>Controlled Form Component Demo</h3>
                <label htmlFor="fName">First Name</label><br/>
                <input type="text" name="fName" id="fName" placeholder="Enter first name" value={this.state.name} onChange={this.handleChange}/>
            </Fragment>
        )
    }
}

export default ControledForm;