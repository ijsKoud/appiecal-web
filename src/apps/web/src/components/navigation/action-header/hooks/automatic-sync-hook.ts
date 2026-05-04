import { GetAutomaticSyncStatusDocument, ManualSyncDocument, SetAutomaticSyncDocument } from "@/components/gql/_generated";
import { useMutation, useQuery } from "@apollo/client/react";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";

export const useAutomaticSyncStatus = () => {
	const { data, loading, error, refetch } = useQuery(GetAutomaticSyncStatusDocument);
	const [setAutomaticSyncFn] = useMutation(SetAutomaticSyncDocument, { errorPolicy: "all" });
	const [triggerManualSync] = useMutation(ManualSyncDocument, { errorPolicy: "all" });

	const isActive = useMemo(() => data?.getAutomaticSyncStatus.active ?? false, [data]);

	useEffect(() => {
		if (error)
			toast("Unable to get automatic sync status", {
				description: error?.message
			});
	}, [error]);

	const setAutomaticSync = async (state: boolean) => {
		const result = await setAutomaticSyncFn({ variables: { state } });
		if (result.error?.message) {
			toast("Could not set automatic sync", { description: result.error?.message });
			return;
		}

		refetch();
		toast(`Automatic sync ${state ? "enabled" : "disabled"}`);
	};

	return {
		isActive,
		loading,
		setAutomaticSync,
		triggerManualSync
	};
};
