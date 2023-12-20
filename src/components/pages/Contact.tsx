import { NavBar } from "../NavBar"
import Container from "../utility/Container"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-50 to-gray-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-800">
        <NavBar />
        <Container className="pt-28">
                Contact
        </Container>
    </div>
  )
}

export default Contact