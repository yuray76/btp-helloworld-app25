sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    'sap/ui/model/json/JSONModel'
], (Controller, MessageBox, JSONModel) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit() {
            // create model with settings
			this.oModel = new JSONModel();
			this.oModel.setData({
				badgeMin:			"1",
				badgeMax:			"9999",
				badgeCurrent:		1,
				buttonText: 		"Button with Badge",
				buttonIcon: 		"sap-icon://cart",
				buttonType:			"Default",
				badgeStyle:			"Default",
				buttonWithIcon:		true,
				buttonWithText:		true
			});
			this.getView().setModel(this.oModel);
        },
        onPress: function () {
            MessageBox.alert("Hello!");
            this.oModel.setProperty("/badgeCurrent", 0);
        },
        onPressBadgedButton: function () {

            var val1 = this.oModel.getProperty("/badgeCurrent");
            this.oModel.setProperty("/badgeCurrent", ++val1);
           // console.log(val1);
           // MessageBox.alert(val1.toString());
        }
    });
});