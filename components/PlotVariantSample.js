import ReactMarkdown from 'react-markdown'
import Money from './Money';

const PlotVariantSample = props => {

    return (
        <div className="md:basis-1/3 md:px-2 mb-12">
            <figure>
                <img className="border border-slate-100 mb-6" src={props.img.data.attributes.formats.medium.url} />
                <figcaption>
                    <h4 className='font-primary text-xl'>{props.title} - <Money className="text-pop" price={props.price} /></h4>
                    <ReactMarkdown>{props.description}</ReactMarkdown>
                </figcaption>
            </figure>
        </div>
    )
}

export default PlotVariantSample;