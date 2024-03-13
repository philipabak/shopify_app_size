import React from 'react';
import {DropZone, DisplayText } from '@shopify/polaris';
import { withTranslation } from 'react-i18next';
import {useCallback} from 'react';

import './FileUpload.scss';

const FileUpload = ({ t, file, setFile, setError, setStatus }) => {

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => {
      setError()
      setStatus()
      setFile((file) => acceptedFiles[0])
    },
    [],
  );

  const fileUpload = !file && <DropZone.FileUpload />;
  const uploadedFile = file && (
    <div class='uploaded-file'>
      <DisplayText size="small">{file.name}</DisplayText>
      <p>{file.size} {t("bytes")}</p>
    </div>
  );

  return (
    <DropZone 
      allowMultiple={false} 
      onDrop={handleDropZoneDrop}
      dropOnPage
      accept="text/csv"
      errorOverlayText={t("File type must be .csv")}
    >
      {uploadedFile}
      {fileUpload}
    </DropZone>
  );
}

export default withTranslation()(FileUpload)