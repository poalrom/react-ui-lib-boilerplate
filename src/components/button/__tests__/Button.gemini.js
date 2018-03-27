/* global gemini */

const selectors = {
  plain: '.button',
  loading: '.button_loading',
  disabled: '.button_disabled',
  custom: '.button.custom_button',
};

gemini.suite('Button', parent => {
  parent.setUrl('/#/button');
  gemini.suite('common', child => {
    child
      .before((actions, find) => {
        this.button = find(selectors.plain);
        //   this.loadingButton = find(selectors.loading);
        //   this.disabledButton = find(selectors.disabled);
        //   this.customButton = find(selectors.custom);
      })
      // plain
      .setCaptureElements(selectors.plain)
      .capture('plain')
      .capture('hovered', actions => {
        actions.mouseMove(this.button);
      })
      .capture('pressed', actions => {
        actions.mouseDown(this.button);
      })
      .capture('clicked', actions => {
        actions.mouseUp(this.button);
      });
  });
  gemini.suite('loading', child => {
    child
      .before((actions, find) => {
        this.loadingButton = find(selectors.loading);
      })
      // plain
      .setCaptureElements(selectors.loading)
      .capture('plain')
      .capture('hovered', actions => {
        actions.mouseMove(this.loadingButton);
      })
      .capture('pressed', actions => {
        actions.mouseDown(this.loadingButton);
      })
      .capture('clicked', actions => {
        actions.mouseUp(this.loadingButton);
      });
  });
  gemini.suite('disabled', child => {
    child
      .before((actions, find) => {
        this.disabledButton = find(selectors.disabled);
      })
      .setCaptureElements(selectors.disabled)
      .capture('plain')
      .capture('hovered', actions => {
        actions.mouseMove(this.disabledButton);
      })
      .capture('pressed', actions => {
        actions.mouseDown(this.disabledButton);
      })
      .capture('clicked', actions => {
        actions.mouseUp(this.disabledButton);
      });
  });
  gemini.suite('custom', child => {
    child.setCaptureElements(selectors.custom).capture('plain');
  });
});
