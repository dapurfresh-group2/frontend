import { useState } from 'react';
import arrowButton from '../../assets/icons/arrow.png';
import iconSearch from '../../assets/icons/ic-search.png';


function SearchPageComponents() {
    const [inputSearch, setInputSearch] = useState();

    function handleChange(event) { setInputSearch(event.target.value); }

    function testSearch() {
        alert(inputSearch);
    }

    return (
        <div className="d-flex align-items-center mx-2 my-2">
            <div><a href="/"><img src={arrowButton} alt="arrow button" /></a></div>
            <div className='container-search d-flex align-items-center mx-2'>
                <div className='cursor-pointer ms-3 me-2' onClick={testSearch}><img src={iconSearch} alt="icon search" /></div>

                <div><input
                    type="text"
                    className='input-search'
                    placeholder='Cari sayur,bumbu dapur, lauk pauk...'
                    value={inputSearch}
                    onChange={handleChange}
                /></div>
            </div>
        </div>
    );
}

export default SearchPageComponents;