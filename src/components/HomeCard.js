import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';


export default function HomeCard(){

    return(
        <div>
            <div>
        <image alt="user_avatar" />
        <p>User Name & Info</p>
            </div>  
        <div>
        <image alt="user_portal" />
        <div>
            <IconButton>
                <FavoriteBorderIcon/>
            </IconButton>
            <button>Download</button>
        </div>
            </div>
        </div>
    )
}