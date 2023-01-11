import React, { useState, useEffect } from "react";
import mongoose from 'mongoose'
import Cookies from 'js-cookie';
import { parseCookies } from 'nookies';
import { MdOutlineEditNote } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import Link from 'next/link'


const PageCreate = ({ user, page }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('')

  const [isValid, setIsValid] = useState(true);
  const [pages, setPages] = useState(page)
  console.log('page', page)
  // const [error, setError] = useState(null)
  const [token, settoken] = useState(null)


  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    const res =await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/createPage`,{
      method:"POST",
      headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Authorization": token
        },
        body:JSON.stringify({name})
  })
  const response = await res.json()
  // console.log(response)
  window.location.reload();
   };


  useEffect(() => {
    // setName(user.name)
    setEmail(Cookies.get('useremail'))
    settoken(Cookies.get('token'))


    if (!Cookies.get('token')) {
      router.push('/')
    }
  }, [])


  return (
    <>
      <div>
        <section className="text-gray-600 body-font">

          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Website Builder</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep.</p>
            </div>

            <form id="create-page">
              <div className="modal-header flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                  <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Create new page</label>
                  <input
                    type="text"
                    className={`form-control form-control-sm w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${isValid ? "" : "is-invalid"
                      }`}
                    id="name"
                    name="name"
                    placeholder="Name of Page"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  data-bs-dismiss="modal"
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>

            </form>

            <div className="flex flex-col text-center w-full mt-12">
              <h2 className="sm:text-xl text-xl font-medium title-font mb-4 text-gray-900">My Web Pages</h2>
              {/* {error && (
          <div role='alert' className='alert alert-primary'>
          {error}
          </div>
        )} */}
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Slug</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                {pages
                    ? pages.map((p) => (
                      <tr key={p._id}>
                        <td>{p._id}</td>
                        <td>{p.name}</td>
                        <td>{p.slug}</td>
                        <td>
                          {/* <Link to={`/editor/${page._id}`}>Edit</Link> */}
                          <div className="flex">
                          <Link passHref={true} key={p._id} href={`/Editor/${p._id}`} >
                          <MdOutlineEditNote size={30} color={'blue'}/>
                          </Link>
                          <FaRegTrashAlt size={20} color={'red'}/>
                          </div>
                        </td>
                      </tr>
                    ))
                    : "No Page"}
                    
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
export const getServerSideProps = async (context) => {
  mongoose.connect(process.env.MONGO_URL)
  const { token } = parseCookies(context)
  if (!token) {
    return {
      props: { user: [] }
    };
  }
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
    headers: {
      "Authorization": token
    }
  })
  const user = await res.json()
  // console.log('user',user)
  let res2 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUserPage`, {
    headers: {
      "Authorization": token
    }
  })
  const page = await res2.json()
  // console.log('page',page)
  if (user.error) {
    return {
      props: { error: user.error }
    };
  }
  // console.log("products", products)


  return {
    props: { user, page }
  };
};
export default PageCreate