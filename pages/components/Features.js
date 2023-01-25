import React from 'react'
import {FaFirstdraft} from 'react-icons/fa'
import {BsLightningCharge} from 'react-icons/bs'
import {TfiMoney} from 'react-icons/tfi'
import {CgTemplate} from 'react-icons/cg'
import {AiOutlineCodepenCircle} from 'react-icons/ai'
import {RiComputerLine} from 'react-icons/ri'
const Features = () => {
    return (
        <section className='mt-10'>
            <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">Website Builder</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <div className="icon-wrapper">
                            <FaFirstdraft />
                        </div>
                        <h3>Professional Website Builder</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="icon-wrapper">
                           <BsLightningCharge/>
                        </div>
                        <h3 >World's Fastest Websites</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="icon-wrapper">
                            <TfiMoney/>
                        </div>
                        <h3>Low Price Domain</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="icon-wrapper">
                            <CgTemplate/>
                        </div>
                        <h3>100+ Templates</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="icon-wrapper">
                           <AiOutlineCodepenCircle/>
                        </div>
                        <h3>80+ Components</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="icon-wrapper">
                           <RiComputerLine/>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Features