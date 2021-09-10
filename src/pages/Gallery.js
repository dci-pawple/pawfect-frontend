import React,{useContext,useEffect} from "react";
import GalleryFilter from "../components/GalleryFilter";
import PetCard from "../components/PetCard";
import Dog3 from '../dummy/images/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg'
import MyContext from "../context/MyContext";


const Gallery = () => {
  
    const { filteredData, setFilteredData } = useContext(MyContext);

    useEffect(async () => {
      try {
                const response = await fetch( `http://localhost:4000/pets/`, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                   
                } )

                const data = await response.json()
                setFilteredData(data.data)
               
                if ( !data.success ) {
                   console.log("");
                   
                
                } else {
                    console.log("fetched all data");

                }
            } catch ( err ) {
                console.log( 'Error while filtering =>', err )
            }
    }, [])

  return (
    <div className="app-container container">
      <h2>Pets available:</h2>
      <GalleryFilter/>
      <div className="gallery__grid-container">
      { filteredData.map((pet, index) => (
        <PetCard src={Dog3} petData={pet} key={index}/>
      ))}
      
      </div>
      
    </div>
  )
  
};

export default Gallery;
