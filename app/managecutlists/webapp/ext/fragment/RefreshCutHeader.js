sap.ui.define(
	[
		"sap/fe/core/ExtensionAPI",
		"sap/ui/base/Event",
		"sap/m/MessageToast",
		"sap/ui/model/odata/v4/ODataContextBinding",
	],
	function (ExtensionAPI, UI5Event, MessageToast, ODataContextBinding) {
		"use strict";

		/**
		 * Generated event handler.
		 *
		 * @param this reference to the 'this' that the event handler is bound to.
		 * @param event the event object provided by the event provider.
		 */
		async function onPress(event) {
			MessageToast.show("Refreshing cut header...");
			const oAction = this.getModel()?.bindContext(
				"test.disassembly.ManageCutListsAppService.refreshCutHeader(...)",
				event.getSource()?.getParent()?.getParent()?.getBindingContext(),
			);
			if (!(oAction instanceof ODataContextBinding)) {
				MessageToast.show("Failed to refresh cut header.");
				return;
			}
			await oAction.invoke();
			MessageToast.show("Cut header refreshed.");
		}

		return {
			onPress: onPress,
		};
	},
);
