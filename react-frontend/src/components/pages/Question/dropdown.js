import React,{ useState, useEffect } from 'react';
import dummy from './dummy'
import AsyncSelect from 'react-select/async';
function Dropdown() {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };
  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }
  const fetchData = () => {
    return  dummy.get('/users?page=1').then(result => {
      const res =  result.data.data;
      return res;
    });
  }

  return (
    <div className='container'>
        <div className='row alert alert-info'>
            Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}
        </div>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    value={selectedValue}
                    getOptionLabel={option => option.name}
                    getOptionValue={option => option.id}
                    loadOptions={fetchData}
                    onInputChange={handleInputChange}
                    onChange={handleChange}
                />
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
    );
}

export default Dropdown;