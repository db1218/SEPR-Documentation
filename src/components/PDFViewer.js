import React, { useState } from "react";
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
//Fix required by react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ file, width }) => {
  const [pageNumber, setPageNumber ] = useState(1);
  const [loaded, setLoaded ] = useState(false);

  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  const goToNextPage = () => setPageNumber(pageNumber + 1);

  return (
    <div
      style={{
      display: 'flex',
      flexDirection: 'column',
      width: width,
      overflow: 'hidden',
    }}>
      <div id="PDFView">
        <Document file={file} onLoadSuccess={() => setLoaded(true)}>
          <Page style={{display: 'flex'}} pageNumber={pageNumber} width={width} />
        </Document>
      </div>
      {loaded && <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: width,
            justifyContent: 'space-between',
          }}>
            <Button style={{marginLeft: '8rem'}} onClick={() => goToPrevPage()}>Prev</Button>
            <Button style={{marginRight: '8rem'}} onClick={() => goToNextPage()}>Next</Button>
        </div>}
    </div>
  );
}

PDFViewer.propTypes = {
  file: PropTypes.string,
}

PDFViewer.defaultProps = {
  file: "",
}

export default PDFViewer