import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateSetting as updateSettingAPi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingAPi,
    onSuccess: () => {
      toast.success("Settings Successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
