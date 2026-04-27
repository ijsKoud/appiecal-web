import { Injectable, Scope } from "graphql-modules";

@Injectable({
	scope: Scope.Operation
})
export class BaseProvider {
	public getVersion() {
		return process.version;
	}
}
