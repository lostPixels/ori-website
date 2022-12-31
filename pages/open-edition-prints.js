export default function OpenEditionPrints(props) {


    return (
        <h1>LOLOLOL</h1>
    )
}

export async function getStaticProps() {

    let shopData = await fetch('https://clownfish-app-f4hhn.ondigitalocean.app/api/open-edition-prints?populate=*');
    shopData = await shopData.json();


    const products = ['plotter-drawing', 'nft-bound-print', 'open-edition-prints-master', 'rough-cut-drawings-master']
    let i = 0;

    let productData = [];
    while (i < products.length) {
        let slug = products[i];
        try {
            const res = await fetch(`https://clownfish-app-f4hhn.ondigitalocean.app/api/${slug}?populate=*`);
            const data = await res.json();
            productData.push({ ...data, slug });
        }
        catch (e) {
            console.warn(`Error Loading ${slug}`)
        }

        i++;
    }

    productData = productData.filter(d => !d.error);

    return {
        props: {
            shop: { ...shopData.data.attributes },
            productData
        }
    }
}

