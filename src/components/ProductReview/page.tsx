import Image from 'next/image';
import Link from 'next/link';

interface ProductReviewProps {
    category: string;
    productName: string;
    imageSrc: string;
    imageAlt: string;
    photoCredit: string;
    buyLink: string;
    price: number;
    store: string;
    likes: string[];
    considerations: string[];
}

const ProductReview: React.FC<ProductReviewProps> = ({
    category,
    productName,
    imageSrc,
    imageAlt,
    photoCredit,
    buyLink,
    price,
    store,
    likes,
    considerations
}) => {
    return (
        <div>
            <h1 className="text-xl font-semibold mt-10 mb-4">{category}</h1>
            <h2 className="text-l font-semibold mb-6 border-b pb-2">{productName}</h2>

            <div className="mb-6">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={300}
                    height={300}
                    className="h-auto"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">PHOTO: {photoCredit}</p>
            </div>

            <div className="mb-6">
                <Link
                    href={buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black text-white text-sm text-center py-3 rounded hover:bg-gray-800 transition duration-300"
                >
                    ${price} AT {store}
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded">
                    <h3 className="text-m font-semibold mb-4">What We Like</h3>
                    <ul className="list-disc pl-5 space-y-2 text-l">
                        {likes.map((like, index) => (
                            <li key={index}>{like}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded">
                    <h3 className="text-m font-semibold mb-4">What to Consider</h3>
                    <ul className="list-disc pl-5 text-l">
                        {considerations.map((consideration, index) => (
                            <li key={index}>{consideration}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
