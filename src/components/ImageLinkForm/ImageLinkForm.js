import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
       <div>
           <p className='f3 white'>
               {'This Octa Robo will detect face in the Pictures. get it to try'}
               </p>
               <div className='center '>
               <div className='form pa4 center br3 shadow-5'>
                   <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                   <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple' onClick={onButtonSubmit}>Detect</button>
                   </div>
                   </div>
           </div>
    );
}

export default ImageLinkForm;