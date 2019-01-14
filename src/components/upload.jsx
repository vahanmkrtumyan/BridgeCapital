import React from 'react';
import Dropzone from 'react-dropzone';

class MyDropzone extends React.Component {
   onDrop = (acceptedFiles, rejectedFiles) => {
     // Do something with files
   }

   render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          )
        }}
      </Dropzone>
    );
  }
}

export default MyDropzone;