
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import { getCutomerCard } from '../../services/list.services';
import SeeCustomerList from './SeeCustomerList';
const CreateList = () => {
    const [products, setProduct] = useState([])

    const [user] = useAuthState(auth)
    const email = user?.email
    useEffect(() => {
        loadAllData(email);
    }, [products, email]);

    const loadAllData = async (email) => {
        try {
            const response = await getCutomerCard(email);

            if (response) {
                setProduct(response.data);

            }
        } catch (error) {
            return error;
        }
    };


    return (
        <div className='bg '>
            <div className='container '>

                {
                    products?.data?.length > 0
                        ?
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            {
                                products?.data?.map(list => <SeeCustomerList list={list} />)
                            }
                        </div>
                        :
                        <div className='d-flex  justify-content-center align-items-center '>
                            <img className='img-fulid  mt-5' src="https://vinoroc.com/static/app/images/no-record-found.76d6bd93c23b.gif" alt="" srcset="" />
                        </div>
                }

            </div>
       </div>

    );
};

export default CreateList;