import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {
    const [error,setError]=useState('');
    const navigate = useNavigate()
    const {signInEmailAndPassword,signInGoogle,signInGitHub}=useContext(AuthContext);
    const handleSignIn=(event)=>{
        event.preventDefault();
        const from =event.target;
        const email = from.email.value;
        const password = from.password.value;
        setError('');
        if(!email){
            setError('please enter your email')
        }
        else if(!password){
            setError('please enter your password')
        }
        signInEmailAndPassword(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user)
            from.reset();
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleSignInGoogle=(event)=>{
        signInGoogle()
        .then((result)=>{
            const user =result.user;
            console.log(user)
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleSignInGitHub=(event)=>{
        signInGitHub()
        .then((result)=>{
            const user =result.user;
            console.log(user)
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="">
            <h1 className="text-5xl font-bold">Please Login</h1>
          </div>
          <form onSubmit={handleSignIn} action="">
          <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
            <div className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt">
                  New here? <Link to='/register'><a className="link link-accent">Create an a account</a></Link>
                  </a>
                </label>
                {<a className=' text-red-700 text-sm'>{error}</a>}
              </div>
              <div className="form-control mt-4 mb-3">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">Or</p>
              <hr />
              

            </div>
          </div>
          </form>
         <div className=" bg-base-100 w-full">
                <div className="form-control mt-1">
                    <button onClick={handleSignInGoogle} className="btn"><FaGoogle className=""></FaGoogle><span className="ml-4"> Login with Google</span></button>
                </div>
                <div className="form-control mt-1">
                    <button onClick={handleSignInGitHub} className="btn"><FaGithub></FaGithub> <span className="ml-4"> Login with GitHub</span></button>
                </div>
         </div>
        </div>
      </div>
  );
};

export default Login;
