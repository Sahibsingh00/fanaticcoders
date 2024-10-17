import React from 'react';
import Image from 'next/image'

const Portfolio = () => {
    return (
        <section className='tfc_portfolio_section pt-36'>
            <div className='tfc_section_title'>
                <div className='tfc_container'>
                    <h2>OUR WORK</h2>
                </div>
            </div>
            <div className='tfc_portfolio mt-3'>
                <div className='tfc_container'>
                    <div className='tfc_title_main pb-6'>
                        <h1>Selected Work</h1>
                    </div>
                    <div className='tfc_portfolio_items'>
                        <div className='column'>
                            <div className="tfc_item relative mb-6">
                                <div className="image-cover1 image-cover" style={{ backgroundImage: 'url(/images/Banner-img1.jpg)'}}>
                                    <div className="content">
                                        <div>
                                            <h3>Elane Store</h3>
                                            <p className="main-para">Women's Clothing Store</p>
                                            <div className="buttons">
                                                <button className="simple-btn">Design</button>
                                                <button className="simple-btn">Development</button>
                                                <button className="simple-btn">Maintenance</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tfc_item relative mb-6">
                                <div className="image-cover1 image-cover" style={{ backgroundImage: 'url(/images/BannerImg2.jpg)'}}>
                                    <div className="content">
                                        <div>
                                            <h3>Elane Store</h3>
                                            <p className="main-para">Women's Clothing Store</p>
                                            <div className="buttons">
                                                <button className="simple-btn">Design</button>
                                                <button className="simple-btn">Development</button>
                                                <button className="simple-btn">Maintenance</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="tfc_item relative mb-6 pt-16">
                                <div className="image-cover1 image-cover" style={{ backgroundImage: 'url(/images/BannerImg3.jpg)'}}>
                                    <div className="content">
                                        <div>
                                            <h3>Elane Store</h3>
                                            <p className="main-para">Women's Clothing Store</p>
                                            <div className="buttons">
                                                <button className="simple-btn">Design</button>
                                                <button className="simple-btn">Development</button>
                                                <button className="simple-btn">Maintenance</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tfc_item relative mb-6">
                                <div className="image-cover1 image-cover" style={{ backgroundImage: 'url(/images/BannerImg4.jpg)'}}>
                                    <div className="content">
                                        <div>
                                            <h3>Elane Store</h3>
                                            <p className="main-para">Women's Clothing Store</p>
                                            <div className="buttons">
                                                <button className="simple-btn">Design</button>
                                                <button className="simple-btn">Development</button>
                                                <button className="simple-btn">Maintenance</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio