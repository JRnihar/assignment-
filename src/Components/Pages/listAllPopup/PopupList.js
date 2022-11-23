import React, { useEffect, useState } from 'react';
import { getAllList } from '../../../services/list.services';
import ShowAllList from './ShowAllList';

const PopupList = () => {
    
    const[lists,setList]=useState()
    useEffect(() => {
        loadAllData();   
    }, []);

    const loadAllData = async () => {
        try {
            const response = await getAllList();
            
            if (response) {
                setList(response);
            }
        } catch (error) {
            return error;
        }
    };
        
    return (
        <div className='bg'>
           
           <div className="container  ">
                
                <div className="row row-cols-1 row-cols-md-3 g-3">    
                    {
                        lists?.data?.slice(0, 20).map(list=><ShowAllList list={list}/>)
                    }    
            </div>
            </div> 
        </div>
    );
};

export default PopupList;