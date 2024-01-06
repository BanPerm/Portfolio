// DownloadPDF.js
import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';

const DownloadPDF = ({ documentUrl, documentName, label }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = documentUrl;
        link.download = documentName || 'document.pdf';

        link.click();
    };

    return (
        <div>
            <CustomButton
                label={label}
                fontSize="1rem"
                color="rgb(50, 99, 162)"
                backgroundColor="rgb(108, 171, 255)"
                hoverColor="rgb(97, 160, 220)"
                boxShadowColor="rgb(68, 116, 180)"
                boxShadowHoverColor="rgb(51, 112, 159)"
                onClick={handleDownload}
            />
        </div>
    );
};

DownloadPDF.propTypes = {
    documentUrl: PropTypes.string.isRequired,
    documentName: PropTypes.string,
    style: PropTypes.object,
};

export default DownloadPDF;
