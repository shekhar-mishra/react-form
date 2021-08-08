import React, { Fragment, useState } from 'react'
function FunctionalForm (props) {
    const [values,setValues] = useState({
        firstName:'',
        lastName:''
    })

   const hndleSubmit =(event)=>{
 console.log(event)
    }
    const handleChange = (event)=>{
        setValues((value)=>({
            ...values,
            firstName:event.target.value
    }))
    }

    return (
            <Fragment>
                <h3>Functional Component</h3>
                <form onSubmit={hndleSubmit}>
                <label htmlFor="firstName">First Name</label><br/>
                <input type="text" name="firstName" id="firstname" value={values.firstName} onChange={handleChange} />
                <input type="submit"/>
                </form>
            </Fragment>
    )
}

export default FunctionalForm;