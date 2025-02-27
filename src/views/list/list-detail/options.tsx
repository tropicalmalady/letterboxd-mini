import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ListModal, { ListModalAction } from "../list-modal";
import { Button, Dialog, DialogTrigger } from "react-aria-components";
import { Modal, Button as Btn } from "../../../components";
import { useDeleteListMutation } from "../../../data/api";
import { useParams } from "react-router-dom";
import { ApiErrorMessage } from "../../../utils";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export default function Options() {
  const { mutateAsync } = useDeleteListMutation();
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  return (
    <div className="border-y border-primary-8 mb-4 py-2 text-on-primary-4 px-4 md:px-0">
      <div className="flex gap-6 justify-batween">
        <ListModal action={ListModalAction.update}>
          <Button className={"inline-block"}>
            <FaEdit className="cursor-pointer text-accent" />
          </Button>
        </ListModal>

        <DialogTrigger>
          <Button className={"inline-block"}>
            <FaTrash className="cursor-pointer text-secondary" />
          </Button>
          <Dialog>
            {({ close }) => (
              <Modal
                className={
                  "bg-primary-5 text-on-primary-3 text-center max-w-[30rem] rounded-lg  px-4 md:px-8 pt-4 pb-8 max-h-[70vh] overflow-scroll"
                }
              >
                <h6>Confirm Deletion</h6>
                <Btn
                  className={"bg-red-500 mt-4"}
                  onPress={() => {
                    mutateAsync({ listId: id ?? "" })
                      .then((res) => {
                        toast.success("List Updated");
                        queryClient.invalidateQueries({
                          queryKey: ["list", "lists"],
                        });
                        close();
                      })
                      .catch((err) => {
                        toast.error(ApiErrorMessage(err));
                      });
                  }}
                >
                  Delete
                </Btn>
              </Modal>
            )}
          </Dialog>
        </DialogTrigger>
      </div>
    </div>
  );
}
