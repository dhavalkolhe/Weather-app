import React from 'react'



function Header(props)  {

    return(
        <div className="searchBox">
            <input 
                className="searchInput"
                type="text" 
                name="City" 
                placeholder="Location"
                onKeyDown={props.handleKeyDown}
                onChange = {props.handleChange}
             />
            <button onClick = {props.searchEvent} class="searchButton" href="#">
                {/* This is getting triggered on forst click on mobile */}
                <i className="material-icons">
                    search
                </i>
            </button>
            
        </div>
    )
}

export default Header