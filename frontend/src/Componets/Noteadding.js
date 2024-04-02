import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import {SketchPicker} from "react-color";
import { useState } from 'react';
import { Axios } from '../App';
export default function AddNOte() {

    const handleAddnote = async ()=>{





        const [color,setColor] = useState('')

        const parentClick = () => {
            setChannel(2)
       
    }
    const title = e.target.title.value.trim()
    const description = e.target.description.value.trim()

    try {

      const noteData = { title , description , color }
      const responce = await Axios.post('/addNote',noteData)
      
    } catch (error) {
      
    }


    const pickerStyle = {
        default: {
          picker: {
            position: "absolute",
            bottom: "30px",
            left: "100px"
          }
        }
      };
  return (
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='title' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='discription' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />
      <div className=''>
      <div className="container">
        <SketchPicker styles={pickerStyle}/>
        <button onClick={parentClick}>Open Color Picker</button>
      </div>
      </div>
          

      <MDBBtn type='submit' className='mb-4' block>
        Adda note 
      </MDBBtn>
    </form>
  );
}
}

