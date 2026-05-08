import { IsAllowedToSyncDocument } from "@/components/gql/_generated";
import { useQuery } from "@apollo/client/react";
import { useMemo } from "react";

export const useIsAllowedToSync = () => {
	const { data } = useQuery(IsAllowedToSyncDocument, { pollInterval: 5e3 }); // polls every 5s
	const isAllowedToSync = useMemo(() => (data?.getCaldavLinkStatus.active && data.getEntraLinkStatus.active) ?? false, [data]);

	return isAllowedToSync;
};
