import React, {useEffect, useState} from 'react';

const HooksDemo = () => {
    const [date,setdata] = useState('');
    const [reloadData,setReloadDate] = useState(false);

    useEffect(() => {
        console.log('useEffect funtion has been executed!')
        const currentDate = new Date();

        setDate(currentDate.toLocaleString('sv-SE'));

    }, [reloadData] );
    
      const updateDateHandler = () => {
        setReloadDate(!reloadData);
      }

    return (
         <div className='container'>
            <h3>Hooks Demo</h3>
            <div className='alert alert-info'> {date} </div>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-info'>Update Date</button>
                </div>
            </div>
        </div>
    );
};

export default HooksDemo;