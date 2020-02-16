import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { getFolderItems, extractHeader } from "../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import PDFViewer from './PDFViewer';

const SectionContents = ({ index, showHeader, refUrl, DeviceWidth, withControls }) => {
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
            {showHeader && <div onClick={() => pressed()}
                style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', left: 0, paddingRight: '1rem', paddingTop: '1rem',
                    borderTopRightRadius: (index % 2) == 0 ? 50 : 0, borderBottomRightRadius: (index % 2) > 0 ? 50 : 0, marginTop: index * 150,
                    backgroundColor: 'rgb(50,125,247)', width: DeviceWidth <= 675 ? DeviceWidth * 0.62 : DeviceWidth * 0.405 }}>
                <h2 style={{
                    textDecorationLine: "underline"
                }}>{extractHeader(refUrl).title}</h2>
                {hidden ? <FontAwesomeIcon icon={faExpandArrowsAlt} /> : <FontAwesomeIcon icon={faCompressArrowsAlt}/>}
            </div>}
            {fileUrls && fileUrls.map(fileUrl => (
                (!hidden || !showHeader) && <div key={fileUrl} style={{display: 'flex', flex: 1, flexDirection: 'column', paddingTop: (index + 1) * 120}}>
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
    <div style={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: '2rem' }}>
        {headers.length === 0 ? <h3>Loading...</h3> : headers.sort((a,b) => extractHeader(a).id >= extractHeader(b)).map((header, i) => (
            <div key={header.name}>
                <SectionContents index={headers.length > 1 ? i : -1} showHeader={headers.length > 1} refUrl={header} DeviceWidth={DeviceWidth} withControls={withControls} />
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
    index: PropTypes.number,
    showHeader: PropTypes.bool,
    refUrl: PropTypes.object,
    DeviceWidth: PropTypes.number,
    withControls: PropTypes.bool,
};

SectionContents.defaultProps = {
    index: 0,
    showHeader: false,
    refUrl: undefined,
    DeviceWidth: 0,
    storageRef: undefined,
    withControls: false,
};

export default Section;
