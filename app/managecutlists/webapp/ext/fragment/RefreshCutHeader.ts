import ExtensionAPI from "sap/fe/core/ExtensionAPI";
import UI5Event from "sap/ui/base/Event";
import MessageToast from "sap/m/MessageToast";
import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider.
 */
export async function onPress(this: ExtensionAPI, event: UI5Event) {
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
