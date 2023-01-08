import Head from "next/head";
import { CldImage } from 'next-cloudinary';

export default function About(props) {


    /**
     * <div className="col-span-1 mb-12">
                        <h3 className="font-primary text-3xl mb-2">AMUSED</h3>
                        <img className="mb-6" src="palettes/amused.png" srcset="palettes/amused.png 1x, palettes/amused@2x.png 2x"
                            alt="Color spectrum of Amused" />
                        <img className="mb-1" src="palette-samples/palette-amused.jpg"
                            srcset="palette-samples/palette-amused.jpg 1x, palette-samples/palette-amused@2x.jpg 2x"
                            alt="Ori - In the amused color palette." />
                    </div>
     */
    const colors = [
        {
            title: 'AMUSED',
            palette: 'amused_2x_xd0ju5',
            sample: 'palette-amused_2x_e9yl7u'
        },
        {
            title: 'briss',
            palette: 'briss_2x_cjjcyk',
            sample: 'palette-briss_2x_hpgyke'
        },
        {
            title: 'cloak',
            palette: 'cloak_2x_lmxroh',
            sample: 'palette-cloak_2x_gjawfb'
        },
        {
            title: 'cloud',
            palette: 'cloud_2x_a0akvn',
            sample: 'palette-cloud_2x_uvn5fl'
        },
        {
            title: 'dove',
            palette: 'dove_2x_eyrfda',
            sample: 'palette-dove_2x_achwb3'
        },
        {
            title: 'exodus',
            palette: 'exodus_2x_zbpzfk',
            sample: 'palette-exodus_2x_ay7rco'
        },
        {
            title: 'feint',
            palette: 'feint_2x_hzphqz',
            sample: 'palette-feint_2x_p8jqnp'
        },
        {
            title: 'gum',
            palette: 'gum_2x_gavvjn',
            sample: 'palette-gum_2x_w5eiaa'
        },
        {
            title: 'method',
            palette: 'method_2x_i9cdj6',
            sample: 'palette-method_2x_xfqqsj'
        },
        {
            title: 'screentime',
            palette: 'screentime_2x_q5vmpl',
            sample: 'palette-screentime_2x_s2rnpt'
        },
        {
            title: 'skull',
            palette: 'skull_2x_ecm4yj',
            sample: 'palette-skull_2x_aalb8h'
        },
        {
            title: 'zest',
            palette: 'zest_2x_cknvuk',
            sample: 'palette-zest_2x_paso0s'
        },
        {
            title: 'montana',
            palette: 'montana_2x_bdbkvj',
            sample: 'montana-mint_2x_cmvi0n'
        }
    ]

    const progression_l = [];
    const progression_r = [];
    for (let i = 0; i <= 50; i++) {
        let f = (i).toString().padStart(2, '0');
        if (i % 1 === 0) {
            progression_l.push(f)
        }
        else {
            progression_r.push(f)
        }
    }

    return (<>

        <Head>
            <title>About / Lostpixels</title>
            {/* <meta name="description" content={ } /> */}
            <link rel="icon" href="/favicon.ico" />
            <script src="https://player.vimeo.com/api/player.js" defer />
        </Head>


        <div style={{ padding: '56.25% 0 0 0', 'position': 'relative' }}><iframe
            src="https://player.vimeo.com/video/769447858?h=c3491e2713&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="ORI - Promo clip [wip]"></iframe>
        </div>


        <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-8'>

            <section className="max-w-4xl mx-auto bottom-divider px-6">

                <p className="mb-8">ORI is a generative art project that combines themes that have deeply inspired my artistic
                    pursuits, so in a way, it's a biography of my evolution in art.</p>


                <p className="mb-16">Growing up, my family would take the bus up to New York City and spend the day wandering around
                    Manhattan. The highlight
                    for me was always Chinatown because I would load up on Origami paper. The packs included instructions for
                    making all
                    sorts of interesting models, including animals, plants, and geometric shapes. I would study these for hours,
                    eventually
                    getting lost in the complex diagrams at the back of the instructions. When I got overwhelmed by the
                    challenging
                    directions, I realized that I could make freeform folds and alter the existing designs to open up new
                    possibilities.</p>

                <div className="grid grid-cols-2 gap-4 mb-16">
                    <div className="col-span-1">
                        <CldImage
                            className="object-contain"
                            width="460"
                            height="611"
                            crop='fill'
                            src='about_section/crane-1_2x_wyoq7e'
                            alt=""
                        />

                    </div>
                    <div className="col-span-1">
                        <CldImage
                            className="object-contain"
                            width="460"
                            height="611"
                            crop='fill'
                            src='about_section/under-bridge_2x_g73upb'
                            alt=""
                        />
                    </div>
                </div>

                <p className="mb-24">In my hometown of Baltimore City, graffiti was all around me, almost like static noise during my
                    everyday life. I
                    developed a profound respect for it as an art form because of its colorful flowing nature and combination of
                    specific
                    shapes and styles. It being illegal and dangerous was icing on the cake. While you aren't going to catch me
                    scaling some corporate headquarters at 4AM to bomb the top-floor windows, I often
                    wander off the beaten path to look at graffiti as inspiration.</p>


            </section>

            <section className="max-w-4xl mx-auto bottom-divider px-6 mb-24">
                <figure className="flex flex-col sm:flex-row-reverse">

                    <div className="flex-auto w-full sm:w-2/4 mb-12 sm:mb-0 sm:mr-8">
                        <video autoPlay="true" loop="true" muted>
                            <source src="https://res.cloudinary.com/dtz3cezyb/video/upload/v1673024972/about_section/bending_knif8f.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <figcaption className=" w-full sm:w-2/4 mr-8">
                        <h2 className="font-bold font-primary text-5xl mb-4">Folding</h2>
                        <p>Finding new mathematical strategies that produce generative artworks is tricky. Artists have utilized
                            flow fields,
                            truchet tiles, and Voronoi diagrams to create vast arrays of unique artwork. Beyond that,
                            lesser-known and undiscovered
                            techniques may be found in generative works. Ori capitalizes on a system that I believe is new while
                            also leaning on
                            many known methods to generate artwork.</p>

                        <p>The core algorithm performs geometric folding on polygons, manipulating their shape by a series of
                            bisecting fold lines.
                            These fold lines will rotate the polygon's vertices to simulate a fold. In some instances, the
                            geometry is sheered in a
                            process that loosely follows <a href="https://en.wikipedia.org/wiki/Kirigami"
                                title="Kirigami article">Kirigami</a>, the act of folding and cutting paper.</p>
                    </figcaption>
                </figure>
            </section>

            <section className="max-w-4xl mx-auto bottom-divider  px-6 mb-24">
                <figure className="flex flex-row-reverse flex-col sm:flex-row">

                    <div className="flex-auto w-full sm:w-2/4 mb-12 sm:mb-0 sm:mr-8">
                        <video autoPlay loop="true" muted>
                            <source src="https://res.cloudinary.com/dtz3cezyb/video/upload/v1673024892/about_section/painting_e8mzga.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <figcaption className=" w-full sm:w-2/4 mr-8">
                        <h2 className="font-bold font-primary text-5xl mb-4">Painting</h2>
                        <p>Paint simulations occupy the vast majority of the rendering process. Each background and foreground
                            polygon is shaded
                            with a layer of spray paint that accumulates millions of individual particles. Those particles can
                            also drip downward,
                            mimicking throws.</p>
                        <p>I spent hours refining the process that sprays paint outward from polygons to ensure it's consistent
                            across various
                            shapes and sizes.</p>
                        <p>Final renders may have paint drips based on their drips attribute. I have incorporated an animation
                            mode on every piece
                            that progressively drips unlimited paint on the canvas and transforms the image. I recommend letting
                            it sit for long
                            periods of time to get unusual results.</p>
                    </figcaption>
                </figure>

            </section>

            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <h1 className="font-bold font-primary text-5xl mb-12">Simulating the paint</h1>


                <CldImage
                    className="mb-12"
                    width="939"
                    height="485"
                    crop='fill'
                    src='about_section/spray_2x_daewo1'
                    alt=""
                />


                <p className="mb-24">Creating irregular-but consistent spray paint artifacts was a unique mathematical challenge
                    that required equal
                    distribution regardless of polygon complexity. Naive implementations that used the polygon area, its
                    circumference, and
                    its number of edges led to weird results. My process involved implementing different algorithms only to have
                    them fail,
                    throwing them away, and rewriting them. Eventually, I found looking at the edge distance of polygons was the
                    best way to
                    distribute splatters.</p>


                <CldImage
                    className="mb-12"
                    width="939"
                    height="485"
                    crop='fill'
                    src='about_section/spray-sample_2x_bh8mik'
                    alt=""
                />


            </section>


            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <h1 className="font-bold font-primary text-5xl mb-4">Color choices</h1>
                <CldImage
                    className="mb-1"
                    width="939"
                    height="434"
                    crop='fill'
                    src='about_section/arizona_2x_nhfi9x'
                    alt=""
                />


                <a href="https://meisphotography.com/" className="inline-block font-primary bg-white px-2 rounded-xl mb-6"
                    target="_blank">Photo by MATT MEISENHEIMER</a>

                <p className="mb-24">Color palettes are curated based on a handful of underlying themes, including street art,
                    digital art, and organic landscapes. I wanted palettes like Zest to feel digital while natural compositions
                    inspire others like Montana.</p>

                <p className="mb-24">Each palette is probabilistically balanced, so colors are not equally distributed. I tweaked
                    each swatch's grain
                    qualities and gradients to form cohesive spraypainted fills.</p>


                <h2 className="font-bold font-primary text-5xl mb-4">Palettes</h2>

                <div className="grid sm:grid-cols-2 gap-4">


                    {colors.map(c => (
                        <div className="col-span-1 mb-12" key={c.title}>
                            <h3 className="font-primary text-3xl mb-2">{c.title}</h3>
                            <CldImage
                                className="mb-6"
                                width="460"
                                height="120"
                                crop='fill'
                                src={`about_section/${c.palette}`}
                                alt={`Color spectrum of ${c.title}`}
                            />

                            <CldImage
                                className="mb-1"
                                width="460"
                                height="611"
                                crop='fill'
                                src={`about_section/${c.sample}`}
                                alt={`Ori - In the ${c.title} color palette.`}
                            />

                        </div>
                    ))}
                </div>

            </section>

            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <h3 className="font-bold font-primary text-5xl mb-12">Color Mutations</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="col-span-1">

                        <CldImage
                            className="mb-1"
                            width="460"
                            height="611"
                            crop='fill'
                            src='about_section/exclusive-yes_2x_dnljfv'
                            alt=""
                        />
                        <span className="inline-block font-primary bg-white px-2 rounded-xl mb-6">colorMOD: Exclusive</span>
                    </div>
                    <div className="col-span-1">
                        <CldImage
                            className="mb-1"
                            width="460"
                            height="611"
                            crop='fill'
                            src='about_section/exclusive-no_2x_pgicwn'
                            alt=""
                        />
                        <span className="inline-block font-primary bg-white px-2 rounded-xl mb-6">colorMOD: NONE</span>
                    </div>
                </div>

                <h3 className="font-primary text-3xl mb-4">Exclusive Color Palettes</h3>
                <p className="mb-24">There's a slight chance a mint may have a reduced color palette derived from a more extensive
                    palette. In this case, there's one primary fill color on geometry that I carefully curated from the larger
                    list. I intended to let the linework, patterns, and background play a more prominent role in the composition
                    in these examples.</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="col-span-1">
                        <CldImage
                            className="mb-1"
                            width="460"
                            height="611"
                            crop='fill'
                            src='about_section/null-color-none_ot7ahw'
                            alt=""
                        />
                        <span className="inline-block font-primary bg-white px-2 rounded-xl mb-6">No NULL COLORS</span>
                    </div>
                    <div className="col-span-1">
                        <CldImage
                            className="mb-1"
                            width="460"
                            height="611"
                            crop='fill'
                            src='about_section/null-color-all_g2h0dk'
                            alt=""
                        />
                        <span className="inline-block font-primary bg-white px-2 rounded-xl mb-6">Maximum NULL COLORS</span>
                    </div>
                </div>

                <h3 className="font-primary text-3xl mb-4">Null Colors</h3>
                <p className="mb-24">Under the spray paint, shapes have pattern work applied to them. Dots, lines, and other
                    patterns are chosen for each
                    mint. Occasionally the spray paint fill is omitted, and "null colors" are presented, showing the bare
                    pattern work.</p>
            </section>



            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <h2 className="font-bold font-primary text-5xl mb-12">Inspiration</h2>

                <CldImage
                    className="mb-12"
                    width="940"
                    height="627"
                    crop='fill'
                    src='about_section/diagram_2x_ceotke'
                    alt=""
                />

                <h3 className="font-primary text-3xl mb-4">Paper Folding</h3>
                <p className="mb-12">Ori is an expression of some of the artistic styles that resonate with me: Origami and street
                    art. I enjoy the craft of
                    folding paper because it's tactile and mathematical; you crease and bend the paper in geometric shapes to
                    turn nothing
                    into something. A little imagination can be required to fully appreciate the polygonal representation of
                    animals,
                    flowers, and objects formed from the paper. Even the <a
                        href="https://en.wikipedia.org/wiki/Yoshizawa%E2%80%93Randlett_system"
                        title="YR Diagrams">Yoshizawa-Randlett diagrams</a> that origami artists create
                    are
                    abstractly represented in Ori as dashed and dotted lines that loosely show fold lines.</p>

                <p className="mb-12">A perfect folding algorithm was not my goal because I saw that it would limit my results to
                    ever-shrinking geometries,
                    much like crumpling paper into a ball. <a href="https://rabbitear.org/" title="Rabbit Ear">Resources do
                        exist</a> to mimic natural paper dynamics. Instead, I
                    decided early on
                    to obey only some of the rules of paper folding and break others to make fascinating results. At this point,
                    my possibilities opened up, and I began to see aesthetically pleasing forms arise.</p>

                <div href="https://lostpixels.io/art/digital-art/rip-suppose/" className="block mb-12">
                    <CldImage
                        className="mb-2"
                        width="940"
                        height="627"
                        crop='fill'
                        src='about_section/floater_yqmso6'
                        alt=""
                    />
                    <span className="inline-block font-primary bg-white px-2 rounded-xl">Floater spotted in Winnoski VT.</span>
                </div>
                <h3 className="font-primary text-3xl mb-4">Graffiti</h3>
                <p className="mb-12">Graffiti reminds me of walking off the beaten path of some of my favorite cities, including
                    Baltimore and Montreal. The interesting things happen outside of the cookie-cutter tourist areas. Graffiti
                    is this fascinating mix of the artwork and the act.
                </p>

                <p className="mb-36">Artists will scale buildings, rappel upside down, or go into perilous situations to achieve
                    notoriety. There's no time to be 100% accurate when you're nervously watching for headlights. That audacity
                    translates into a lasting
                    impression on
                    the resulting painting. I aimed to simulate this fluidity in Ori to break down the perfection that
                    algorithms achieve.</p>

                <a href="https://lostpixels.io/art/digital-art/rip-suppose/" className="block mb-12">
                    <CldImage
                        className="mb-2"
                        width="940"
                        height="476"
                        crop='fill'
                        src='about_section/rip-suppose_2x_cdouhi'
                        alt=""
                    />
                    <span className="inline-block font-primary bg-white px-2 rounded-xl">RIP SUPPOSE - James Merrill (2016)</span>
                </a>

                <h3 className="font-primary text-3xl mb-4">Digital Art</h3>
                <p className="mb-12">I was initially introduced to Abstract digital art in the mid-2000s, an art movement in which I
                    had to participate. I grew my style and techniques with digital painting and 3D software while creating
                    hundreds of artworks during the next ten years. I participated alongside world-className digital artists,
                    including Justin Maller, Kervin Brisseaux, Rik Oostenbroek, and Finnian Macmanus, in groups like Depthcore
                    and EvokeOne.</p>

                <p className="mb-12">Many parallels exist between the concepts expressed in ORI and those found in my Digital Art
                    Portfolio.</p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <a href="https://lostpixels.io/art/digital-art/street-series-lexington-ghetto/" className="block">
                            <CldImage
                                className="mb-2"
                                width="460"
                                height="321"
                                crop='fill'
                                src='about_section/lexington_2x_a426bn'
                                alt=""
                            />
                            <span className="inline-block font-primary bg-white px-2 rounded-xl">STREET SERIES: LEXINGTON GHETTO -
                                James Merrill
                                (2017)</span>
                        </a>
                    </div>
                    <div className="col-span-1 mb-24">
                        <a href="https://lostpixels.io/art/digital-art/street-series-station-north/" className="block">
                            <CldImage
                                className="mb-2"
                                width="460"
                                height="321"
                                crop='fill'
                                src='about_section/station-north_2x_kykadm'
                                alt=""
                            />
                            <span className="inline-block font-primary bg-white px-2 rounded-xl">STREET SERIES: Station North -
                                James Merrill
                                (2017)</span>
                        </a>
                    </div>
                </div>


            </section>


            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <h2 className="font-bold font-primary text-5xl mb-4">Technical Process</h2>
                <p className="mb-12">Creating a long-form generative art project can have contradictory requirements. The project
                    must have diversity, but it
                    should also have well-defined boundaries to achieve consistent quality. Any bias towards either side leads
                    to a
                    subtraction of the overall delivery. One strategy to equally apply diversity is layering transformational
                    steps. This
                    helps add an exponential amount of variations to the overall project. For example, Ori starts with various
                    primitive
                    shapes, and these are then run through a folding transformation, and finally, a distortion effect is
                    applied.</p>

                <CldImage
                    className="mb-2"
                    width="940"
                    height="527"
                    crop='fill'
                    src='about_section/viewer_2x_orwhf7'
                    alt=""
                />
                <span className="mb-12 inline-block font-primary bg-white px-2 rounded-xl">Custom made curation utility</span>


                <p className="mb-12">Visualizing hundreds of different strategic combinations and identifying high and low-quality
                    outliers is a unique
                    challenge. For one, the amount of visual data is overwhelming for one person to parse. Given that the goal
                    aesthetic is
                    not identifiable via an algorithm or process, it becomes the artist's task to curate the outputs manually.
                    Once outliers
                    are flagged, an even more difficult challenge arises: tweaking the algorithm to eliminate the bad results
                    while
                    retaining the good ones. Once a change is implemented, the process of curation starts again. For Ori, I
                    reviewed between
                    2500-5000 images to achieve my goals.</p>

                <p className="mb-12">To curate the collection, I wrote a utility to save, rate, and review individual outputs. Each
                    output takes
                    approximately 3-6 seconds to render, so batch rendering 1000 images could take around an hour and a half.
                </p>


            </section>


            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <h2 className="font-bold font-primary text-5xl mb-4">Layering transformations</h2>

                <p className="mb-12">One way of creating high levels of variability in generative art is to layer manipulations and
                    randomizations on top of
                    each other.</p>



                <p className="mb-12">In ORI, I started with a random geometry generator that I mapped to the
                    <strong>geometry</strong> attribute.
                    Basic shapes like rectangles
                    and circles are composed with a balance of randomness and thoughtfulness. These are akin to the paper that
                    will be
                    folded.
                </p>



                <p className="mb-12">The bend algorithm has various ways of functioning, which I defined in the
                    <strong>strategy</strong> attribute.
                    A Strategy establishes
                    the number, magnitude, direction, length, and position of a collection of bend lines. Think of these as the
                    Origami
                    directions. Patterns will appear if you compare a few mints with the same strategy.
                </p>



                <p className="mb-12"><strong>Complexifying</strong> geometry is my oddly named process of introducing more vertices
                    to geometry to
                    smooth out its results.
                    This can change the output significantly and will complement the bending.</p>


                <p className="mb-12">Reversions are a transformation process that grows and shrinks part of the geometry. They
                    started as a glitch. But as
                    programmers have been doing since the dawn of time, I turned it into a feature. Reversions can be combined
                    with
                    complexified geometry to create liquidy smooth results.</p>

                <p className="mb-12">Together, the geometry, the strategy, the complexity, and the presence of reversions make
                    highly variable results
                    subject to emergent outcomes.</p>

            </section>

            <section className="max-w-4xl mx-auto bottom-divider px-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <div>
                            <h2 className="font-bold font-primary text-5xl mb-4">Progression</h2>
                            <p className="mb-24">Ori began as a concept in November 2021, and I worked on it regularly up until its
                                release in November 2022. Consisting of <strong>175 commits</strong> and <strong>7000
                                    unminified lines of code</strong>, completing the project was a tremendous labor of love.
                                <em>What follows is a glimpse of the snapshots along the way.</em>
                            </p>
                        </div>

                        {progression_l.map(i => <CldImage
                            key={i}
                            className="mb-4 mx-auto"
                            width="460"
                            height="691"
                            crop='fill'
                            src={`about_section/progression/${i}`}
                            alt=""
                        />)
                        }
                    </div>

                    <div className="col-span-1">
                        {progression_r.map(i => <CldImage
                            key={i}
                            className="mb-4 mx-auto"
                            width="460"
                            height="691"
                            crop='fill'
                            src={`about_section/progression/${i}`}
                            alt=""
                        />)
                        }

                    </div>

                </div>
            </section>


            <section className="max-w-4xl mx-auto bottom-divider">
                <h2 className="font-bold font-primary text-3xl text-center">Shouts</h2>
                <div className="font-bold font-primary text-1xl mb-4 text-center">(in no particular order)</div>
                <ul className="flex flex-wrap text-center">
                    <li className="block w-1/3"><a href="https://www.instagram.com/therealgalenfrazer/">Galen Frazier</a></li>
                    <li className="block w-1/3"><a href="https://sonicjunkie.bandcamp.com/">Sonic Junkie</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/justinmaller">Justin Maller</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/patterndotco">Harvey Rayner</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/tylerxhobbs">Tyler Hobbs</a></li>
                    <li className="block w-1/3">Mrinal Astana</li>
                    <li className="block w-1/3"><a href="https://twitter.com/REAS">Casey Reas</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/Licia_He">Licia He</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/v3ga">Julien Gachadoat</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/atleastwedream">Jonathan Foerster</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/departed93">Nicolas Monin-Baroille</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/ravivasavan">Ravi Vasavan</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/Anneli_nft">Anneli</a></li>
                    <li className="block w-1/3"><a href="https://www.instagram.com/anthonygargasz">Anthony Gargasz</a></li>
                    <li className="block w-1/3"><a href="https://www.instagram.com/itsmikeunruh/">Mike Unruh</a></li>
                    <li className="block w-1/3"><a href="https://www.instagram.com/eskaeone/">Eskae One</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/zancan">Zancan</a></li>
                    <li className="block w-1/3"><a href="https://twitter.com/p1xelfool">p1xelfool</a></li>
                    <li className="block w-1/3">The Parkers</li>
                    <li className="block w-1/3"><a href="https://twitter.com/smilingdemon">Alastair Temple</a></li>
                    <li className="block w-1/3"><a href="https://www.instagram.com/ben_nvlnvl/">Ben White</a></li>
                    <li className="block w-1/3"><a href="https://www.instagram.com/ckgdesign/">Kocho</a></li>
                    <li className="block w-1/3"><a href="https://www.tinylittlegrandma.com/">James Lane</a></li>
                </ul>



            </section>

        </div>
    </>
    )

}
