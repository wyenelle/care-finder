import {useContext, useState} from 'react'
import MyContext from '../../context/context'

const Hospital = () => {
    const {hospitalsList,deleteHospital,getHospital,updateHospitalData,setUpdatedInfo,updatedInfo,setHospitalList
    } = useContext(MyContext)
     const [location,setLocation] = useState('')
     const [showError,setShowError] = useState(false)
    const del = (id) => {
        deleteHospital(id)
        getHospital()
    }
    
    const handleInput = (e) => {
        const {value} = e.target
        setUpdatedInfo({...updatedInfo,hospital: value})
    }

    const handleSearch = (e) => {
        const {value} = e.target
        setLocation(value)
        
        const data = [...hospitalsList]
        setHospitalList(data);
        
        // console.log(data)
 
        // if(data.length >= 1){
        //     setHospitalList(data);
        //     console.log(data);
            
        //     // setHospitalList(data)
        // }else if (e.target.value === ''){
        //     getHospital()
        //     setHospitalList(hospitalsList)    
        // }
        // else if(data === []){
        //     console.log(false)
        //     setShowError(true)
        // }
        
    }
    // console.log(location);

  return (
    <div>
        <input type='text' list='locations' name='location' onChange={e => setLocation(e.target.value)}/>
            <datalist id='locations'>
                <option value="lagos"></option>
                <option value="ogun"></option>
                <option value="abujas"></option>
                <option value="abia"></option>
            </datalist>
            {/* <button style={{padding : '10px'}} onClick={handleSearch}>search</button> */}
        <h1>hospitals</h1>
        {
            hospitalsList.filter(hospital => hospital.state.toLowerCase().includes(location.toLocaleLowerCase())).map((obj) => (
                <div key={obj.id}>
                    <h2>{obj.name} </h2>
                    <span>{`${obj.address} ${obj.state}` } </span>
                    <p>{obj.details}</p>
                    <button onClick={ () => del(obj.id)}> delete hospital</button><br />
                    <input type='text' onChange={handleInput}/>
                    <button style={{padding : '10px'}} onClick={() => updateHospitalData(obj.id)}>edit</button>
                </div>
            ))
        }
        {
            showError && <h2>no result ffor this searcgh</h2>

        }
    </div>
  )
}

export default Hospital