sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("cicdtest.controller.View1", {
            onInit: function () {

            },
            clickbutton: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
            },
            clickbutton: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
            }
        });
    });
