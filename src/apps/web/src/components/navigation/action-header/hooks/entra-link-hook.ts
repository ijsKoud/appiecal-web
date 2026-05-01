import { GetAuthorizationUrlDocument, GetEntraLinkStatusDocument, LinkEntraUserDocument, UnlinkEntraUserDocument } from "@/components/gql/_generated";
import { useMutation, useQuery } from "@apollo/client/react";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";

export const useEntraLink = () => {
	const entraLinkStatus = useQuery(GetEntraLinkStatusDocument);
	const authorizationUrl = useQuery(GetAuthorizationUrlDocument);
	const [linkEntraUser, { data: linkEntraUserData }] = useMutation(LinkEntraUserDocument);
	const [unlinkEntraUserFn, { data: unlinkEntraUserData }] = useMutation(UnlinkEntraUserDocument);

	const isActive = useMemo(() => entraLinkStatus.data?.getEntraLinkStatus.active ?? false, [entraLinkStatus.data]);
	const url = useMemo(() => authorizationUrl.data?.getAuthorizationUrl ?? "", [authorizationUrl.data]);

	useEffect(() => {
		entraLinkStatus.refetch();
	}, [linkEntraUserData, unlinkEntraUserData]);

	useEffect(() => {
		if (entraLinkStatus.error)
			toast("Unable to get entra link status", {
				description: entraLinkStatus.error?.message
			});
	}, [entraLinkStatus.error]);

	useEffect(() => {
		if (authorizationUrl.error)
			toast("Unable to get entra authorization url", {
				description: authorizationUrl.error?.message
			});
	}, [authorizationUrl.error]);

	const unlinkEntraUser = async () => {
		const result = await unlinkEntraUserFn();
		if (result.error?.message) {
			toast("Could not unlink @AH Account", { description: result.error?.message });
			return;
		}
	};

	return {
		isActive,
		authorizationUrl: url,
		linkEntraUser,
		unlinkEntraUser
	};
};
