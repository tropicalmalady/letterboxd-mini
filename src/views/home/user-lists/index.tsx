import React from "react";
import {
  CreateListProvider,
  useAuth,
} from "../../../context";
import Lists from "./lists";
import CreateList from "./create-list-modal";

export default function UserLists() {
  const { user } = useAuth();
  return (
    <CreateListProvider>
      <section>
        <div className="mt-30 md:mt-40 text-center">
          <div className="space-y-4">
            <h4 className="text-3xl text-on-primary-3 font-light">
              Welcome, <span className="underline">{user?.username}</span>.
              Start your movie tracking journey now!
            </h4>
            <CreateList />
          </div>
          <Lists />
        </div>
      </section>
    </CreateListProvider>
  );
}
