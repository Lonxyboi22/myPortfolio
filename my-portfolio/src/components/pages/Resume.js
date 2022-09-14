import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import Resume from '../images/resume.pdf'
  
//PDFjs worker from an external cdn
  
export default function Test() {
      
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <>
    <div className="main">
      <Document
        file={Resume}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} />
      </Document>
     </div>
    </>
  );
}