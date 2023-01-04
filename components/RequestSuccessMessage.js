import Link from "next/link";

export default function RequestSuccessMessage(props) {
    return (

        <div className='bg-cool p-4' >
            <p className='text-white'>Thank you for submitting your request. I will be in touch via email to confirm your ownership within 1-3 days. <Link className='underline font-bold' href={'/verify-nft-ownership'}>Learn more about how I verify ownership here.</Link></p>
        </div >

    )
}