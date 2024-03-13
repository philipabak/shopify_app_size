import React from 'react';
import { Banner, DescriptionList } from '@shopify/polaris';
import { withTranslation } from 'react-i18next';

const StatusBanner = ({ t, status, error }) => {

  const title = error ? 'Upload unsuccessful' : 'Size Charts Updated Successfully'
  
  const errorList = error && <DescriptionList 
    items={[
      {
        term: t(error.title),
        description: t(error.description)
      }
    ]} 
  />

  return (
    <Banner
      title={t(title)}
      status={status}
    >
      { errorList }
    </Banner>
  )
}

export default withTranslation()(StatusBanner)