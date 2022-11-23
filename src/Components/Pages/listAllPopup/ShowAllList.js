import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { deleteCutomerCard, getauthurImag } from '../../../services/list.services';
import { AiFillDelete } from 'react-icons/ai';

const ShowAllList = ({ list, onDelete }) => {
    const { id, title, body,  } = list
    const navigate = useNavigate();
    const [lists, setList] = useState()
    const [allList, setallList] = useState([])
    
    useEffect(() => {
        loadAllData();
    }, [lists]);

    const loadAllData = async () => {
        try {
            const response = await getauthurImag();

            if (response) {
                setList(response?.data[0]?.url);
            }
        } catch (error) {
            return error;
        }
    };
    const navigateTOListDetails=(id)=>{
        navigate(`/${id}`)
    }
    const handleDelete = async (id) => {
        const response = await deleteCutomerCard(id);
        if (response) {
            alert('are you sure ?')
        }
    };

    

    return (
        <div className="col d-flex flex-column align-items-center justify-content-center h-100">
            <Card className='pt-2 pb-2 border-bottom-0  border-5 border border-dark  border-start-0 me-3  d-flex flex-column align-items-center justify-content-center shadow-lg  mt-5' style={{ width: '20rem', background: '#4d4d4f', borderRadius: "20px" }}>
                    <img style={{ backgroundColor: '#4d4d4f', borderRadius: "20px" }} src={lists} class="figure-img img-fluid w-50 h-50  mt-3" alt="..." />
                    <Card.Body >
                        <h4 onClick={() => navigateTOListDetails(id)} className='text-white heading'> Heading   :  {title}</h4>
                        <small className='text-white '> Body    :{body}</small><br />
                        <button onClick={handleDelete} className='btn btn-danger mt-3'>Delete  <AiFillDelete size={25} /></button>
                    </Card.Body>
                </Card>
               
           
        </div>
    );
};

export default ShowAllList;