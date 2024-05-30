import React, { useState } from 'react';
import Button from './Button';
const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [imagePreview,setImagePreview ] = useState("");
    const [mask,setMask]=useState("h-full w-[300px]");
    const validFormat=['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
    const handleFileChange = (e) => {
        let file=e.target.files[0];
        if(file && validFormat.includes(file.type)){
            setSelectedFile(file);
            setErrorMessage("");
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                
            };
            reader.readAsDataURL(file);
        }else{
            setSelectedFile(null);
            setErrorMessage("Only JPG, PNG, GIF, and SVG files are allowed!")
        }
    };

    return (
        <>
        <div className="flex items-center justify-center w-1/2 mx-auto pt-8">
            <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-38 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-300">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <img className='w-8 h-8 mb-4 text-black dark:text-gray-400' src="/Upload.svg" alt="upload here" />
                    <p className="mb-2 text-sm text-black dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-black dark:text-gray-400">SVG or PNG</p>
                    {selectedFile && <p className="mt-2 text-xs text-green-500">Selected file: {selectedFile.name}</p>}
                    {errorMessage && <p className="mt-2 text-xs text-red-500">{errorMessage}</p>}
                </div>
                <input id="file" type="file" className="hidden" accept=".jpg,.jpeg,.png,.svg" onChange={handleFileChange} />
            </label>
        </div>
        <div className='flex flex-col justify-center items-center mt-4'>
            <h3 className='text-xl mb-3 font-semibold hover:text-gray-700'>Select a mask</h3>
            <div>
            <Button oc={()=>setMask("h-full w-[300px]")}>None</Button>
            <Button oc={()=>setMask("circle")}>Circle</Button>
            <Button oc={()=>setMask("star")}>Star</Button>
            <Button oc={()=>setMask("rectangle")}>Rectangle</Button>
            <Button oc={()=>setMask("heart")}>Heart</Button>
            <Button oc={()=>setMask("hexagon")}>Hexagon</Button>
            </div>
        </div>
        {imagePreview &&
            < div className={`flex justify-center mt-6 mx-auto ${mask}`}>
             <img src={imagePreview} alt="Selected" className=''/>
            
        </div>
        }
        </>
    );
};

export default FileUpload;

