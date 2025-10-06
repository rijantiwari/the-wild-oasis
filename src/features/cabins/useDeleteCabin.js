import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabins as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin Successfully Deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
