import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { getFolderItems, extractHeader } from "../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import PDFViewer from './PDFViewer';

const SectionContents = ({ showHeader, refUrl, DeviceWidth, withControls }) => {
    const [fileUrls, setFileUrls ] = useState(undefined);
    const [hidden, setHidden ] = useState(true);

    const pressed = () => {
        setHidden(!hidden);
    };

    const reloadPDF = () => {
        getFolderItems(refUrl).then(items => {
            const urls = [];
            items.map((item, i) => {
                return item.getDownloadURL().then(url => {
                    urls.push(url);
                    if (items.length - 1 === i) {
                        setFileUrls(urls);
                    }
                });
            });  
        });
    };

    useEffect(() => {
        getFolderItems(refUrl).then(items => {
            const urls = [];
            items.map((item, i) => {
                return item.getDownloadURL().then(url => {
                    urls.push(url);
                    if (items.length - 1 === i) {
                        setFileUrls(urls);
                    }
                });
            });  
        });
    }, [refUrl]);

    return(
        <div>
            {showHeader && <div onClick={() => pressed()} style={{display: 'flex', flex: 1, flexDirection: 'row', paddingTop: '1.45rem', paddingBottom: '1.45rem'}}>
                <h2 style={{
                    textDecorationLine: "underline"
                }}>{extractHeader(refUrl).title}</h2>
                {hidden ? <FontAwesomeIcon icon={faExpandArrowsAlt} /> : <FontAwesomeIcon icon={faCompressArrowsAlt}/>}
            </div>}
            {fileUrls && fileUrls.map(fileUrl => (
                (!hidden || !showHeader) && <div key={fileUrl} style={{display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <a href={fileUrl} rel="noopener noreferrer" target="_blank"><h3>Open PDF in a new tab</h3></a>
                    <PDFViewer
                        file={fileUrl}
                        width={DeviceWidth <= 1450 ? DeviceWidth * 0.75 : DeviceWidth * 0.5}
                        withControls={withControls}
                        reloadPDF={() => reloadPDF()}
                    />
                </div>
            ))}
        </div>
        );
};

const Section = ({ DeviceWidth, storageRef, withControls }) => {
    const [headers, setHeaders ] = useState([]);

    useEffect(() => {
        getFolderItems(storageRef, true).then(folders => {
            if (folders.length > 1) {
                setHeaders(folders);
            } else {
                setHeaders([storageRef]);
            }
        });
    }, [storageRef]);

    return(
    <div style={{display: 'flex', flex: 1, flexDirection: 'column' }}>
        {headers.length === 0 ? <h3>Loading...</h3> : headers.sort((a,b) => extractHeader(a).id >= extractHeader(b)).map(header => (
            <div key={header.name}>
                <SectionContents showHeader={headers.length > 1} refUrl={header} DeviceWidth={DeviceWidth} withControls={withControls} />
            </div> 
        ))}
    </div>
    );
};

Section.propTypes = {
    DeviceWidth: PropTypes.number,
    storageRef: PropTypes.object,
    withControls: PropTypes.bool,
};

Section.defaultProps = {
    DeviceWidth: 0,
    storageRef: undefined,
    withControls: false,
};

SectionContents.propTypes = {
    showHeader: PropTypes.bool,
    refUrl: PropTypes.object,
    DeviceWidth: PropTypes.number,
    withControls: PropTypes.bool,
};

SectionContents.defaultProps = {
    showHeader: false,
    refUrl: undefined,
    DeviceWidth: 0,
    storageRef: undefined,
    withControls: false,
};

export default Section;