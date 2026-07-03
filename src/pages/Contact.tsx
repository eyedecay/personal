import githubLogo from "../assets/github.svg"
import "../globals.css"

export default function Contact() {
    return (
        <a className = "github-link" href = "https://github.com/eyedecay" target = "_blank" > <img src ={githubLogo} width = {20} height = {20}/> Github</a>
    )
}