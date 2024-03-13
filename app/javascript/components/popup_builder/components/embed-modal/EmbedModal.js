import React from "react";
import { List, Modal, TextContainer, Stack, Link } from "@shopify/polaris";
import { withTranslation } from "react-i18next";
import { Redirect } from "@shopify/app-bridge/actions";

class EmbedModal extends React.Component {
  constructor(props) {
    super(props);
    const { app } = props;

    this.redirect = Redirect.create(app);
  }

  openExtensions() {
    this.redirect.dispatch(Redirect.Action.ADMIN_PATH, {
      path: `/themes/current/editor?previewPath=/cart&context=apps`,
      newContext: true,
    });
  }

  render() {
    const { t, coreModalActive, setCoreModalActive, hasScriptTag } = this.props;
    return (
      <Modal
        title={
          hasScriptTag
            ? t("Upgrade Required: App Extension")
            : t("Important: Enable App Extension")
        }
        open={coreModalActive}
        onClose={() => {
          setCoreModalActive(false);
        }}
        primaryAction={{
          content: t("Enable Extension"),
          onAction: () => {
            this.openExtensions();
            setCoreModalActive(false);
          },
        }}
      >
        <Modal.Section>
          <Stack vertical>
            <Stack.Item>
              {hasScriptTag ? (
                <TextContainer>
                  {t("We love using Shopify's latest technology.")}
                </TextContainer>
              ) : (
                <TextContainer>
                  {t(
                    "For your size charts to show Clean Size Charts app extension needs to be enabled."
                  )}{" "}
                  <Link
                    url="https://help.cleansizecharts.com/article/67-how-to-enable-theme-app-extensions"
                    newContext
                  >
                    {t("Learn more")}
                  </Link>
                </TextContainer>
              )}
            </Stack.Item>
            {hasScriptTag && (
              <Stack.Item>
                <TextContainer>
                  {t(
                    "Theme app extensions is a better way for apps to interact with your theme. It makes your Shopify store faster too. Helping you make even more sales."
                  )}
                </TextContainer>
              </Stack.Item>
            )}
            <Stack.Item>
              {hasScriptTag ? (
                <TextContainer>
                  {t(
                    "Please take 30 seconds to follow these instructions to upgrade your store to theme app extensions. There will be no changes to your size charts other then the theme app extension being used:"
                  )}
                </TextContainer>
              ) : (
                <TextContainer>
                  {t("Please follow these instructions:")}
                </TextContainer>
              )}
              <List type="number">
                <List.Item>{t("Click Enable Extensions below.")}</List.Item>
                <List.Item>
                  {t("Move the slider to enabled. It will turn blue.")}
                </List.Item>
                <List.Item>
                  {t(
                    "[Important] Click Save in the top right corner. The app extension will not work without clicking save."
                  )}
                </List.Item>
              </List>
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>
    );
  }
}

export default withTranslation()(EmbedModal);
