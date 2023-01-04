import ReactMarkdown from 'react-markdown'
import Money from './Money';
import StripePrice from './StripePrice';

const PlotVariantSample = props => {

    return (
        <div className="md:basis-1/3 md:px-2 mb-12">
            <figure>
                <img className="border border-slate-100 mb-6" src={props.img.data.attributes.formats.medium.url} />
                <figcaption>
                    <h4 className='font-primary text-xl'>{props.title} - <StripePrice className="text-pop" id={props.stripe_product_id} /></h4>
                    <ReactMarkdown>{props.description}</ReactMarkdown>
                </figcaption>
            </figure>
        </div>
    )
}

export default PlotVariantSample;