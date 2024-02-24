import {
  Dialog,
  DialogContent
} from "../ui/dialog"
import { useState } from "react"
import LoginForm from "./login";
import RegisterForm from "./register";

export default function AuthDialog() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(true);

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent>
        {
          isLoginFormOpen ?
          <LoginForm changeForm={() => setIsLoginFormOpen(false)} /> :
          <RegisterForm changeForm={() => setIsLoginFormOpen(true)} />
        }
      </DialogContent>
    </Dialog>

  ) 
}