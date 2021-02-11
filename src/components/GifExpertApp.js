import React,{useState} from 'react';
import {AddCategory} from './AddCategory';
import {GifGrid} from './GifGrid';

export const GitExpertApp = () => {
    //let categories=['one punch','dragon ball','Samurai x']
    const [categories,setCategories]=useState(['one punch']);
    
    return(
        <>
            <h2>GitExpertApp</h2>
            
            <hr/>
            <AddCategory setCategories={setCategories}></AddCategory>
            <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key={category}
                    category={category}
                    ></GifGrid>
                ))
            }
           
            </ol>
        </>
    )
}