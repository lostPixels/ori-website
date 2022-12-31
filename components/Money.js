const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Money = ({ price, className = '' }) => (<span className={className}>{formatter.format(price)}</span>)

export default Money;