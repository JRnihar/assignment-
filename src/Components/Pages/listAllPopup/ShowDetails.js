import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getListDetail } from '../../../services/list.services';

const ShowDetails = () => {
    const { Id } = useParams();
    // console.log(Id);
    const [singleList, setSingleList] = useState();

    const loadListDetails = async (Id) => {
        try {
            const response = await getListDetail(Id);

            if (response) {
                setSingleList(response?.data);
              
            }
        } catch (error) {
            return error;
        }
    };
    useEffect(() => {
        loadListDetails(Id);
    }, [Id, singleList]);
    return (
        <div className='cards-bg'>
            <div className="col d-flex flex-column align-items-center justify-content-center h-100">
                <Card className='pt-2 pb-2 border-bottom-0  border-5 border border-dark  border-start-0 me-3  d-flex flex-column align-items-center justify-content-center shadow-lg  mt-5' style={{ width: '20rem', background: '#4d4d4f', borderRadius: "20px" }}>
                    <Card.Body >
                        <h4 className='text-white '>Author Id  :  {singleList?.id}</h4>
                        <h4 className='text-white '>Author_Name   :  {singleList?.name}</h4>
                        <small className='text-white '>Email    :  {singleList?.email}</small><br />
                        <p className='text-white '>Comment : {singleList?.body}</p>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ShowDetails;