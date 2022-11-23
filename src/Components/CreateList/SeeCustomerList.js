import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { deleteCutomerCard, getAllData, getCutomerCard, getListDetail } from '../../services/list.services';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdCreate } from "react-icons/io";
import { Link } from 'react-router-dom';
import { PopupContext } from '../../App';
const SeeCustomerList = ({list}) => {
    const [allValues] = useContext(PopupContext);
    const[product,setproduct]=useState()
    const { _id } = list
    const [user] = useAuthState(auth)
    const email = user?.email
    const handleDelete = async (id) => {
                const response = await deleteCutomerCard(id);
                if(response){
                    alert('are you sure ?')
                }
        };









    useEffect(() => {
        loadAllData(email);
    }, []);

    const loadAllData = async (email) => {
        try {
            const response = await getCutomerCard(email);

            if (response) {
             
                // setproduct ( response?.data)
             
                // const result = response?.data?.data?.map(t => console.log(t))
                console.log(response)
             
            }
        } catch (error) {
            return error;
        }
    };
    // product?.data?.map(t => console.log(t?.allValues?.sections[1]?.setting?.customCSS?.text))
    return (
        <div className='col p-3 mt-5 '>
            <Card className='pt-2 pb-2 border-bottom-0  border-5 border border-dark  border-start-0 me-3  d-flex flex-column align-items-center justify-content-center shadow-lg  mt-5' style={{ width: '20rem', background: '#4d4d4f', borderRadius: "20px" }} >
                <Card.Body  >
                    <p style={{ fontSize: `${list?.allValues?.sections[1].setting.customCSS.fontSize}`, textAlign: `${list?.allValues?.sections[1].setting.customCSS.textAlign}`, fontFamily: `${list.allValues?.sections[1].setting.customCSS.fontFamily}`, color: `${list.allValues?.sections[1].setting.customCSS.color}` }}>Name : {allValues?.sections[1].setting?.customCSS?.text ? allValues?.sections[1].setting?.customCSS?.text :list?.allValues?.sections[1].setting?.customCSS?.text}</p>
                    <p className='text-white'>Email : {email}</p>
                    <div class="d-grid gap-2">
                        <button style={{ backgroundColor: `${list?.allValues?.sections[4].setting.customCSS.backgroundColor}`, textAlign: ` ${list?.allValues?.sections[4].setting.customCSS.textAlign}`, }} class="btn btn-success mt-3" type="button">{list?.allValues?.sections[4].setting.customCSS.text ? list?.allValues?.sections[4].setting.customCSS.text : 'Subcribe'}</button>
                    </div>
                    <button className='btn btn-danger mt-5' onClick={() => handleDelete(_id)}>Delete  <RiDeleteBin5Fill/></button>
                    <Link to={`/allList/${_id}`} ><button className='btn btn-success mt-5 ms-3'>Update <IoMdCreate /></button></Link> 
                </Card.Body>
            </Card>
        </div>
    );
};

export default SeeCustomerList;