import React from "react";
import { Dialog, DialogTrigger, Label } from "react-aria-components";
import { Button, Input, Modal, TextArea } from "../../../components";
import { useCreateList } from "../../../context";
import AddFilm from "./add-film";
import { useCreateListMutation } from "../../../data/api";

export default function CreateList() {
  const { notes, title, setNotes, setTitle, films } = useCreateList();
  const { mutate, isPending } = useCreateListMutation();

  return (
    <DialogTrigger>
      <Button>Create List</Button>
      <Dialog>
        <Modal className="bg-primary-5 text-on-primary-3 max-w-[30rem] rounded-lg text-left px-4 md:px-8 pt-4 pb-8 max-h-[70vh] overflow-scroll">
          <h6>Create List</h6>
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
              isPending={isPending}
              onPress={() => {
                if (title) {
                  mutate({ films, notes, title });
                }
              }}
            >
              Create List
            </Button>
          </div>
        </Modal>
      </Dialog>
    </DialogTrigger>
  );
}
