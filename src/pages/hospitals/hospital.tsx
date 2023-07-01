import {useContext} from 'react'
import MyContext from '../../context/context'

const Hospital = () => {
    const {hospitalsList,deleteHospital,getHospital,updateHospitalData,setUpdatedInfo,updatedInfo
    } = useContext(MyContext)

    const del = (id) => {
        deleteHospital(id)
        getHospital()
    }
    
    const handleInput = (e) => {
        const {value} = e.target
        setUpdatedInfo({...updatedInfo,hospital: value})
    }
  return (
    <div>
        <h1>hospitals</h1>
        {
            hospitalsList.map((obj) => (
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
    </div>
  )
}

export default Hospital