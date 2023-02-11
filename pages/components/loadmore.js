import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'


const Loadmore = () => {

    const img = [
        {
            'id': 1,
            'location': '/img/green.PNG'
        },
        {
            'id': 2,
            'location': '/img/candles.PNG'
        },
        {
            'id': 3,
            'location': '/img/food2front-min.png'
        },
        {
            'id': 4,
            'location': '/img/foodwebfront-min.png'
        },
        {
            'id': 5,
            'location': '/img/gymwebfront-min.png'
        },
        {
            'id': 6,
            'location': '/img/landingfront-min.png'
        },
        {
            'id': 7,
            'location': '/img/portfoliofront-min.png'
        },
        {
            'id': 8,
            'location': '/img/purplewebfront-min.PNG'
        },
        {
            'id': 9,
            'location': '/img/yellow.PNG'
        },
        {
            'id': 10,
            'location': '/img/green.PNG'
        },
        {
            'id': 11,
            'location': '/img/green.PNG'
        },
        {
            'id': 12,
            'location': '/img/green.PNG'
        },
        {
            'id': 13,
            'location': '/img/green.PNG'
        },
        {
            'id': 14,
            'location': '/img/green.PNG'
        },
        {
            'id': 15,
            'location': '/img/green.PNG'
        },
        {
            'id': 16,
            'location': '/img/green.PNG'
        }

    ]
    const [post, setPost] = useState(img)
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(6)
    const initialPosts = slice(post, 0, index)
    // const getData = () => {
    //     fetch('http://localhost:3000/api/images')
    //         .then((res) => res.json())
    //         .then((json) => setPost(json))
    //         .catch((e) => console.log(e))
    // }
    const loadMore = () => {
        setIndex(index + 3)
        console.log(index)
        if (index >= post.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }
    useEffect(() => {
        // getData()
        console.log(post)
    }, [])


    return (
        <>
            {/* <div>
                <h2 className="mb-3">React Js Load More Example</h2>
                {initialPosts.map((item) => {
                    return (
                        <div
                            className="mb-3 card bg-primary p-2 text-dark bg-opacity-25"
                            key={item.id}
                        >
                            <div className="card-body">{item.id}</div>
                        </div>
                    )
                })}
                <div className="d-grid mt-3 mb-5">
                    {isCompleted ? (
                        <button
                            onClick={loadMore}
                            type="button"
                            className="btn btn-danger disabled"
                        >
                            That's It
                        </button>
                    ) : (
                        <button onClick={loadMore} type="button" className="btn btn-danger">
                            Load More +
                        </button>
                    )}
                </div>
            </div> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-5xl font-medium title-font mb-4 text-gray-900 tracking-widest">Select The Template</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">

                        {initialPosts.map((item) => {
                            return (
                                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.location} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                        <p className="mt-1">$16.00</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="mt-3 mb-5">
                        {isCompleted ? (
                            <button
                                onClick={loadMore}
                                type="button"
                                className="flex mx-auto mt-20 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                            >
                                That's It
                            </button>
                        ) : (
                            <button onClick={loadMore} type="button" className="flex mx-auto mt-20 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Load More +
                            </button>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Loadmore
