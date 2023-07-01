import {useContext, useState} from 'react'
import MyContext from '../../context/context'

const Hospital = () => {
    const {hospitalsList,deleteHospital,getHospital,updateHospitalData,setUpdatedInfo,updatedInfo
    } = useContext(MyContext)

     const [location,setLocation] = useState('')

    //  deletes an hospital from the collection by colleccting it's id here and passing it up to th deleting function
    const del = (id) => {
        deleteHospital(id)
        getHospital()
    }

    //  hndles editing the hospital data
    const handleInput = (e) => {
        const {value} = e.target
        setUpdatedInfo({...updatedInfo,hospital: value})
    }

    const filteredHospitalData = hospitalsList.filter(hospital => hospital.state.toLowerCase().includes(location.toLocaleLowerCase()))
  return (
    <div>
        <input type='text' list='locations' name='location' onChange={e => setLocation(e.target.value)}/>
            <datalist id='locations'>
                <option value="lagos"></option>
                <option value="ogun"></option>
                <option value="abujas"></option>
                <option value="abia"></option>
            </datalist>

        <h1>hospitals</h1>
        
        {
            // filters the state and maps over the returned array as well
            filteredHospitalData.length >= 1 ?
            filteredHospitalData.map((obj) => (
                <div key={obj.id}>
                    <h2>{obj.name} </h2>
                    <span>{`${obj.address} ${obj.state}` } </span>
                    <p>{obj.details}</p>
                    <button onClick={ () => del(obj.id)}> delete hospital</button><br />
                    <input type='text' onChange={handleInput}/>
                    <button style={{padding : '10px'}} onClick={() => updateHospitalData(obj.id)}>edit</button>
                </div>
            )) : <h3> no result for this search</h3>
        }
        
    </div>
  )
}

export default Hospital