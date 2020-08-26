/**
 * Base function required to handle and direct user interations on the website
 * - It controls reponsive behaviour
 * - It loads clickable links on the left sider panel for how to use the library
 * - It allow for customising of extra user interaction on the stage component
 *   by exposing stageBtnClickHandler() function.
 *
 * @param {string} ROOT_URL
 */
export const main = (ROOT_URL) => {
  // responsive navbar handler
  $("#navbar-xs-button").on("click", function () {
    if ($("#navbar-xs-drawer").hasClass("d-none")) {
      $("#navbar-xs-drawer").removeClass("d-none");
    } else {
      $("#navbar-xs-drawer").addClass("d-none");
    }
    // clone sidebar into popup menu
    const siderContent = $("#sider-content").clone(true);
    $("#insert-sider-content").empty().append(siderContent);
  });

  // inject getting started content, edit this page link and left border for selected item on load
  $("#stage-content").load("content/siderLinks/gettingStarted.html");
  $("#stage-edit-link>a").attr(
    "href",
    `${ROOT_URL}/idPlease/tree/master/docs/content/siderLinks/gettingStarted.html`
  );
  $('button[data-content-ref="gettingStarted"]').addClass("selected-left");

  // capture only sider button clicks and inject content onto stage
  $("#sider-content").delegate(".btn-no-decoration", "click", function () {
    const btnCurrentRef = $(this).data("content-ref");
    if (btnCurrentRef.split("-").length > 1) {
      // if sider item clicked is a prop method or class inject long list of
      // all prop method and class and jump to the clicked items section
      $("#stage-content").load(
        `content/siderLinks/classMethodProp.html#${btnCurrentRef}`
      );
      $("#stage-edit-link>a").attr(
        "href",
        `${ROOT_URL}/idPlease/tree/master/docs/content/siderLinks/classMethodProp.html`
      );
      // adds selected right border styling
      $(".btn-no-decoration").removeClass("selected-left");
      $(`button[data-content-ref=${btnCurrentRef}]`).addClass("selected-left");
    } else {
      // hydrate page with preferred content
      $("#stage-content").load(`content/siderLinks/${btnCurrentRef}.html`);
      $("#stage-edit-link>a").attr(
        "href",
        `${ROOT_URL}/idPlease/tree/master/docs/content/siderLinkss/${btnCurrentRef}.html`
      );
      // adds selected right border stylin
      $(".btn-no-decoration").removeClass("selected-left");
      $(`button[data-content-ref=${btnCurrentRef}]`).addClass("selected-left");
    }
  });
};
