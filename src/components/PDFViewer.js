import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
//Fix required by react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ file, width, withControls, reloadPDF }) => {
  const [pageNumber, setPageNumber ] = useState(1);
  const [numberOfPages, setNumberOfPages ] = useState(1);
  const [loaded, setLoaded ] = useState(false);

  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  const goToNextPage = () => setPageNumber(pageNumber < numberOfPages && pageNumber + 1);
  const goFirstPage = () => setPageNumber(1);
  const goLastPage = () => setPageNumber(numberOfPages);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setLoaded(true);
    setNumberOfPages(numPages);
  };

  return (
    <div
      style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: width * 1.53,
    }}>
      <div>
        <Document
          file={file}
          onLoadSuccess={(numPages) => onDocumentLoadSuccess(numPages)}
          onLoadError={() => reloadPDF()}
          onSourceError={() => reloadPDF()}
        >
          <Page pageNumber={pageNumber} width={width} />
        </Document>
      </div>
      {loaded && withControls && <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: width,
            justifyContent: 'space-between',
          }}>
            {pageNumber !== 1 && <Button style={{marginLeft: '5%'}} onClick={() => goFirstPage()}>First</Button>}
            <Button style={{marginLeft: pageNumber !== 1 ? '-10%' : '5%'}} onClick={() => pageNumber !== 1 && goToPrevPage()}>Prev</Button>
            <Button style={{marginRight: pageNumber !== numberOfPages ? '-10%' : '5%'}} onClick={() => pageNumber !== numberOfPages && goToNextPage()}>Next</Button>
            {pageNumber !== numberOfPages && <Button style={{marginRight: '5%'}} onClick={() => goLastPage()}>Last</Button>}
        </div>}
    </div>
  );
};

PDFViewer.propTypes = {
  file: PropTypes.string,
  width: PropTypes.number,
  withControls: PropTypes.bool,
  reloadPDF: PropTypes.func,
};

PDFViewer.defaultProps = {
  file: "",
  width: 0,
  withControls: false,
  reloadPDF: undefined,
};

export default PDFViewer;