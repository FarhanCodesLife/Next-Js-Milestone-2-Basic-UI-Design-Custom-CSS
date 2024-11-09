import React from 'react'
import Image, { StaticImageData } from "next/image";
type ServiceCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
};
const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
    return (
        <React.Fragment>
            <div className="box">
                <Image src={image} alt="no img" width={200} height={100} />
                <h2 className="h-secondary center">{title}</h2>
                <p className="center">{description}</p>
            </div>
        </React.Fragment>
    )
}

export default ServiceCard
