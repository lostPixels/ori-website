import Money from "./Money";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const PriceDifference = props => {

    const { data: currentPrice, error: currentError } = useSWR(`/api/getPrice?pid=${props.current}`, fetcher)
    const { data: newPrice, error: newError } = useSWR(`/api/getPrice?pid=${props.new}`, fetcher)
    if (currentError || newError || !currentPrice || !newPrice) return <span className={props.className}>-</span>

    const delta = newPrice.unit_amount - currentPrice.unit_amount;
    const price = Math.abs(delta) / 100;

    if (props.current === props.new || delta === 0) {
        return null;
    }

    return (
        <span className="text-slate-700">(
            {delta > 0 ? '+' : '-'}
            <Money price={price} />
            )</span>
    )

}

export default PriceDifference;