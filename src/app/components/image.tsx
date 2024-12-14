import Image from 'next/image';
import { ImageProps } from '@/app/interfaces/imageprops';

const ImageComponent = ({ src, alt, className, quality = 100 }: ImageProps) => {
    return (
        <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
            <Image
                src={src}
                alt={alt}
                quality={quality}
                width={500}
                height={500}
                priority={true}
                className="rounded-lg object-cover w-auto h-full"
            />
        </div>
    );
};

export default ImageComponent;
