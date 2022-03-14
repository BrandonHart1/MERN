import React, { useState } from  'react';
// Can I import styled here?

// --------------- MoreForm object using Functional Components --------------
const MoreForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    
    return(
        // --------------- Beginning of JSX ---------------
        <form>
            <div>
                <div className="form-group mb-3" placeholder="First Name">
                    <label>First Name: </label>
                    <input type="text" name="fName" className="form-control" onChange={ (e) => setFirstName(e.target.value) } />
                    
                    {
                        // Ternary Statement - checking for valid first name
                        firstName.length < 2 && firstName.length>0? <p className='text-danger'>First Name must be at least 2 characters</p> : null
                    }
                </div>
                <div className="form-group mb-3" placeholder="Last Name">
                    <label>Last Name: </label>
                    <input type="text" name="lName" className="form-control" onChange={ (e) => setLastName(e.target.value) } />
                    {
                        // Ternary Statement - checking for valid last name
                        firstName.length < 2 && lastName.length>0? <p className='text-danger'>Last Name must be at least 2 characters</p> : null
                    }
                </div>
                <div className="form-group mb-3" placeholder="Email">
                    <label>Email: </label>
                    <input type="email" name="email" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    {
                        // Ternary Statement - Checking for valid email
                        email.length < 2 && email.length>0? <p className='text-danger'>Email must be at least 2 characters</p> : null
                    }
                </div>
                <div className="form-group mb-3" placeholder="Password">
                    <label>Password: </label>
                    <input type="password" name="password" className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    {
                        // Ternary statement - checking for valid password
                        password.length < 2 && password.length>0? <p className='text-danger'>Password must be at least 2 characters</p> : null
                    }
                </div>
                <div className="form-group mb-3" placeholder="Confirm Password">
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={ (e) => setConfirmPassword(e.target.value) } />
                    {
                        confirmPassword.length < 2 && confirmPassword.length>0? <p className='text-danger'>Password must be at least 2 characters</p> : null
                    }
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default MoreForm;

