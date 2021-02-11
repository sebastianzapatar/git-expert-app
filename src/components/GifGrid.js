import React, { useState, useEffect } from 'react';
import { GifGridItem } from './gifGridItem';
export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=nabEvNFal0I2DuN6XHyuNwHxn9yvKcn1&q=${encodeURI(category)}&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })
        console.log(gifs);
        setImages(gifs)   ;
    }
    useEffect(()=>{
        getGifs()
    },[])
    return (
        <>
        <h3>{category}</h3>
        <div className="cardGrid">
            
            <ol>
                {images.map(img=>(
                    <GifGridItem
                    key={img.id}
                    {...img} />
                ))}
            </ol>
            
        </div>
        </>
    )
}