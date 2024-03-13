import React from 'react';
import {useState, useRef} from 'react';
import createApp from "@shopify/app-bridge";
import '@shopify/polaris/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { withTranslation } from 'react-i18next';
import { TitleBar } from '@shopify/app-bridge/actions';

import FileUpload from "./components/file-upload/FileUpload";
import StatusBanner from "./components/status-banner/StatusBanner";
import UpgradeModal from "./components/upgrade-modal/UpgradeModal";

import User from "./utils/User";
import Api from "./utils/Api";
import schema from "./utils/schema";

import {
  AppProvider,
  Badge,
  Card,
  Layout,
  Link,
  Page,
  Stack
} from '@shopify/polaris';

import CustomLink from "./components/custom-link/CustomLink";

const ImportExport = props => {
  const { t } = props;

  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState();
  const modalRef = useRef()


  User.setProfile(props);

  const data = document.getElementById('shopify-app-init').dataset;

  const app = createApp ({
    apiKey: data.apiKey,
    host: data.host,
  });

  const titleBarOptions = {
    title: t('Import/Export'),
  };

  TitleBar.create(app, titleBarOptions);

  const api = new Api(schema.sizeChart)

  const openUpgradeModal = (e) => {
    modalRef.current.handleOpen(t(`This is a premium feature.`));
  };

  const handleImport = () => {
    if (!User.profile.isPremium) {
      openUpgradeModal();
    } else {
      api.importExport.import(file)
      .then(response => {
        if (response.message) {
          setStatus('critical')
          setError(response.message)
        } else {
          setStatus('success')
          setFile()
        }
      })
    }
  }

  const handleExportSettingsOnAction = (value) => {
    if (!User.profile.isPremium) {
      openUpgradeModal();
    } else {
      api.importExport.export(value)
    }
  }

  const BulkUpdateTitle = (
    <p>{t("Bulk Edit Size Charts")} {!User.profile.isPremium && <Link onClick={openUpgradeModal}><Badge status="attention">{t("Premium Setting")}</Badge></Link>}</p>
  )

  return (
    <AppProvider i18n={enTranslations} linkComponent={CustomLink}>
        <Page >
          <Layout>
            <Layout.AnnotatedSection
              title={BulkUpdateTitle}
              description={t("Export, modify, and update chart settings in bulk.")}
              >
              <Card
                title="Export Size Chart Settings"
                primaryFooterAction={{
                  content: t("Export CSV"),
                  onAction: handleExportSettingsOnAction
                }}
                >
                <Card.Section>
                  <p>
                    {t("Export a list of size chart settings in CSV format. This CSV can be edited in a spreadsheet editor like Excel, Numbers, or Google Sheets.")}
                  </p>
                </Card.Section>
              </Card>
              <Card
                title={t("Import Size Chart Settings")}
                primaryFooterAction={{
                  content: t("Import CSV"),
                  disabled: !file || error,
                  onAction: handleImport
                }}
              >
                <Card.Section>
                  <Stack vertical spacing='loose'>
                    <p>
                      {t("Import a modified CSV to bulk update size chart settings.")}
                    </p>
                    { status && <StatusBanner t={t} error={error} status={status} /> }
                    <FileUpload 
                      t={t}
                      file={file} 
                      setFile={setFile}
                      setError={setError}
                      setStatus={setStatus}
                    />
                  </Stack>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
        <UpgradeModal
          modalRef={ref => modalRef.current = ref}
          schema={schema.sizeChart}
        >
        </UpgradeModal>
    </AppProvider>
  )
}

export default withTranslation()(ImportExport)
