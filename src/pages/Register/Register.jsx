import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [error,setError]=useState('');
    const {createUserEmailAndPassword} = useContext(AuthContext);
    const handleSignIn=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        
        setError('')
        if(!email){
            setError('you can not provide your email')
            return;
        }else if(!password){
            setError('you can not provide your password')
        }
        else if(password.length<6){
            setError('password must be 6 character')
            return;
        }
        createUserEmailAndPassword(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            from.reset();
        })
        .catch((error)=>{




            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <form onSubmit={handleSignIn} action="">
          <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
            <div className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name='photoUrl'
                  placeholder="photo url"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt mt-2">
                  Already have a account? <Link to='/login'><a className="link link-accent">login now</a></Link>
                  </a>
                </label>
                {<a className=' text-red-700 text-sm'>{error}</a>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>

            </div>
          </div>
          </form>
        </div>
      </div>
    );
};

export default Register;