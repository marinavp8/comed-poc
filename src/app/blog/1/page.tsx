import React from 'react';
import Article from '@/components/articleb/page';
import Recomendations from '@/components/Recomendations/page';

const products = [
    {
        id: 1,
        name: 'Cicalfate',
        color: "AVENE",
        href: 'https://www.druni.es/cicalfate-avene-serum-facial-reparador?awc=16265_1716815923_c782bb1c97e3cfe787e731cd4448d367&utm_source=awin&utm_medium=deeplink&utm_campaign=afillawin',
        imageSrc: 'https://res.cloudinary.com/dly6v8ee5/image/upload/v1716817007/cicalfate_xs4vsk.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: 'hydrates, nourishes',
    },
    {
        id: 2,
        name: 'Ceramide Cream 10000ppm',
        color: 'Benton',
        href: 'https://miin-cosmetics.com/940-ceramide-cream-10000ppm.html',
        imageSrc: 'https://res.cloudinary.com/dly6v8ee5/image/upload/v1716816841/ceramide-cream_wmgjy4.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: 'protects, repairs',
    },
    {
        id: 3,
        name: 'Aqua Intense 72 H',
        color: 'Rilastil',
        href: 'https://www.amazon.es/Rilastil-Aqua-Intense-Hidratante-Intensivo/dp/B07S22Z6CP?th=1',
        imageSrc: 'https://res.cloudinary.com/dly6v8ee5/image/upload/v1716816841/rilastil_ujbshu.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: 'ligthweight',
    },
    // More products can be added here
];

function MainComponent() {
    return (
        <div>
            <Article
                title="Damaged Skin Barrier - How to Identify It and the Best Solution"
                intro="
                Have you ever looked in the mirror and noticed your skin looking red and rough, or perhaps strangely shiny? Maybe the texture seemed off, or your pores appeared larger than usual. Or have breakouts become more frequent or more inflamed?

You might be tempted to layer on more skincare products to combat these symptoms, but the solution could actually lie at the root of the problem: you are overloading your skin with too many active ingredients. It's possible that your skin is signaling it's oversaturated and overwhelmed.
                "
                introImageUrl="https://res.cloudinary.com/dly6v8ee5/image/upload/v1716817395/barrier_twiu7s.webp"
                sections={[
                    {
                        content: "The first step in addressing skin barrier damage is to recognize the signs and understand the underlying causes.",
                        points: [
                            { title: "Unusual Shine", description: "A strange, glossy appearance can often be a sign of excessive oil production. This might be a reaction to dehydration or irritation, where your skin is trying to compensate for a lack of moisture by producing more oil." },
                            { title: "Textured Skin & Enlarged Pores  ", description: " Textured skin can manifest as bumps, rough patches, or general unevenness. This is often due to clogged pores, dead skin cells, and potential reactions to overly harsh skincare products." },
                            { title: "Increased or More Inflamed Acne ", description: "When the skin barrier is damaged, bacteria can more easily penetrate, and the skin becomes more susceptible to acne and inflammation. Additionally, an impaired barrier can lead to increased skin sensitivity and irritation from products that might not have previously caused issues." },
                            { title: "Red and Rough Skin ", description: "This symptom typically indicates inflammation and irritation. It occurs when your skin's protective barrier is compromised, making it more vulnerable to environmental aggressors, allergens, and irritants." },
                            // { title: "Products That Previously Worked Now Cause Discomfort  ", description: "This occurs when skin sensitivity or allergic reactions develop due to a weakened skin barrier. If products you used comfortably before now cause stinging, burning, or redness, it’s often because your skin's natural defenses are compromised. It's important to recognize that if a product only starts causing reactions after initial successful use, it's likely not the product itself but an indication that your skin barrier is in distress." }
                        ]
                    }
                ]}
                quote="Compromised skin barriers are one of the most significant issues today, as social media promotes excessive and incorrect use of active ingredients, alongside impossibly lengthy routines. Even healthy skin can become irritated and acne-prone under these conditions."
                author="Dr. Sarah Connors"
                authorTitle="Dermatologist"
                authorImage="/images/person/marina.jpeg"
                conclusion="The path to recovery is quite straightforward: it’s essential to pause using all active ingredients like Vitamin C, retinoids, and exfoliants. Don't be afraid to step back from your usual treatments and switch to gentle, restorative products that help accelerate healing. Look for ingredients like ceramides, panthenol, and centella asiatica. Finding such products for acne-prone skin can be challenging, which is why we have curated a selection guaranteed not to clog pores or increase oiliness while assisting in skin regeneration. Lastly, once your skin is fully recovered, you can gradually reintroduce mild actives at lower frequencies and concentrations."
                conclusionImageUrl="https://res.cloudinary.com/dly6v8ee5/image/upload/v1716817395/damage_pk02bu.webp"
            />
            <Recomendations products={products} />
        </div>
    );
}

export default MainComponent;
