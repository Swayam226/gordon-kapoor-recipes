export default function Header(props) {
    return (
        <header className="w-screen h-28 bg-amber-400 flex items-center justify-center shadow-md gap-2"><img src={props.src} alt={props.alt} className={props.imgclass}/><h1>Gordon-Kapoor Recipes</h1></header>
    )
}