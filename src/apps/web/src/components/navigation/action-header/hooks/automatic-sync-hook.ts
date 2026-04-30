import { GetAutomaticSyncStatusDocument } from "@/components/gql/_generated";
import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useAutomaticSyncStatus = () => {
	const { data, loading, error } = useQuery(GetAutomaticSyncStatusDocument);

	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		if (data && data.getAutomaticSyncStatus) setIsActive(data?.getAutomaticSyncStatus?.active ?? false);
	}, [data]);

	useEffect(() => {
		if (error)
			toast("Unable to get automatic sync status", {
				description: error?.message
			});
	}, [error]);

	return {
		isActive,
		loading
	};
};
