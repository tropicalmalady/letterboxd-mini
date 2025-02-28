import React, { PropsWithChildren } from "react";
import { Dialog, DialogTrigger, Label } from "react-aria-components";
import { Button, Input, Modal, TextArea } from "../../components";
import { useCreateList } from "../../context";
import AddFilm from "./add-film";
import { useCreateListMutation, useUpdateListMutation } from "../../data/api";
import { toast } from "sonner";
import { ApiErrorMessage } from "../../utils";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export enum ListModalAction {
  create,
  update,
}

export default function ListModal({
  children,
  action,
}: PropsWithChildren & { action: ListModalAction }) {
  const { notes, title, setNotes, setTitle, films } = useCreateList();
  const { mutate, isPending } = useCreateListMutation();
  const { mutateAsync: mutateUpdate, isPending: isPendingUpdate } =
    useUpdateListMutation();
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  return (
    <DialogTrigger>
      {children}
      <Dialog>
        {({ close }) => (
          <Modal className="bg-primary-5 text-on-primary-3 max-w-[30rem] rounded-lg text-left px-4 md:px-8 pt-4 pb-8 max-h-[70vh] overflow-scroll">
            <h6>
              {action == ListModalAction.create ? "Create List" : "Update List"}
            </h6>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  placeholder="Enter your list title"
                  value={title ?? ""}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label>Notes</Label>
                <TextArea
                  placeholder="Enter list notes"
                  value={notes ?? ""}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                />
              </div>

              <AddFilm />

              <Button
                isDisabled={!title}
                isPending={ListModalAction.create ? isPending : isPendingUpdate}
                onPress={() => {
                  if (title) {
                    if (action == ListModalAction.create) {
                      mutate({ films, notes, title });
                    } else {
                      mutateUpdate({ films, notes, title, listId: id ?? "" })
                        .then((_) => {
                          toast.success("List Updated");
                          queryClient.invalidateQueries({
                            queryKey: ["list", id],
                          });
                          close();
                        })
                        .catch((err) => {
                          toast.error(ApiErrorMessage(err));
                        });
                    }
                  }
                }}
              >
                {action == ListModalAction.create
                  ? "Create List"
                  : "Update List"}
              </Button>
            </div>
          </Modal>
        )}
      </Dialog>
    </DialogTrigger>
  );
}
