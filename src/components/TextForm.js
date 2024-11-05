import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const copyToClipboard = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy);
        props.showAlert("Text Copied to Clipboard!", "success");
    };

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        copyToClipboard(newText);
        props.showAlert("Converted to Uppercase and Copied!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        copyToClipboard(newText);
        props.showAlert("Converted to Lowercase and Copied!", "success");
    };

    const handleClearClick = () => {
        setText('');
        copyToClipboard(''); // Copy empty text (cleared)
        props.showAlert("Text Cleared and Clipboard Emptied!", "danger");
    };

    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        copyToClipboard(newText);
        props.showAlert("Extra Spaces Removed and Copied!", "success");
    };

    const handleCapitalizedClick = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        copyToClipboard(newText);
        props.showAlert("Converted to Capitalized Case and Copied!", "success");
    };

    const handleSlugClick = () => {
        let newText = text.toLowerCase().trim().replace(/\s+/g, '-');
        setText(newText);
        copyToClipboard(newText);
        props.showAlert("Converted to URL (Slug) Case and Copied!", "success");
    };

    const handleTitleClick = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        copyToClipboard(newText);
        props.showAlert("Converted to Title Case and Copied!", "success");
    };

    const handleOneChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className={`container my-5 p-5 rounded shadow-sm ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <h1 className="text-center mb-4 fw-bold">{props.heading}</h1>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label fs-5 ${props.mode === 'dark' ? 'text-light' : 'text-secondary'}`}>
                        Enter Text
                    </label>
                    <textarea
                        className={`form-control p-3 ${props.mode === 'dark' ? 'bg-secondary text-light' : 'bg-white text-dark'}`}
                        value={text}
                        onChange={handleOneChange}
                        id="exampleFormControlTextarea1"
                        rows="8"
                        placeholder="Type something here..."
                    ></textarea>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                    <button className="btn btn-success btn-lg w-100 mb-2" onClick={handleSlugClick}>
                        Convert to URL (Slug) Case
                    </button>
                    <button className="btn btn-primary btn-lg mx-1 my-1" onClick={handleClick}>Convert to Uppercase</button>
                    <button className="btn btn-secondary btn-lg mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-danger btn-lg mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-warning btn-lg mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                    <button className="btn btn-info btn-lg mx-1 my-1" onClick={handleCapitalizedClick}>Convert to Capitalized Case</button>
                    {/* Highlighted Slug Button */}
              
                    <button className="btn btn-light btn-lg mx-1 my-1" onClick={handleTitleClick}>Convert to Title Case</button>
                </div>

                <div className="container text-center mt-5">
                    <h2 className="fw-bold">Text Summary</h2>
                    <p className="lead">
                        {text.split(" ").filter(word => word !== "").length} words and {text.length} characters
                    </p>
                    <p className={`text-muted ${props.mode === 'dark' ? 'text-light' : ''}`}>
                        {(0.008 * text.split(" ").filter(word => word !== "").length).toFixed(2)} Minutes read
                    </p>

                    <h2 className="fw-bold mt-4">Preview</h2>
                    <p className={`fs-5 ${props.mode === 'dark' ? 'text-light' : 'text-muted'}`}>
                        {text.length > 0 ? text : "Nothing to preview"}
                    </p>
                </div>
            </div>
        </>
    );
}
