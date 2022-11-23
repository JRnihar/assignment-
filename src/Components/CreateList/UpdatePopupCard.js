import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllCutomerCard, getAllData } from '../../../src/services/list.services';
import { PopupContext } from '../../App';
import auth from '../../firebase.init';
const UpdatePopupCard = () => {
    const [allValues] = useContext(PopupContext);
    const [product, seProduct] = useState()
    const navigate = useNavigate()
    const { Id } = useParams();
    const [user] = useAuthState(auth)
    const email = user?.email
    const loadListDetails = async (Id) => {
        try {
            const response = await getAllCutomerCard(Id);

            if (response) {
                seProduct(response?.data?.data);
            }
        } catch (error) {
            return error;
        }
    };
    useEffect(() => {
        loadListDetails(Id);
    }, [Id]);

    console.log(product);
    const handleSubmit = async (id) => {
        const TaskData = {
            ...allValues
        };
        const url = `https://test-server-src5.onrender.com/api/v1/allList/${id}`
        console.log(url);
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(TaskData),
        })
            .then(res => res.json())
            .then(data => {
                navigate('/allList')
                console.log(data);
            })
    }









    // const handleSubmit = async () => {

    //     const url = `https://test-server-src5.onrender.com/api/v1/allList/${Id}`

    //     fetch(url, allValues, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(allValues),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data){
    //                 navigate('/allList')
    //             }
    //         })
    // }

    return (
        <div>
            <div>
                <div class="gap-2 d-flex  align-items-center justify-content-center">
                    <button className='btn btn-success mt-3'><Link className='text-white' to={`/allList`}>Back </Link></button>
                    <button onClick={() => handleSubmit(product._id)} className='btn btn-success mt-3 ms-3' >Update Data</button>
                    {/* <button onClick={handleUpdate} className='btn btn-success mt-3 ms-3' >update</button> */}

                </div>
            </div>
            <Card className=' mt-5 mb-5' style={{ width: '30rem', background: 'rgb(0,0,0,0.1)', height: '20rem' }}>
                <Card.Body>
                    <div className="card  pt-3 align-items-center mt-4 shadow-lg  bg-body rounded">

                        <div className="row  ">
                            <div className="col-md-12">
                                {/* <h3 className='text-center'>Cartoon Images</h3> */}
                                <h3 style={{ fontSize: ` ${allValues?.sections[1].setting.customCSS.fontSize}`, textAlign: ` ${allValues?.sections[1].setting.customCSS.textAlign}`, fontFamily: `${allValues?.sections[1].setting.customCSS.fontFamily}`, color: `${allValues?.sections[1].setting.customCSS.color}` }}>{allValues?.sections[1].setting.customCSS.text ? allValues?.sections[1].setting.customCSS.text : product?.allValues?.sections[1].setting.customCSS.text}</h3>
                                <p >Email :{email}</p>
                                <div class="d-grid gap-2">
                                    <button style={{ backgroundColor: `${product?.allValues?.sections[4].setting.customCSS.backgroundColor}`, textAlign: ` ${product?.allValues?.sections[4].setting.customCSS.textAlign}`, }} class="btn btn-success mt-3" type="button">{allValues?.sections[4].setting.customCSS.text ? allValues?.sections[4].setting.customCSS.text : product?.allValues?.sections[4].setting.customCSS.text}</button>
                                </div>
                                <p className='text-center mt-3'>*Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UpdatePopupCard;