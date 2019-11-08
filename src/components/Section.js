import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { getFolderItems } from "../config";
import PDFViewer from './PDFViewer';

const SectionContents = ({ refUrl, DeviceWidth }) => {
    const [fileUrl, setFileUrl ] = useState(undefined);
    const [hidden, setHidden ] = useState(true);

    const pressed = () => {
        setHidden(!hidden);
    }
    useEffect(() => {
        getFolderItems(refUrl).then(items => {
            items.map(item => {
                return item.getDownloadURL().then(url => {
                    setFileUrl(url)
                })
            })  
        })
    }, [refUrl])
    return(
        <div onClick={() => pressed()}>
            <h2>{refUrl.name}</h2>
            {!hidden && fileUrl && <PDFViewer file={fileUrl} width={DeviceWidth * 0.75} />}
        </div>
        
        )
}

const Section = ({ DeviceWidth, storageRef }) => {
    const [headers, setHeaders ] = useState(undefined);

    useEffect(() => {
        getFolderItems(storageRef, true).then(items => {
            setHeaders(items);
        })
    }, [storageRef])

    return(
    <div>
        {headers && headers.map(header => (
            <div key={header.name}>
                <SectionContents refUrl={header} DeviceWidth={DeviceWidth} />
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