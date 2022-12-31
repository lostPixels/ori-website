import Money from "./Money";


const PriceDifference = props => {

    const delta = props.new - props.current;
    const price = Math.abs(delta);

    if (delta === 0) {
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