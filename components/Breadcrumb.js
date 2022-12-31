import Link from "next/link"

export default function Breadcrumb(props) {

    let crumbs = [{ title: 'Home', url: '/' }].concat(props.crumbs);

    return (<nav aria-label="Breadcrumb" className="col-start-3 col-span-full">
        <ol className="flex mb-6">
            {crumbs.map((c, i) => (
                <li key={c.title}>
                    <Link href={c.url} className='text-slate-500 hover:text-cool-pop text-xs uppercase'>{c.title}</Link>
                    {i < crumbs.length - 1 && <span className="text-slate-200 mx-1 hover:text-cool-pop" aria-hidden='true'>/</span>}
                </li>
            ))}
        </ol>
    </nav>)
}