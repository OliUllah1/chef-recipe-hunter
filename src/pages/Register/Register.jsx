import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error,setError]=useState('');
    const {createUserEmailAndPassword,setPhoto,setProfileName} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignIn=(event)=>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const photoUrl = from.photoUrl.value;
        setError('')
        setPhoto(photoUrl)
        setProfileName(name)
        if(password.length<6){
            setError('password must be 6 character')
            return;
        }

        createUserEmailAndPassword(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            from.reset();
            navigate('/')
            updateUserData(result.user,name,photoUrl)
        })
        .catch((error)=>{
            console.log(error)
            setError(error.message)
        })
       

    }
    const updateUserData =(user,userName,photoUrl)=>{
      updateProfile(user,{displayName:userName,photoURL:photoUrl})
      .then(()=>{
        console.log('user updated')
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
          <form onSubmit={handleSignIn}>
          <div className="card flex-shrink-0 w-80 lg:w-96 shadow-2xl bg-base-100">
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
                  required
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
                  required
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
                  required
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