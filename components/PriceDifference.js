const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const PriceDifference = props => {

    const delta = props.new - props.current;
    const price = formatter.format(Math.abs(delta))

    if (delta === 0) {
        return null;
    }

    return (
        <span className="text-slate-700">(
            {delta > 0 ? '+' : '-'}
            {price})</span>
    )
}

export default PriceDifference;