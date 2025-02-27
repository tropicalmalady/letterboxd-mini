import React, { useState } from "react";
import { DialogTrigger, Dialog, Label } from "react-aria-components";
import { Button, Input, Modal } from "../../components";
import { useSignUpMutation } from "../../data/api";
import { toast } from "sonner";
import { ApiErrorMessage } from "../../utils";

export default function SignUpModal() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending } = useSignUpMutation();

  return (
    <DialogTrigger>
      <Button> Get started — it‘s free!</Button>

      <Dialog>
        {({ close }) => (
          <Modal
            className={
              "bg-primary-5 text-on-primary-3 max-w-[30rem] rounded-lg text-left px-4 md:px-8 pt-4 pb-8"
            }
          >
            <h6>Join Letterboxd</h6>
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
                <Label>Email</Label>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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

              <Button
                isDisabled={!username || !password}
                isLoading={isPending}
                onPress={() => {
                  mutateAsync({
                    email,
                    password,
                    username,
                  })
                    .then((res) => {
                      toast.success(res.message);
                      close();
                    })
                    .catch((err) => {
                      toast.error(ApiErrorMessage(err));
                    });
                }}
              >
                Sign Up
              </Button>
            </form>
          </Modal>
        )}
      </Dialog>
    </DialogTrigger>
  );
}
