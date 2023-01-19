import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className='Sidebar-Container'>
                <div className="Sidebar-TodaysEvents-Text"> Today's Events </div>
                <div className="Sidebar-TodaysEvents">
                    <div className="Sidebar-TodaysEvents-Cards">
                        <div className="Sidebar-Card">
                             <img className="Sidebar-Card-Img" src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg"/>
                            <div className="Sidebar-Card-Info"> Biggie N' 2pac </div>
                            <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="Sidebar-RecentlyAdded">
                    <div className="Sidebar-RecentlyAdded-Text"> Recently Added Events </div>
                    <div className="Sidebar-RecentlyAdded-Cards"> </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
