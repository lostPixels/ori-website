import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Footer(props) {
    const { data, error, isLoading } = useSWR(`https://clownfish-app-f4hhn.ondigitalocean.app/api/footer`, fetcher)

    if (isLoading || error) {
        return null;
    }

    const d = data.data.attributes;
    return (
        <div className="flex items-center border  py-6 px-12">
            <div className="basis-1/3 prose prose-a:text-slate-600 prose-a:text-sm prose-a:no-underline ">
                <ReactMarkdown>{d.left_content}</ReactMarkdown>
            </div>
            <div className="basis-1/3 text-center prose prose-p:text-sm prose-p:no-underline prose-p:font-bold">
                <ReactMarkdown>{d.center_content}</ReactMarkdown>
            </div>
            <div className="basis-1/3 text-right prose prose-a:text-sm prose-a:no-underline ">
                <ReactMarkdown>{d.right_content}</ReactMarkdown>
            </div>
        </div>
    )
}
