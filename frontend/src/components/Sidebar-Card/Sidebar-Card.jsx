import React from "react";

const SidebarCard = (props) => {

    return (
        <>
            <div className="Sidebar-Card">
                <img className="Sidebar-Card-Img"
                     src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg"/>
                <div className="Sidebar-Card-Info"> {props.events.artist} </div>
                <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
            </div>
        </>
    )
}
export default SidebarCard
