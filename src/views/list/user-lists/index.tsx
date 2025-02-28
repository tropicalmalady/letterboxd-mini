import React, { useEffect } from "react";
import { useAuth, useCreateList } from "../../../context";
import Lists from "./lists";
import ListModal, { ListModalAction } from "../list-modal";
import { Button } from "../../../components";

export default function UserLists() {
  const { user } = useAuth();
  const { reset } = useCreateList();

  useEffect(() => {
    reset();
  }, []);

  return (
    <section>
      <div className="mt-30 md:mt-40 text-center">
        <div className="space-y-4">
          <h4 className="text-3xl text-on-primary-3 font-light">
            Welcome, <span className="underline">{user?.username}</span>. Start
            your movie tracking journey now!
          </h4>
          <ListModal action={ListModalAction.create}>
            <Button>Create List</Button>
          </ListModal>
        </div>
        <Lists />
      </div>
    </section>
  );
}
