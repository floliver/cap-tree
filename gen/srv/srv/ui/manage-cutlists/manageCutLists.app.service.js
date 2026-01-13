import { ApplicationService } from "@sap/cds";
export default class ManageCutListsAppService extends ApplicationService {
    async init() {
        // Minimal service implementation for HANA driver issue reproduction
        // The actual service handlers are not needed for schema/deployment testing
        await super.init();
    }
}
//# sourceMappingURL=manageCutLists.app.service.js.map