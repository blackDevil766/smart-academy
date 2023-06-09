import React from "react";

function Item(props) {
    return (
        <li  className="nav-item">
            <a id="othersNavItem" className="nav-link" href={props.linkIt}>{props.text}</a>
        </li>
    )
}


export default Item;