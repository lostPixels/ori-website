import { useEffect } from "react"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default function StripePrice(props) {

    const { data, error } = useSWR(`/api/getPrice?pid=${props.id}`, fetcher)
    if (error || !data) return <span className={props.className}>-</span>

    let total = formatter.format(data.unit_amount / 100);

    return (
        <span className={props.className}>{total}</span>
    )
}