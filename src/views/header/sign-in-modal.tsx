import React, { useState } from "react";
import { DialogTrigger, Dialog, Label } from "react-aria-components";
import { Button, Input, Modal } from "../../components";

export default function SignInModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <DialogTrigger>
      <Button variant={{ color: "secondary" }}>Sign in</Button>

      <Dialog>
        <Modal
          className={
            "bg-primary-5 text-on-primary-3 max-w-[30rem] rounded-lg text-left px-4 md:px-8 pt-4 pb-8"
          }
        >
          <h6>Login to Letterboxd</h6>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <Input
                placeholder="Enter your username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <Button isDisabled={!username || !password}>Login</Button>
          </form>
        </Modal>
      </Dialog>
    </DialogTrigger>
  );
}
