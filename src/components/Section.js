import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { getFolderItems } from "../config";
import PDFViewer from './PDFViewer';

const SectionContents = ({ showHeader, refUrl, DeviceWidth, withControls }) => {
    const [fileUrls, setFileUrls ] = useState(undefined);
    const [hidden, setHidden ] = useState(true);

    const pressed = () => {
        setHidden(!hidden);
    }
    useEffect(() => {
        getFolderItems(refUrl).then(items => {
            const urls = [];
            items.map((item, i) => {
                return item.getDownloadURL().then(url => {
                    urls.push(url);
                    if (items.length - 1 === i) {
                        setFileUrls(urls);
                    }
                })
            })  
        })
    }, [refUrl])

    return(
        <div>
            {showHeader && <div onClick={() => pressed()}>
                <h2>{refUrl.name}</h2>
            </div>}
            {fileUrls && fileUrls.map(fileUrl => (
                (!hidden || !showHeader) && <div key={fileUrl}>
                    <a href={fileUrl} rel="noopener noreferrer" target="_blank"><h3>Open PDF in a new tab</h3></a>
                    <PDFViewer file={fileUrl} width={DeviceWidth <= 1450 ? DeviceWidth * 0.75 : DeviceWidth * 0.5} withControls={withControls} />
                </div>
            ))}
        </div>
        )
}

const Section = ({ DeviceWidth, storageRef, withControls }) => {
    const [headers, setHeaders ] = useState(undefined);

    useEffect(() => {
        if (storageRef.name === '') {
            getFolderItems(storageRef, true).then(items => {
                setHeaders(items);
            })
        } else {
            setHeaders([storageRef]);
        }
    }, [storageRef])

    return(
    <div>
        {headers && headers.map(header => (
            <div key={header.name}>
                <SectionContents showHeader={headers.length > 1} refUrl={header} DeviceWidth={DeviceWidth} withControls={withControls} />
            </div> 
        ))}
    </div>
    )
}

Section.propTypes = {
    DeviceWidth: PropTypes.number,
    storageRef: PropTypes.object,
}

Section.defaultProps = {
    DeviceWidth: 0,
    storageRef: undefined,
}

export default Section