import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { DialogFooter, DialogHeader, DialogDescription, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { UserAuthParams, registerUser } from "../../lib/user"

export default function RegisterForm({ changeForm }: {
  changeForm: () => void
}) {
  const {
    handleSubmit,
    register
  } = useForm<UserAuthParams>();

  const onSubmit: SubmitHandler<UserAuthParams> = async (data) => {
    if ( await registerUser(data) ) {
      changeForm();
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>
          Create an account using your username and password.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Username
          </Label>
          <Input id="name" className="col-span-3" { ...register("username", {required: true, minLength: 1, maxLength: 24, pattern: /^[A-Za-z0-9\._]+$/}) } />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Password
          </Label>
          <Input id="username" type="password" className="col-span-3" { ...register("password", {required: true}) } />
        </div>
      </div>
      <DialogFooter className="flex flex-row w-full items-center">
        <Button variant="secondary" onClick={() => changeForm()}>Sign In?</Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit</Button>
      </DialogFooter>
    </>
  )
}